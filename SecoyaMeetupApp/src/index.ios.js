/**
 * @flow
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import RequestTracker from './components/request-tracker';
//import 'babel-core/external-helpers';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import superagent from 'superagent';

var SecoyaMeetupApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <RequestTracker requestId={2093402983} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('SecoyaMeetupApp', () => SecoyaMeetupApp);
