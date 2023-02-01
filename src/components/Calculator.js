import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import math from 'mathjs';

export default function Calculator() {

    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handlePress = (value) => {
        setExpression(expression + value);
    };

    const calculate = () => {
        try {
            setResult(math.evaluate(expression));
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <View style={styles.numberDisplay}>
                    <Text style={styles.number}></Text>
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
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handlePress("÷")}>
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
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handlePress("x")}>
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
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handlePress("-")}>
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
                    <TouchableOpacity style={styles.buttonsSpecial} onPress={() => handlePress("+")}>
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
        color: '#ffffff'
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