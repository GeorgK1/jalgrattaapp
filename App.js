import React, { useState, useRef } from 'react';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Text, View, Pressable, Image, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Screens/styles.js';
import HomeScreen from './Screens/homeScreen.js';
import TestScreen from './Screens/testMenu.js';
import Tests from './Screens/Tests.js';

//navigatsioon
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
                    <Stack.Screen name='Avaleht' component={HomeScreen} />
                    <Stack.Screen name='Testisätted' component={TestScreen} />
                    <Stack.Screen name='Tulemused' component={Option1} />
                    <Stack.Screen name='Info' component={Option2} />
                    <Stack.Screen name='Testid' component={Tests} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

const Option1 = ({ route }) => {
    
    const readData = async () => {
        try {
          const readPrecentage = await AsyncStorage.getItem('precentage')
          const readScore = await AsyncStorage.getItem('score')
          const readTestAmount = await AsyncStorage.getItem('testAmount')
          if (results !== null) {
            return readPrecentage
          }
        } catch (e) {
            <Text style={styles.resultText}>Sul ei ole veel ühtegi testi lahendatud!</Text>
        }
      }
    return (
        <ScrollView style={styles.answerContainer}>
            <Text style={styles.resultText}>Tulemused</Text>
            <Text style={styles.resultText}>{readData()}</Text>
            
        </ScrollView>
    );
};

const Option2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>
                Tehtud 11.klassi praktilise töö raames Georg Kiviväli poolt.
            </Text>
        </View>
    );
};
