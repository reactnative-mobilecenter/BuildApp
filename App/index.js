import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Analytics from 'mobile-center-analytics';

export default class jokesapp extends Component {
  track() {
    Analytics.trackEvent('Button Press');
  }

  state = { joke: '...' }
  handlePress(e) {
    track();
    this.setState({ joke: '...' })
    fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'text/plain' } }).then(r => r.text())
      .then(joke => this.setState({ joke }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.joke}
        </Text>
        <Button title="Press here for a joke" onPress={() => this.handlePress()} />
      </View>
    );
  }
}

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
    color: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

