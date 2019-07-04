import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View } from 'react-native';
import { connect } from 'react-redux';

import DeckInfo from './DeckInfo';
import { handleInitialData } from '../actions/shared';

function DeckList(props) {
  if (props.loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={props.decks}
      renderItem={({ item }, index) => (
        <View style={styles.listItem}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Deck', { deckId: item.id })}>
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

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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