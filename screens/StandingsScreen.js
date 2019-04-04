import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { colors, typography, styles } from '../styles';

export default class StandingsScreen extends PureComponent {
  static navigationOptions = {
    title: 'Standings',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  render() {
    return (
      <SafeAreaView style={componentStyles.container}>
        <Text style={componentStyles.text}>Standings Screen</Text>
      </SafeAreaView>
    )
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
});
