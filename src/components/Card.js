import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showQuestion: true
    };
  }

  get _title() {
    return this.state.showQuestion
      ? this.props.card.question
      : this.props.card.answer;
  }

  get _buttonText() {
    return this.state.showQuestion ? 'Answer' : 'Question';
  }

  _toggleQuestion() {
    this.setState(state => ({ showQuestion: !state.showQuestion }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this._title}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => this._toggleQuestion()}>
            <Text style={{ color: 'red' }}>{this._buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
