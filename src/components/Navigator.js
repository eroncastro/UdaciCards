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
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'Home',
    }
  },
  Deck: {
    screen: DeckItem,
    navigationOptions: {
      title: 'Deck',
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add new card',
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    }
  }
});

export default createAppContainer(AppNavigator);
