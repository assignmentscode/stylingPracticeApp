/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from './App.css';
import Header from './Comonents/Header/header';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Header/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}


