import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Scores extends Component {
  render() {
    const { scores } = this.props;

    return (
      <View style={styles.root}>
        <FlatList
          style={styles.text}
          data={scores}
          renderItem={
            ({item}) =>
              <Text style={styles.itemText}>
                {item.teamOne} vs {item.teamTwo}
              </Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    alignItems: 'center'
  },

  text: {
    color: '#2c3e50',
    fontSize: 30,
    fontWeight: 'bold'
  },

  itemText: {
    padding: 15,
    fontSize: 18,
    height: 40
  }
})