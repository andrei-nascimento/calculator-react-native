import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Display from './src/components/Display';
import Keyboard from './src/components/Keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Display />
      <Keyboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
