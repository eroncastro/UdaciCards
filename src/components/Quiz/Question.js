import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from '../Card';

export default function Question(props) {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text>{props.currentQuestion + 1}/{props.totalQuestions}</Text>
      </View>

      <Card card={props.card} />

      <View style={{ marginTop: 300, flex: 1 }}>
        <TouchableOpacity
          style={[styles.button, styles.correctButton]}
          onPress={props.onCorrect}>
          <Text style={styles.correctText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.incorrectButton]}
          onPress={props.onIncorrect}>
          <Text style={styles.quizText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  counter: {
    alignSelf: 'flex-start'
  },
  deckItem: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  correctButton: {
    backgroundColor: 'green'
  },
  correctText: {
    color: '#ffffff',
    fontSize: 20
  },
  incorrectButton: {
    backgroundColor: 'red'
  },
  quizText: {
    color: '#ffffff',
    fontSize: 20
  }
});