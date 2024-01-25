// Component.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = () => {
  const [clicks, setCount] = useState(0);

  const onClick = () => {
    setCount(clicks + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>Cliquez moi</Text>
      </TouchableOpacity>
      <Text>Vous avez cliqué {clicks} fois</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default Button;
