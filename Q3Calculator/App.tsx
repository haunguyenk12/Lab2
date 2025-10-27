/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text, TouchableOpacity } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView
} from 'react-native-safe-area-context';
import React, { useState } from 'react';
const styles = require('./styles');
function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num: string | number) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  const handleOperatorInput = (operator: string | React.SetStateAction<null>) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text>NguyenPhucHau</Text>
      <View style={styles.screen}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
          {displayValue}
        </Text>
      </View>




      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(7)}><Text style={styles.btnText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(8)}><Text style={styles.btnText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(9)}><Text style={styles.btnText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnAccent]} onPress={() => handleOperatorInput('/')}>
          <Text style={[styles.btnText, styles.btnTextAccent]}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(4)}><Text style={styles.btnText}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(5)}><Text style={styles.btnText}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(6)}><Text style={styles.btnText}>6</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnAccent]} onPress={() => handleOperatorInput('*')}>
          <Text style={[styles.btnText, styles.btnTextAccent]}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(1)}><Text style={styles.btnText}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(2)}><Text style={styles.btnText}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleNumberInput(3)}><Text style={styles.btnText}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnAccent]} onPress={() => handleOperatorInput('-')}>
          <Text style={[styles.btnText, styles.btnTextAccent]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, styles.btnWide]} onPress={() => handleNumberInput(0)}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnAccent]} onPress={() => handleOperatorInput('+')}>
          <Text style={[styles.btnText, styles.btnTextAccent]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnAccent]} onPress={handleEqual}>
          <Text style={[styles.btnText, styles.btnTextAccent]}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, styles.btnWide]} onPress={() => handleClear()}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

}

export default App;
