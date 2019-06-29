import React from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { generateId } from '../utils/helpers';
import { addDeck } from '../actions/deck';

class NewDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    this.props.addDeck({
      id: generateId(),
      title: this.state.title
    });
    this.setState({ title: '' });
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>What is the title of your new deck?</Text>
        </View>
        <View>
          <TextInput
            placeholder="Deck title"
            editable = {true}
            maxLength = {40}
            onChangeText={title => this.setState({ title })}/>
        </View>
        <View style={{ marginTop: 300, flex: 1 }}>
          <TouchableOpacity
            style={[styles.button, styles.quizButton]}
            onPress={this._handlePress}>
            <Text style={styles.quizText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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

const mapDispatchToProps = { addDeck };

export default connect(null, mapDispatchToProps)(NewDeck);