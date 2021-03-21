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
    const STORAGE_KEY = '@results';
    const [results, setResults] = useState(0);
    const { precentage } = route.params;
    const { score } = route.params;
    const { testAmount } = route.params;
    
    const readData = async () => {
        try {
          const results = await AsyncStorage.getItem(STORAGE_KEY)
      
          if (results !== null) {
            return results
          }
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
      }
    return (
        <ScrollView style={styles.answerContainer}>
            <Text style={styles.resultText}>Tulemused</Text>
            
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
