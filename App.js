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
    const [resCount, setResCount] = useState(0);
    const [result, setResult] = useState('');
    const [ItemExists, setItemExists] = useState('true');

    const getData = async () => {
        
        try {
            let jsonValue = await AsyncStorage.getItem(`score_1`);
            if (jsonvalue === null) {
                setItemExists('false');
            }
            const strJson = JSON.parse(jsonValue);
            setResult(strJson);
            return result;
            
        } catch (e) {
            // error reading value
        }
    };
    clearAsyncStorage = async () => {
        AsyncStorage.clear();
    };
    getData();
    return (
        <ScrollView contentContainerStyle={styles.resultTextScrollView}>
        {ItemExists ? (
            <View style={styles.resultTextContainer}>
                <Text style={styles.resultText}>Skoor: {result.score}</Text>
                <Text style={styles.resultText}>
                    resnum: {result.testNumber}
                </Text>
                <Text style={styles.resultText}>
                    Küsimuste arv: {result.test}
                </Text>
                <Text style={styles.resultText}>
                    Protsent: {Math.floor(result.precentage)} %
                </Text>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#13293D' : '#1B98E0',
                        },
                        styles.button,
                    ]}
                    onPress={() => {
                        clearAsyncStorage();
                    }}>
                    <Text style={styles.text}>Puhasta tulemused!</Text>
                </Pressable>
            </View>
        ) : (
            <View style={styles.resultTextContainer}>
                <Text style={styles.resultText}>Te ei ole veel teste lahendanud!</Text>
            </View>
        )}
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
