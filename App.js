import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  
} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
import {questions} from './questions.js';
import CheckBox from '@react-native-community/checkbox';

//Menuu navigatsioon
export default () => {
  
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Avaleht"
          component={HomeScreen}
        />
        <Stack.Screen name="Testisätted" component={TestScreen} />
        <Stack.Screen name="Seade1" component={Option1} /> 
        <Stack.Screen name="Seade2" component={Option2} />
        <Stack.Screen name="Testid" component={Testid} />   
        </Stack.Navigator>
      </NavigationContainer>
  );
};
}
//Menuu
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={{ color: "white", fontSize: 36,marginBottom:50,}}>Tere tulemast!</Text>
      
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Testisätted')}><Text style = {styles.text}>Alusta!</Text></Pressable>
      
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Seade2')}><Text style = {styles.text}>About</Text></Pressable>  
      <StatusBar style="auto" />
  
  </View>
  )
}

//Testi satted
const TestScreen = ({navigation}) => {
  const [testValue, setSliderValue] = useState(0);
  
    
  return(
    <View style={styles.preferenceContainer}>
    <Text style={styles.preferenceText}>Palun vali mitu küsimust testis on*.</Text>
    <Text style={styles.preferenceText}>{testValue} küsimust</Text>
    
    <Slider
    style={{width: 200, height: 40}}
    minimumValue={1}
    maximumValue={15}
    step={1}
    onValueChange={(id) => setSliderValue(id)}
    testValue={testValue}
    minimumTrackTintColor="#1B98E0"
    maximumTrackTintColor="#1B98E0"
    thumbTintColor= '#1B98E0'
    />

    <View>
    { testValue > 0 &&
      <Pressable
       style={({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0', },
       styles.button, <View opacity={1} />]} onPress={() => navigation.navigate('Testid', {test: testValue})}>  
      <Text style = {styles.text}>Jätka</Text>
       </Pressable>
    }  
    </View>
    <Text style={{fontSize: 18,color: "white",fontFamily:"Poppins_400Regular"}}>* märgitud väljad on kohustuslikud.</Text>
  </View>
  ) 
};
const Testid = ({route, navigation}) => {
  const { test } = route.params;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0); 
  const [showWrongAnswer, setShowWrongAnswer] = useState(false)
  const [randomNumberArray, setRandomNumberArray] = useState(0);
  const randomNumber = ~~(Math.random() * questions.length);
  const [onContinue, setOnContinue] = useState(false);
  const nextQuestion = currentQuestion + 1;
  
  const handleWrongAnswer = () =>{
    setShowWrongAnswer(false);
    setOnContinue(true);
    if (nextQuestion < test) {
      setCurrentQuestion(nextQuestion)
      setShowWrongAnswer(false);
    } else {
      setShowScore(true)
    }
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect){
      setScore(score + 1);
      setShowWrongAnswer(false);
    } 
    if (!isCorrect){
      
      setShowWrongAnswer(true);
      setRandomNumberArray(randomNumber)
    } 
  
    
    if (nextQuestion < test && isCorrect) {
        setCurrentQuestion(nextQuestion)
        setShowWrongAnswer(false);
    } else if (!isCorrect){
      setShowWrongAnswer(true);
    } else{
      setShowScore(true)
    }
  };

  return( 
    <View style={styles.questionContainer}>
     
    {showScore ? (
      <View style={styles.container}>
      <Text style={styles.questionPanelText}>Tulemus:</Text>
      <Text style={styles.preferenceText}>{score}/{test} õigesti</Text>
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Testisätted')}><Text style = {styles.text}>Uuesti!</Text></Pressable>
      </View>
    ) : showWrongAnswer ? 
         <View>
        <Text style = {styles.wrongAnswerText}>Vale vastus!</Text>
      
      <ScrollView style={styles.answerContainer}>
      {
          questions[randomNumberArray].answerOptions.map((answerOption, i) => (
            <Pressable key={i}
              style={ ({ pressed }) => [{backgroundColor: pressed ? '#1B98E0' : answerOption.isCorrect ? "green" : !answerOption.isCorrect ? "red":  '#13293D'}, styles.answerButton]}
              ><Text style = {styles.answerText}>{answerOption.answerText}</Text>
              </Pressable>
              
      ))}
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={handleWrongAnswer}><Text style = {styles.text}>Jätka!</Text></Pressable>
      </ScrollView>
        </View>
    :(
      <>
      <Text style = {styles.counterText}>{currentQuestion+1} / {test}</Text>
      
      <Text style = {styles.questionPanelText}>{questions[[randomNumber]].questionText}</Text>
      
      
      {questions[[randomNumber]].imgPath !== undefined &&
        <Image style={{height:'30%',width:'70%'}} source ={questions[[randomNumber]].imgPath}/>  
      }
      
      <ScrollView style={styles.answerContainer}>
         
      {
          questions[randomNumber].answerOptions.map((answerOption, i) => (
            <Pressable key={i}
              style={ ({ pressed }) => [{backgroundColor: !pressed ? '#1B98E0' : answerOption.isCorrect ? "green" : !answerOption.isCorrect ? "red":  '#13293D'}, styles.answerButton]}
              onPress={() =>setTimeout(function(){ handleAnswerButtonClick(answerOption.isCorrect); }, 500) }><Text style = {styles.answerText}>{answerOption.answerText}</Text>
              </Pressable>
              
      ))}
      </ScrollView>
      
    </>
    )}
    </View>
  ) 
};

const Option2 = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.preferenceText}>Nõuetele vastav jalgratas.</Text>
    <Image style={{height:'50%',width:'100%'}} source ={require('./assets/option1.png')}/>
    </View>
  ) 
};
const Option1 = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.preferenceText}>Under construction.</Text>
    </View>
  ) 
};
//stiil
const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins_400Regular",
    flex: 1,
    flexDirection:'column',
    backgroundColor: "#26537D",
    alignItems: "center",
    justifyContent: "center",   
    
  },
  button: {
    borderRadius: 8,
    margin: 16,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
 
  text:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 36,
    width: 300,
    margin: 15,
    borderRadius: 5,
  },
  preferenceText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    width: 300,
    margin: 15,
    borderRadius: 5,
  },
  wrongAnswerText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    margin: 15,
  },
  counterText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    width: 300,
    borderRadius: 5,
  },
  questionContainer:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: "#26537D",
    alignItems: "center",
    justifyContent: "center", 
    
  },
  preferenceContainer:{
    fontFamily: "Poppins_400Regular",
    flex: 1,
    flexDirection:'column',
    backgroundColor: "#26537D",
    alignItems: "center",
    justifyContent: "center",  
      
  },
  answerContainer:{
    flexDirection:'column',
    backgroundColor: "#26537D",
    textAlign: 'center',
    padding: 20,
    width: '100%',
  },
  answerText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    margin: 12,
    borderRadius: 5,
  },
  questionPanelText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 20,
    margin: 12,
    borderRadius: 5,
  },
 
  answerButton: {
    
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    elevation: 5,
  },
  counterText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 15,
    borderRadius: 5,
    marginLeft: 'auto',
  },
 
});
