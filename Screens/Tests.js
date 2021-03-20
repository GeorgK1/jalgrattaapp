import React, { useState} from 'react';
import {
    Text,
    View,
    Pressable,
    Image,
    ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import styles from './styles.js';
import { questions } from '../questions/questions.js';

export default ({ route, navigation }) => {
    const { test } = route.params;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showWrongAnswer, setShowWrongAnswer] = useState(false);
    const [randomNumberArray, setRandomNumberArray] = useState(0);
    const randomNumber = ~~(Math.random() * questions.length);
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
                        onPress={() => navigation.navigate('Tulemused', { result: precentage })}>
                        <Text style={styles.text}>Uuesti!</Text>
                    </Pressable>
                </View>
            ) : showWrongAnswer ? (
                <View>
                    <Text style={styles.wrongAnswerText}>Vale vastus!</Text>

                    <ScrollView style={styles.answerContainer}>
                        {questions[randomNumberArray].answerOptions.map(
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
                        {questions[[randomNumber]].questionText}
                    </Text>

                    {questions[[randomNumber]].imgPath !== undefined && (
                        <Image
                            style={{ height: '30%', width: '70%' }}
                            source={questions[[randomNumber]].imgPath}
                        />
                    )}

                    <ScrollView style={styles.answerContainer}>
                        {questions[randomNumber].answerOptions.map(
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