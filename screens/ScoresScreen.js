import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';

import Scores from '../components/Scores';
import configureStore from '../redux/store';

import { typography, styles } from '../styles';

export default class ScoresScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  render() {
    return (
      // TODO: Move this initialization stuff to App.js
      // https://reactnavigation.org/docs/en/redux-integration.html
      <Provider store={configureStore()}>
        <SafeAreaView style={componentStyles.container}>
          <StatusBar barStyle="light-content" />
          <Scores />
        </SafeAreaView>
      </Provider>
    )
  }
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
});