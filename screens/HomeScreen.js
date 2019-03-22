import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Scores from '../components/Scores';

import { typography } from '../styles';

import { scores } from '../utils/scores';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerTitleStyle: typography.bigHeaderTitleStyle
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