import React, { useState, useEffect } from 'react';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Text, View, Pressable, Image, FlatList } from 'react-native';
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
    const [stateResult, setStateResult] = useState([]);
    const [arrayCopy, setArrayCopy] = useState([])
    const [itemExists, setItemExists] = useState(true);
    const [loadData, setLoadData] = useState(false);
    allResults = [...stateResult]
    const getData = async () => {
        setLoadData(true);
        try {
            const keys = await AsyncStorage.getAllKeys();
            const results = await AsyncStorage.multiGet(keys);
            
            console.log(keys)
            results.forEach((result) => allResults.push(JSON.parse(result[1])));
            
            setStateResult(allResults);
            if (results === undefined || results.length == 0) {
                setItemExists(false);
            } else {
                setItemExists(true);
            }
        } catch (e) {
            // error reading value
        }
    };
    clearAsyncStorage = async () => {
        AsyncStorage.clear();
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#13293D' : '#1B98E0',
                    },
                    styles.button,
                ]}
                onPress={() => {
                    getData();
                }}>
                <Text style={styles.text}>Lae oma tulemused!</Text>
            </Pressable>
            {loadData ? (
                <>
                    <FlatList
                        data={stateResult}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                            <View style={styles.resultTextContainer}>
                            <Text style={styles.resultText}>{item.testnum+1})</Text>
                            <Text style={styles.resultText}>Punktid: {item.score}</Text>
                            <Text style={styles.resultText}>Testide arv: {item.questionCount}</Text>
                            <Text style={styles.resultText}>Protsent: {Math.floor(item.precentage)}%</Text>
                            
                            </View>
                            )
                        }}
                        
                    />
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? '#13293D'
                                    : '#1B98E0',
                            },
                            styles.button,
                        ]}
                        onPress={() => {
                            clearAsyncStorage();
                        }}>
                        <Text style={styles.text}>Puhasta!</Text>
                    </Pressable>
                </>
            ) : !itemExists ? (
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Sa pole veel teste lahendanud!
                    </Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.text}>
                        
                    </Text>
                </View>
            )}
        </View>
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
