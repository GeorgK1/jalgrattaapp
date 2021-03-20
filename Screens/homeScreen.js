import React from "react";
import {
    Text,
    View,
    Pressable,
} from 'react-native';
import styles from './styles.js';

export default ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 36, marginBottom: 50 }}>
                Tere tulemast!
            </Text>

            <Pressable
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#13293D' : '#1B98E0' },
                    styles.button,
                ]}
                onPress={() => navigation.navigate('Testisätted')}>
                <Text style={styles.text}>Alusta!</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#13293D' : '#1B98E0' },
                    styles.button,
                ]}
                onPress={() => navigation.navigate('Tulemused')}>
                <Text style={styles.text}>Tulemused</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#13293D' : '#1B98E0' },
                    styles.button,
                ]}
                onPress={() => navigation.navigate('Info')}>
                <Text style={styles.text}>Info</Text>
            </Pressable>
            
        </View>
    );
};