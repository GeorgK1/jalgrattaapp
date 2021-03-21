import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './styles.js';
import Slider from '@react-native-community/slider';

export default ({ navigation }) => {
    const [testValue, setSliderValue] = useState(0);

    return (
        <View style={styles.preferenceContainer}>
            <Text style={styles.preferenceText}>
                Palun vali mitu küsimust testis on*.
            </Text>
            <Text style={styles.preferenceText}>{testValue} küsimust</Text>

            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={1}
                maximumValue={30}
                step={1}
                onValueChange={(id) => setSliderValue(id)}
                testValue={testValue}
                minimumTrackTintColor='#1B98E0'
                maximumTrackTintColor='#1B98E0'
                thumbTintColor='#1B98E0'
            />

            <View>
                {testValue > 0 && (
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? '#13293D'
                                    : '#1B98E0',
                            },
                            styles.button,
                            <View opacity={1} />,
                        ]}
                        onPress={() =>
                            navigation.navigate('Testid', { test: testValue })
                        }>
                        <Text style={styles.text}>Jätka</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
};
