import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Summary(props) {
  const { correctAnswers, totalQuestions } = props;
  const correctPercentage = (100 * correctAnswers) / totalQuestions;

  return (
    <View style={styles.container}>
      <View style={styles.deckItem}>
        <Text>Quiz Result</Text>
      </View>

      <View style={styles.deckItem}>
        <Text>Correct percentage: {correctPercentage.toFixed(0)} %</Text>
      </View>

      <View style={{ marginTop: 300, flex: 1 }}>
        <TouchableOpacity
          style={[styles.button, styles.addCardButton]}
          onPress={props.onRestart}>
          <Text style={styles.addCardText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.quizButton]}
          onPress={props.onGoBack}>
          <Text style={styles.quizText}>Go Back</Text>
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
  deckItem: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardButton: {
    borderColor: '#d6d7da'
  },
  addCardText: {
    fontSize: 20
  },
  quizButton: {
    backgroundColor: '#0d0d0d'
  },
  quizText: {
    color: '#ffffff',
    fontSize: 20
  }
});
