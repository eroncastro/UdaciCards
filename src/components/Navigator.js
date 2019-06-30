import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Card from './Card';
import DeckList from './DeckList';
import DeckItem from './DeckItem';
import NewDeck from './NewDeck';
import NewCard from './NewCard';

const StackNavigator = createStackNavigator({
  Home: {
    screen: DeckList
  },
  Deck: {
    screen: DeckItem
  },
  Card: {
    screen: Card
  },
  NewCard: {
    screen: NewCard
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

export default createAppContainer(AppNavigator);
