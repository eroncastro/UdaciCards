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
          <Text style={styles.title}>{this._title}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => this._toggleQuestion()}>
            <Text style={styles.button}>{this._buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  title: {
    fontSize: 40
  },
  button: {
    color: 'red',
    fontSize: 20
  }
});
