import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Scores from '../components/Scores';

import { typography, styles } from '../styles';

export default class ScoresScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  render() {
    return (
      <SafeAreaView style={componentStyles.container}>
        <Scores />
      </SafeAreaView>
    )
  }
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
});