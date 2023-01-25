import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DarkTheme() {

    const [darkTheme, setDarkTheme] = useState(true)

    const styles = StyleSheet.create({
        container: {
            paddingTop: 30,
            paddingBottom: 80,
            paddingLeft: 12
        },
        themeBtn: {
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        squareBtn: {
            backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
            justifyContent: 'center',
            borderRadius: 20,
            width: 48,
            height: 26,
        },
        circleBtn: {
            backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
            alignSelf: darkTheme ? 'flex-end' : 'flex-start',
            margin: 4,
            width: 20,
            height: 20,
            borderRadius: 50,
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.themeBtn}>
                <View style={styles.squareBtn}>
                    <TouchableOpacity
                    style={styles.circleBtn}
                    onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}