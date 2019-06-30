import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../actions/card';

const initialState = () => (
  Object.freeze({
    question: '',
    answer: ''
  })
);

class NewCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState();

    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    this.props.addCard({
      deckId: this.props.navigation.getParam('deckId'),
      question: this.state.question,
      answer: this.state.answer
    });

    this.setState(initialState());
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder='Question'
            editable = {true}
            maxLength = {40}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        </View>
        <View>
          <TextInput
            placeholder='Answer'
            editable = {true}
            maxLength = {40}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <View style={{ marginTop: 300, flex: 1 }}>
          <TouchableOpacity
            onPress={this._handlePress}
            style={[styles.button, styles.quizButton]}>
            <Text style={styles.quizText}>Submit</Text>
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

const mapDispatchToProps = { addCard };

export default connect(null, mapDispatchToProps)(NewCard);
