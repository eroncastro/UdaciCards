import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import DeckList from './DeckList';
import DeckItem from './DeckItem';
import NewDeck from './NewDeck';
import NewCard from './NewCard';
import Quiz from './Quiz';

const StackNavigator = createStackNavigator({
  Home: {
    screen: DeckList
  },
  Deck: {
    screen: DeckItem
  },
  NewCard: {
    screen: NewCard
  },
  Quiz: {
    screen: Quiz
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
