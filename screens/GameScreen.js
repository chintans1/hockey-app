import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles';

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: 'Game Scores'
  };

  render() {
    return (
      <View style={componentStyles.container}>
        <Text>Game Screen</Text>
      </View>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
})