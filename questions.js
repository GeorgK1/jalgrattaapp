import React from 'react';
import {
  Image,
} from "react-native";

export const questions = [
  
        {
          questionText: 'Kes annab ristmikul teed?',
          imgPath: require('./assets/test.png'),
          answerOptions: [
            { answerText: 'A', isCorrect: false },
            { answerText: 'B', isCorrect: false },
            { answerText: 'C', isCorrect: true },
          ],
        },
        {
          questionText: 'Kellele annad teed?',
          imgPath: require('./assets/test2.png'),
          answerOptions: [
            { answerText: 'A', isCorrect: false },
            { answerText: 'B', isCorrect: true },
            { answerText: 'C', isCorrect: false },
            
          ],
        },
        {
          questionText: 'The iPhone was created by which company?',
          answerOptions: [
            { answerText: 'A', isCorrect: true },
            { answerText: 'B', isCorrect: false },
            { answerText: 'C', isCorrect: false },
          
          ],
        },
        {
          questionText: 'How many Harry Potter books are there?',
          answerOptions: [
            { answerText: 'A', isCorrect: false },
            { answerText: 'B', isCorrect: false },
            { answerText: 'C', isCorrect: false },
            
          ],
        },
      ];