import React from 'react';
import { connect } from 'react-redux';

import {
  clearLocalNotifications,
  setLocalNotification
} from '../../utils/notification';
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

  componentDidMount() {
    clearLocalNotifications()
      .then(setLocalNotification);
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

const mapStateToProps = (state, props) => {
  const deckId = props.navigation.getParam('deckId');

  return {
    deck: state.decks.find(deck => deck.id === deckId)
  };
};

export default connect(mapStateToProps)(Quiz);
