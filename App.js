import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= { styles.textbold}>wellcome</Text>
      <Text style= { styles.textbold1}>givefen</Text>
      <Text style= { styles.textbold2}>loloki</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textbold1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0000CD',
  },
  textbold2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  
});
