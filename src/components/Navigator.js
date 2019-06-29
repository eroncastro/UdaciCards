import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import DeckList from './DeckList';
import DeckItem from './DeckItem';
import NewDeck from './NewDeck';
import Question from './Question';
import NewQuestion from './NewQuestion';

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

export default createAppContainer(AppNavigator);
