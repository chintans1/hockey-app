import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, styles, typography } from '../styles';

export default class SingleGameScreen extends PureComponent {
  static navigationOptions = {
    title: 'Team vs Team'
  };

  render() {
    return (
      <View style={componentStyles.container}>
        <Text style={componentStyles.text}>Game Screen</Text>
      </View>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: {
    ...styles.defaultContainer,
    justifyContent: 'center'
  },

  // FIXME: This is temporary
  text: {
    color: colors.primaryTextColor,
    fontSize: 36,
    ...typography.boldCenterTextStyle
  }
})