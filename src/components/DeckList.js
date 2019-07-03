import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Deck', { deckId: item.id })}>
            <DeckInfo
              key={index}
              title={item.title}
              cards={Array.isArray(item.cards) ? item.cards.length : 0}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks,
    loading: state.loading
  };
};

const mapDispatchToProps = { handleInitialData };

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);