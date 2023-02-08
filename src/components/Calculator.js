import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculator() {

    const [firstNumber, setFirstNumber] = useState("")
    const [secondNumber, setSecondNumber] = useState("")
    const [operation, setOperation] = useState("")
    const [result, setResult] = useState(Number | null)

    const handleNumberPress = (buttonValue) => {
        if(firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue)
        }
    }

    const handleOperationPress = (buttonValue) => {
        setOperation(buttonValue)
        setSecondNumber(firstNumber)
        setFirstNumber("")
    }

    const clear = () => {
        setFirstNumber("")
        setSecondNumber("")
        setOperation("")
        setResult(null)
    }

    const getResult = () => {
        switch(operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    }

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [styles.number, {color: "#007CFF"}] : [styles.number, {fontSize: 50, color: "#007CFF"}]}>{result?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={styles.number}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            return <Text style={styles.number}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[styles.number, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[styles.number, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.display}>
                <View style={styles.numberDisplay}>
                    <Text style={styles.number}>
                        {secondNumber}
                    <Text style={{ color: "#007CFF", fontSize: 72 }}>{operation}</Text>
                    </Text>
                    {firstNumberDisplay()}
                </View>
            </View>
            <View style={styles.keyboard}>
                <View style={styles.specialRowTop}>
                    <TouchableOpacity style={styles.buttonLarge} onPress={clear}>
                        <Text style={styles.icon}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleOperationPress("%")}>
                        <Text style={styles.icon}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handleOperationPress("/")}>
                        <Text style={styles.icon}>÷</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.basicRow}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("7")}>
                        <Text style={styles.icon}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("8")}>
                        <Text style={styles.icon}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("9")}>
                        <Text style={styles.icon}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handleOperationPress("*")}>
                        <Text style={styles.icon}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.basicRow}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("4")}>
                        <Text style={styles.icon}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("5")}>
                        <Text style={styles.icon}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("6")}>
                        <Text style={styles.icon}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handleOperationPress("-")}>
                        <Text style={styles.icon}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.basicRow}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("1")}>
                        <Text style={styles.icon}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("2")}>
                        <Text style={styles.icon}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("3")}>
                        <Text style={styles.icon}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handleOperationPress("+")}>
                        <Text style={styles.icon}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.specialRowBottom}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress(".")}>
                        <Text style={styles.icon}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handleNumberPress("0")}>
                        <Text style={styles.icon}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLarge} onPress={() => getResult()}>
                        <Text style={styles.icon}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#000000',
        paddingEnd: 22,
        paddingBottom: 12,
        paddingTop: 185
    },
    numberDisplay: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    number: {
        fontSize: 72,
        color: '#ffffff',
    },
    keyboard: {
        backgroundColor: '#121214',
        alignItems: 'center',
    },
    specialRowTop: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 8,
    },
    basicRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    specialRowBottom: {
        flexDirection: 'row',
        paddingBottom: 32,
    },
    buttonLarge: {
        backgroundColor: '#202024',
        alignItems: 'center',
        width: 155,
        borderRadius: 50,
        padding: 12,
        margin: 5,
    },
    buttons: {
        backgroundColor: '#202024',
        alignItems: 'center',
        width: 72,
        borderRadius: 100,
        padding: 12,
        margin: 5,
    },
    buttonsSpecial: {
        backgroundColor: '#007CFF',
        alignItems: 'center',
        width: 72,
        borderRadius: 100,
        padding: 12,
        margin: 5,
    },
    icon: {
        fontSize: 40,
        color: 'white',
        paddingBottom: 2
    }
});