import React, {Component} from 'react';
import { ImageBackground, Text, SafeAreaView} from 'react-native';
import styles from './header.css';

export default class Header extends Component {
    render() {
      return (
        <SafeAreaView>
          <ImageBackground source={require('./../Images/airbnbImage1.jpg')} 
          style={styles.img}>
          <Text style={styles.imgContent}>Find homes in India </Text>
          <Text style={styles.imgContent}>on Airbnb</Text>
          </ImageBackground>
        </SafeAreaView>
      );
    }
  }