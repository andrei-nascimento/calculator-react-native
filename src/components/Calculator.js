import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculator() {

    const [displayValue, setDisplayValue] = useState('0')
    const [operator, setOperator] = useState(null);
    const [operand1, setOperand1] = useState(null);
    const [operand2, setOperand2] = useState(null);

    const handlePress = (value) => {
        setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }

    const handleSum = () => {
        if (operator === "+") {
            const result = parseFloat(operand1) + parseFloat(operand2);
            setDisplayValue(result.toString());
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <View style={styles.numberDisplay}>
                    <Text style={styles.number}>{displayValue}</Text>
                </View>
            </View>
            <View style={styles.keyboard}>
                <View style={styles.specialRowTop}>
                    <TouchableOpacity style={styles.buttonLarge}>
                        <Text style={styles.icon}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.icon}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.icon}>÷</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.basicRow}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(7)}>
                        <Text style={styles.icon}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(8)}>
                        <Text style={styles.icon}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(9)}>
                        <Text style={styles.icon}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.icon}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.basicRow}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(4)}>
                        <Text style={styles.icon}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(5)}>
                        <Text style={styles.icon}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(6)}>
                        <Text style={styles.icon}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.icon}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.basicRow}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(1)}>
                        <Text style={styles.icon}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(2)}>
                        <Text style={styles.icon}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(3)}>
                        <Text style={styles.icon}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleSum}>
                        <Text style={styles.icon}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.specialRowBottom}>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(".")}>
                        <Text style={styles.icon}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlePress(0)}>
                        <Text style={styles.icon}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLarge}>
                        <Text style={styles.icon}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#AEAEAE',
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
    },
    keyboard: {
        backgroundColor: '#D9D9D9',
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
        backgroundColor: '#AEAEAE',
        alignItems: 'center',
        width: 155,
        borderRadius: 50,
        padding: 12,
        margin: 5,
    },
    buttons: {
        backgroundColor: '#AEAEAE',
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