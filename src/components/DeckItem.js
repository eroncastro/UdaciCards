import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import DeckInfo from './DeckInfo';

function DeckItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.deckItem}>
        <DeckInfo
          title={props.deck.title}
          cards={Array.isArray(props.deck.cards) ? props.deck.cards.length : 0}
        />
      </View>
      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={[styles.button, styles.addCardButton]}
          onPress={() => {
            props.navigation.navigate('NewCard', { deckId: props.deck.id });
          }}>
          <Text style={styles.addCardText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.quizButton]}
          onPress={() => {
            props.navigation.navigate('Quiz', { deckId: props.deck.id });
          }}>
          <Text style={styles.quizText}>Start Quiz</Text>
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
    marginTop: 20
  },
  buttonsBox: {
    flex: 2,
    marginTop: 20
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

const mapStateToProps = (state, props) => {
  const deckId = props.navigation.getParam('deckId');

  return {
    deck: state.decks.find(deck => deck.id === deckId)
  };
};

export default connect(mapStateToProps)(DeckItem);
