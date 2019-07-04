import React from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

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
    const { title } = this.state;

    if (!title) {
      return Alert.alert('Error', 'Title cannot be blank.')
    }

    const deck = { id: generateId(), title };

    this.props.addDeck(deck);
    this.setState({ title: '' });

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'Deck',
          params: { deckId: deck.id }
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            What is the title of your new deck?
          </Text>
        </View>
        <View style={styles.textInputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Deck title"
            editable = {true}
            maxLength = {40}
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
        </View>
        <View style={styles.submitBox}>
          <TouchableOpacity
            style={[styles.submitButton]}
            onPress={this._handlePress}>
            <Text style={styles.submitText}>Submit</Text>
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
  titleBox: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  textInputBox: {
    borderColor: 'black',
    borderWidth: 0.8,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 30
  },
  textInput: {
    fontSize: 25,
    flex: 0.8,
    height: 30
  },
  submitBox: {
    marginTop: 30
  },
  submitButton: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 20
  }
});

const mapDispatchToProps = { addDeck };

export default connect(null, mapDispatchToProps)(NewDeck);