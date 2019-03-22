import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from "react-native";

import { colors, dimens } from '../../styles';

export default class Team extends Component {
  render() {
    const { team } = this.props;

    return (
      <View style={componentStyle.team}>
        <View style={componentStyle.teamLogoContainer}>
          <Image
            source={{
              uri: team.logo
            }}
            style={componentStyle.teamLogo}
          />
        </View>
        <Text style={componentStyle.teamText}>{team.name}</Text>
      </View>
    )
  }
}

const componentStyle = StyleSheet.create({
  team: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },

  teamLogoContainer: {
    alignItems: 'center'
  },

  teamLogo: {
    backgroundColor: colors.backgroundColor,
    borderRadius: dimens.teamLogoSize / 2,
    width: dimens.teamLogoSize,
    height: dimens.teamLogoSize
  },

  teamText: {
    color: colors.primaryTextColor,
    fontSize: dimens.teamTextSize,
    fontWeight: 'bold',
    paddingTop: dimens.padding,
    textAlign: 'center'
  }
});
