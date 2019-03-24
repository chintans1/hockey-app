import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Scores from '../components/Scores';

import { typography, styles } from '../styles';

import { scores } from '../utils/scores';

export default class ScoresScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  render() {
    return (
      <SafeAreaView style={componentStyles.container}>
        <StatusBar barStyle="light-content" />
        <Scores scores={scores} />
      </SafeAreaView>
    )
  }
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
});