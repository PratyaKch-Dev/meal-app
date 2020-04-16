import React, { useState,useEffect } from 'react'
import { View, Text, Button,Alert ,Keyboard, Dimensions, StyleSheet } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import Card from '..//components/Card'
import Input from '../components/Input'
import * as resultActions from '../store/actions/result'

const CalculateScreen = props => {

    const lists = useSelector(state => state.lists.lists);
    console.log("list :: " + lists);

    const dispatch = useDispatch();

    const [enteredValue, setEnterValue] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [selectResultNumber,setSelectResultNumber] = useState();

    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g), '');
    };

    const resetInputHandler = () => {
        setEnterValue('');
        setConfirm(false);
    };

    const calulateResult = (choose) => {
        const result = 3 + Math.pow(choose,2) - choose;
        return result;
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber)) {
            Alert.alert('Invalid number!', 'Please input number.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirm(true);
        setSelectedNumber(chosenNumber);
        setEnterValue('');
        const Result = calulateResult(chosenNumber);
        setSelectResultNumber(Result);
        dispatch(resultActions.addResult(chosenNumber,Result));
        console.log("Result is :: " + Result.toString());
        Keyboard.dismiss();
    }
    let ConfirmOutput;
    if (confirm) {
        ConfirmOutput = (
            <View>
                <Card style={styles.cardContainer}>
                    <View style={styles.resultContainer}>
                        <Text>Term number is  </Text>
                        <Text>{selectedNumber}</Text>
                        <Text>  Result is  </Text>
                        <Text>{selectResultNumber}</Text>
                    </View>
                </Card>
            </View>);
    }

    return (
        <View style={styles.screen}>
            <Card style={styles.cardContainer}>
                <Text style={styles.title}>Start Quiz!</Text>
                <Text>1 .Create a function in term of x to find the next value in the given sequence: 3, 5, 9, 15, and so forth.</Text>
                <Text>Select term nuber</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={4}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View><Button title="Confirm" onPress={confirmInputHandler} /></View>
                    <View><Button title="Reset" onPress={resetInputHandler} /></View>
                </View>

            </Card>
            {ConfirmOutput}
        </View>
    );
};



CalculateScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Test',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
        fontFamily: 'open-sans-bold',
    },
    cardContainer: {
        justifyContent: 'center',
        marginTop: 5,
        width: 400,
        maxWidth: '100%',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    resultContainer: {
        flexDirection: 'row'
    }


});


export default CalculateScreen;