import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import DeckInfo from './DeckInfo';

function DeckList(props) {
  return (
    <FlatList
      data={props.decks}
      renderItem={({ item }, index) => (
        <DeckInfo
          key={index}
          deckName={item.title}
          cards={Array.isArray(item.cards) ? item.cards.length : 0} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
};

export default connect(mapStateToProps)(DeckList);