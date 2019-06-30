import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import DeckList from './DeckList';
import DeckItem from './DeckItem';
import NewDeck from './NewDeck';
import Question from './Question';
import NewCard from './NewCard';

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
