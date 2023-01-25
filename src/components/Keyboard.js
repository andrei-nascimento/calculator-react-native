import React from "react";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

export default function Keyboard() {
    return (
        <View style={styles.container}>
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
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.basicRow}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.basicRow}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.specialRowBottom}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.icon}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLarge}>
                    <Text style={styles.icon}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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