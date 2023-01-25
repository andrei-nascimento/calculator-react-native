import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DarkTheme from "./DarkTheme";

export default function Display() {
    return (
        <View style={styles.container}>
            <DarkTheme />
            <View style={styles.numberDisplay}>
                <Text style={styles.number}>120</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AEAEAE',
        paddingEnd: 22,
        paddingBottom: 12,
    },
    numberDisplay: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    number: {
        fontSize: 72,
    },
});

