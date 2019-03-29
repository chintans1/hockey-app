import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from "react-native";

import { API_BASE_URL } from 'react-native-dotenv';

import { colors, dimens } from '../../styles';

export default class Team extends Component {
  render() {
    const { team } = this.props;
    const logoUrl = `${API_BASE_URL}/static/logos/${team.teamLogoName}`

    return (
      <View style={componentStyles.team}>
        <View style={componentStyles.teamLogoContainer}>
          <Image source={{ uri: logoUrl }} style={componentStyles.teamLogo} />
        </View>

        <Text style={componentStyles.teamText}>{team.teamName}</Text>
      </View>
    )
  }
}

const componentStyles = StyleSheet.create({
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
