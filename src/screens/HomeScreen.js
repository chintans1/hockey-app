import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

import { scores } from '../utils/scores';
import Scores from '../components/Scores';
import { SafeAreaView } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerTitleStyle: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 36,
      textAlign: 'left'
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Scores
          scores={scores}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  }
})