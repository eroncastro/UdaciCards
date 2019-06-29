import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import Navigator from './components/Navigator';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default registerRootComponent(App);
