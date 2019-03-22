import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { colors } from '../../styles';

export default class Scoreboard extends Component {
  render() {
    return (
      <View style={componentStyle.gameInfo}>
        <Text style={componentStyle.gameInfoText}>STARTS</Text>
        <Text style={componentStyle.gameInfoText}>00:00</Text>
      </View>
    )
  }
}

const componentStyle = StyleSheet.create({
  gameInfo: {
    alignItems: 'center',
    flex: 2,
    flexDirection: 'column'
  },

  gameInfoText: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});