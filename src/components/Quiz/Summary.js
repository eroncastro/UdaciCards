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
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Result</Text>
      </View>

      <View style={styles.percentageBox}>
        <Text style={styles.percentageText}>
          Correct percentage: {correctPercentage.toFixed(0)} %
        </Text>
      </View>

      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={[styles.button, styles.addCardButton]}
          onPress={props.onRestart}>
          <Text style={styles.addCardText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.goBackButton]}
          onPress={props.onGoBack}>
          <Text style={styles.goBackText}>Go Back</Text>
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
  titleBox: {
    marginTop: 20
  },
  titleText: {
    fontSize: 30
  },
  percentageBox: {
    flex: 1,
  },
  percentageText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonsBox: {
    flex: 2
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
  goBackButton: {
    backgroundColor: '#0d0d0d'
  },
  goBackText: {
    color: '#ffffff',
    fontSize: 20
  }
});

