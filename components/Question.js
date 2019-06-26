import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function QuestionItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text>{props.index}/{props.total}</Text>
      </View>
      <View>
        <Text>{props.question}</Text>
      </View>
      <View style={{ marginTop: 300, flex: 1 }}>
        <TouchableOpacity>
          <Text style={{ color: 'red' }}>Answer</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 300, flex: 1 }}>
        <TouchableOpacity style={[styles.button, styles.correctButton]}>
          <Text style={styles.correctText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.incorrectButton]}>
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