import React, { useState } from 'react';
import { Text, View, Pressable, Image, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import styles from './styles.js';
import { module_1 } from '../questions/module_1.js';
import { module_2 } from '../questions/module_2.js';
import { module_3 } from '../questions/module_3.js';
import { module_4 } from '../questions/module_4.js';
import { module_5 } from '../questions/module_5.js';
import { module_6 } from '../questions/module_6.js';
import { module_7 } from '../questions/module_7.js';
import { module_8 } from '../questions/module_8.js';
import { module_9 } from '../questions/module_9.js';
import { module_10 } from '../questions/module_10.js';

export default ({ route, navigation }) => {
    const { test } = route.params;
    const moduleList = [
        module_1,
        module_2,
        module_3,
        module_4,
        module_5,
        module_6,
        module_7,
        module_8,
        module_9,
        module_10,
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showWrongAnswer, setShowWrongAnswer] = useState(false);
    const [randomModuleArray, setRandomModuleArray] = useState(0);
    //const [randomQuestionArray, setRandomQuestionArray] = useState(0);
    //const randomNumber = ~~(Math.random() * questions.length);

    const randomModule = ~~(Math.random() * moduleList.length);
    const randomQuestion = ~~(Math.random() * 10);

    const [onContinue, setOnContinue] = useState(false);
    const nextQuestion = currentQuestion + 1;
    const precentage = (score / test) * 100;

    const handleWrongAnswer = () => {
        setShowWrongAnswer(false);
        setOnContinue(true);
        if (nextQuestion < test) {
            setCurrentQuestion(nextQuestion);
            setShowWrongAnswer(false);
        } else {
            setShowScore(true);
        }
    };
    console.log(moduleList[randomModule][0]);
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            setShowWrongAnswer(false);
        }
        if (!isCorrect) {
            setShowWrongAnswer(true);
            setRandomNumberArray(randomNumber);
        }

        if (nextQuestion < test && isCorrect) {
            setCurrentQuestion(nextQuestion);
            setShowWrongAnswer(false);
        } else if (!isCorrect) {
            setShowWrongAnswer(true);
        } else {
            setShowScore(true);
        }
    };

    return (
        <View style={styles.questionContainer}>
            {showScore ? (
                <View style={styles.container}>
                    <Text style={styles.questionPanelText}>Tulemus:</Text>
                    <Text style={styles.preferenceText}>
                        {score}/{test} õigesti
                    </Text>
                    <Text style={styles.preferenceText}>
                        {Math.floor(precentage)}% õige
                    </Text>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? '#13293D'
                                    : '#1B98E0',
                            },
                            styles.button,
                        ]}
                        onPress={() =>
                            navigation.navigate('Tulemused', {
                                result: precentage,
                            })
                        }>
                        <Text style={styles.text}>Uuesti!</Text>
                    </Pressable>
                </View>
            ) : showWrongAnswer ? (
                <View>
                    <Text style={styles.wrongAnswerText}>Vale vastus!</Text>

                    <ScrollView style={styles.answerContainer}>
                        {moduleList[randomModule][randomQuestion].answerOptions.map(
                            (answerOption, i) => (
                                <Pressable
                                    key={i}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? '#1B98E0'
                                                : answerOption.isCorrect
                                                ? 'green'
                                                : !answerOption.isCorrect
                                                ? 'red'
                                                : '#13293D',
                                        },
                                        styles.answerButton,
                                    ]}>
                                    <Text style={styles.answerText}>
                                        {answerOption.answerText}
                                    </Text>
                                </Pressable>
                            )
                        )}
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? '#13293D'
                                        : '#1B98E0',
                                },
                                styles.button,
                            ]}
                            onPress={handleWrongAnswer}>
                            <Text style={styles.text}>Jätka!</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            ) : (
                <>
                    <Text style={styles.counterText}>
                        {currentQuestion + 1} / {test}
                    </Text>

                    <Text style={styles.questionPanelText}>
                        {moduleList[randomModule][randomQuestion].questionText}
                    </Text>

                    {moduleList[randomModule][randomQuestion].imgPath !== undefined && (
                        <Image
                            style={{ height: '30%', width: '70%' }}
                            source={`moduleList[randomModule][randomQuestion]`[1].imgPath}
                        />
                    )}

                    <ScrollView style={styles.answerContainer}>
                        {moduleList[randomModule][randomQuestion].answerOptions.map(
                            (answerOption, i) => (
                                <Pressable
                                    key={i}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? '#13293D'
                                                : '#1B98E0',
                                        },
                                        styles.answerButton,
                                    ]}
                                    onPress={() =>
                                        setTimeout(function () {
                                            handleAnswerButtonClick(
                                                answerOption.isCorrect
                                            );
                                        }, 500)
                                    }>
                                    <Text style={styles.answerText}>
                                        {answerOption.answerText}
                                    </Text>
                                </Pressable>
                            )
                        )}
                    </ScrollView>
                </>
            )}
        </View>
    );
};
