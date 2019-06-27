import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DeckInfo from './DeckInfo';

export default function DeckList() {
  return (
    <FlatList
      data={[
        { deckName: 'React', cards: 2 },
        { deckName: 'Machine Learning', cards: 3 },
        { deckName: 'Clojure', cards: 5 },
        { deckName: 'Elixir', cards: 10 },
        { deckName: 'Deep Learning', cards: 6 },
        { deckName: 'React', cards: 2 },
        { deckName: 'Machine Learning', cards: 3 },
        { deckName: 'Clojure', cards: 5 },
        { deckName: 'Elixir', cards: 10 },
        { deckName: 'Deep Learning', cards: 6 },
      ]}
      renderItem={({ item }, index) => (
        <DeckInfo key={index} deckName={item.deckName} cards={item.cards} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}