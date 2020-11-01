import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';



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
        <Stack.Screen name="Testid" component={TestScreen} />
        <Stack.Screen name="Seade1" component={Option1} /> 
        <Stack.Screen name="Seade2" component={Option2} />   
        </Stack.Navigator>
      </NavigationContainer>
  );
};
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={{ color: "white", fontSize: 36,marginBottom:50,}}>Tere tulemast!</Text>
      
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Testid')}><Text style = {styles.text}>Alusta!</Text></Pressable>
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Seade1')}><Text style = {styles.text}>Seade 1</Text></Pressable>
      <Pressable style={ ({ pressed }) => [{backgroundColor: pressed ? '#13293D' : '#1B98E0'}, styles.button]} onPress={() => navigation.navigate('Seade2')}><Text style = {styles.text}>Seade 2</Text></Pressable>  
      <StatusBar style="auto" />
  
  </View>
  )
}

const TestScreen = () => {
  return(
    <View style={styles.ScreenTestCont}>
    <Text style={styles.textScreenTest}>Palun vali mitu küsimust testis on.</Text>

    <Slider
    style={{width: 200, height: 40}}
    minimumValue={0}
    maximumValue={15}
    minimumTrackTintColor="#1B98E0"
    maximumTrackTintColor="#1B98E0"
    thumbTintColor= '#1B98E0'
    
    />
    </View>
  ) 
};

const Option1 = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.textScreenTest}>Under construction.</Text>
    </View>
  ) 
};
const Option2 = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.textScreenTest}>Under construction.</Text>
    </View>
  ) 
};
const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins_400Regular",
    flex: 2,
    flexDirection:'column',
    backgroundColor: "#26537D",
    alignItems: "center",
    justifyContent: "center",    
  },
  button: {
    borderRadius: 8,
    margin: 16,
    height: 80,
    width: '70%',
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
  textScreenTest:{
    fontFamily: "Poppins_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    width: 300,
    margin: 15,
    borderRadius: 5,
  },
  ScreenTestCont:{
    fontFamily: "Poppins_400Regular",
    flex: 1,
    flexDirection:'column',
    backgroundColor: "#26537D",
    alignItems: "center",
    justifyContent: "flex-start",    
  },
});
