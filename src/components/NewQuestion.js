import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function NewDeck(props) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Question"
          editable = {true}
          maxLength = {40}/>
      </View>
      <View>
        <TextInput
          placeholder="Answer"
          editable = {true}
          maxLength = {40}/>
      </View>
      <View style={{ marginTop: 300, flex: 1 }}>
        <TouchableOpacity style={[styles.button, styles.quizButton]}>
          <Text style={styles.quizText}>Submit</Text>
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