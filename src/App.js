import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import DeckList from './components/DeckList';
import DeckItem from './components/DeckItem';
import NewDeck from './components/NewDeck';
import Question from './components/Question';
import NewQuestion from './components/NewQuestion';
import { registerRootComponent } from 'expo';

const StackNavigator = createStackNavigator({
  Home: {
    screen: DeckList
  },
  Deck: {
    screen: DeckItem
  },
  Question: {
    screen: Question
  },
  NewQuestion: {
    screen: NewQuestion
  }
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator
  },
  NewDeck: {
    screen: NewDeck
  }
});

export default registerRootComponent(createAppContainer(AppNavigator));
