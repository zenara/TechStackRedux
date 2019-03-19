/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header1 from './Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';



const App =() => {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hi</Text>
          <LibraryList></LibraryList>
        </View>
      </Provider>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
