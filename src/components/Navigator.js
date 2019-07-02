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

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
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

export default createAppContainer(AppNavigator);
