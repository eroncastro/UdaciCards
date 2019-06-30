import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import DeckInfo from './DeckInfo';

function DeckList(props) {
  return (
    <FlatList
      data={props.decks}
      renderItem={({ item }, index) => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Deck', { deckId: item.id })}>
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

const mapStateToProps = (state) => {
  return { decks: state.decks };
};

export default connect(mapStateToProps)(DeckList);