import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import DeckInfo from './DeckInfo';
import { handleInitialData } from '../actions/shared';

class DeckList extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    if (this.props.loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.decks}
        renderItem={({ item }, index) => (
          <View style={styles.listItem}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Deck', { deckId: item.id })}>
              <DeckInfo
                key={index}
                title={item.title}
                cards={Array.isArray(item.cards) ? item.cards.length : 0}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 1
  }
});

const mapStateToProps = (state) => {
  return {
    decks: state.decks,
    loading: state.loading
  };
};

const mapDispatchToProps = { handleInitialData };

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);