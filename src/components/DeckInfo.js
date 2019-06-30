import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DeckInfo(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.cards} cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    // flex: 1,
    fontSize: 30,
    padding: 20
  },
  subtitle: {
    // flex: 1,
    fontSize: 15,
    padding: 20
  }
});