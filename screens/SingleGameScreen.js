import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles';

export default class SingleGameScreen extends PureComponent {
  static navigationOptions = {
    title: 'Team vs Team'
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