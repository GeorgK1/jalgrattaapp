//stiil
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        fontFamily: 'Poppins_400Regular',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#26537D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 8,
        margin: 16,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },

    text: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 36,
        width: 300,
        margin: 15,
        borderRadius: 5,
    },
    preferenceText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        width: 300,
        margin: 15,
        borderRadius: 5,
    },
    infoText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        textAlign: 'left',
        fontSize: 18,
        margin: 15,
        borderRadius: 5,
    },
    wrongAnswerText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        margin: 15,
    },
    counterText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        width: 300,
        borderRadius: 5,
    },
    questionContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#26537D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    preferenceContainer: {
        fontFamily: 'Poppins_400Regular',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#26537D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    answerContainer: {
        flexDirection: 'column',
        backgroundColor: '#26537D',
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    answerText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        margin: 12,
        borderRadius: 5,
    },
    questionPanelText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 20,
        margin: 12,
        borderRadius: 5,
    },

    answerButton: {
        borderRadius: 8,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        elevation: 5,
    },
    counterText: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 15,
        borderRadius: 5,
        marginLeft: 'auto',
    },
    resultText:{
        fontFamily: 'Poppins_400Regular',
        
        color: 'white',
        fontSize: 35,
        borderRadius: 5,
        justifyContent:'flex-start',
        marginBottom: 'auto'
    }
});
