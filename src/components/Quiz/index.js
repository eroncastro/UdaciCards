import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Question from './Question';
import Summary from './Summary';

const initialState = () => Object.freeze({
  currentQuestion: 0,
  correctAnswers: 0
});

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState();
  }

  get _totalQuestions() {
    const { cards } = this.props.deck;

    return Array.isArray(cards) ? cards.length : 0;
  }

  _restartQuiz() {
    this.setState(initialState());
  }

  _countCorrectAnswer() {
    this.setState(state => ({
      currentQuestion: state.currentQuestion + 1,
      correctAnswers: state.correctAnswers + 1
    }));
  }

  _countIncorrectAnswer() {
    this.setState(state => ({
      currentQuestion: state.currentQuestion + 1
    }));
  }

  render() {
    if (this.state.currentQuestion >= this._totalQuestions) {
      return (
        <Summary
          correctAnswers={this.state.correctAnswers}
          totalQuestions={this._totalQuestions}
          onRestart={() => this._restartQuiz()}
          onGoBack={() => this.props.navigation.goBack()}
        />
      );
    }

    return (
      <Question
        currentQuestion={this.state.currentQuestion}
        card={this.props.deck.cards[this.state.currentQuestion]}
        totalQuestions={this._totalQuestions}
        onCorrect={() => this._countCorrectAnswer()}
        onIncorrect={() => this._countIncorrectAnswer()}
      />
    );
  }
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

const mapStateToProps = (state, props) => {
  const deckId = props.navigation.getParam('deckId');

  return {
    deck: state.decks.find(deck => deck.id === deckId)
  };
};

export default connect(mapStateToProps)(Quiz);
