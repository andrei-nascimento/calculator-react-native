import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Keyboard from './src/components/Calculator';
import DarkTheme from "./src/components/DarkTheme";

export default function App() {

  

  return (
    <View style={styles.container}>

      {/* <DarkTheme /> */}
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
