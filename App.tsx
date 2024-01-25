// App.js - Main entry point
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Component'; // Assuming your component file is named Button.js

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma première appli React Native</Text>
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray', // Different color for the title
  },
});

export default App;
a