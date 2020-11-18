import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
import {questions} from './questions.js';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

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
  const [timeValue, setSliderValue1] = useState(0);
    
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

    <Text style={styles.preferenceText}>Vali ajalimiit.</Text>
    <Text style={styles.preferenceText}>{timeValue} min</Text>
    
    <Slider
    style={{width: 200, height: 40}}
    minimumValue={1}
    maximumValue={30}
    step={1}
    onValueChange={(id) => setSliderValue1(id)}   
    timeValue={timeValue}
    minimumTrackTintColor="#1B98E0"
    maximumTrackTintColor="#1B98E0"
    thumbTintColor= '#1B98E0'
    />  
    <View>
    { testValue > 0 &&
      <Pressable
       style={({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0', },
       styles.button, <View opacity={1} />]} onPress={() => navigation.navigate('Testid', {time : timeValue, test: testValue})}>  
      <Text style = {styles.text}>Jätka</Text>
       </Pressable>
    }  
    </View>
    <Text style={{fontSize: 18,color: "white",fontFamily:"Poppins_400Regular"}}>* märgitud väljad on kohustuslikud.</Text>
  </View>
  ) 
};
const Testid = ({route, navigation}) => {
  const { time } = route.params;
  const { test } = route.params;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  var randomNumber = Math.floor(Math.random()*10)+1
  console.log(randomNumber)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < test) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  
  const formatRemainingTime = time => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds}`;
};

  return( 
    <View style={styles.questionContainer}>
     
    {showScore ? (
      <View style={styles.container}>
      <Text style={styles.questionPanelText}>Tulemus:</Text>
      <Text style={styles.preferenceText}>{score}/{test} õigesti</Text>
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Testisätted')}><Text style = {styles.text}>Uuesti!</Text></Pressable>
      </View>
    ) : (
      <>
      <Text style = {styles.counterText}>{currentQuestion+1} / {test}</Text>
      <View style={styles.timercounterContainer}>
      
      {time > 0 &&
        <CountdownCircleTimer
          isPlaying
          duration={time*60}
          size={80}
          strokeWidth={0}
          ariaLabel={'Sekundit'}
          colors={[["#26537D", 0.33], ["#26537D", 0.33], ["#26537D"]]}
      >
        {({ remainingTime, animatedColor }) => (
         
        
        <Text style={styles.questionPanelText}>{formatRemainingTime(remainingTime)}</Text>
          
        
      )}
    </CountdownCircleTimer>
    }
    </View>
      <Text style = {styles.questionPanelText}>{questions[[currentQuestion]].questionText}</Text>
      <Image style={{height:'30%',width:'70%'}} source ={questions[[currentQuestion]].imgPath}/>
      <ScrollView style={styles.answerContainer}>
      {
          questions[currentQuestion].answerOptions.map((answerOption) => (
            <Pressable style={ ({ pressed }) => [{backgroundColor: !pressed ? '#1B98E0' : answerOption.isCorrect ? "green" : !answerOption.isCorrect ? "red":  '#13293D'}, styles.answerButton]}
            onPress={() => handleAnswerButtonClick(answerOption.isCorrect)}><Text style = {styles.answerText}>{answerOption.answerText}</Text></Pressable>
      ))}
      </ScrollView>
    </>
    )}
    </View>
  ) 
};

const Option1 = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.preferenceText}>Nõuetele vastav jalgratas.</Text>
    <Image style={{height:'50%',width:'100%'}} source ={require('./assets/option1.png')}/>
    </View>
  ) 
};
const Option2 = () => {
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
  timercounterContainer:{
    marginLeft: 'auto',
    flex: 1,
    flexDirection:'row',
    justifyContent: "flex-start",
    backgroundColor: "#26537D",
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
    left: 0,
    flexDirection:'column',
    backgroundColor: "#26537D",
    textAlign: 'center',
    padding: 20,
    
    width: '100%',
  },
  answerText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    margin: 12,
    borderRadius: 5,
  },
  questionPanelText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    margin: 12,
    borderRadius: 5,
  },
  answerButton: {
    borderRadius: 8,
    margin: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    elevation: 5,
  },
  counterText:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign:"right",
    fontSize: 15,
    borderRadius: 5,
    textAlign:"center",
  },
 
});
