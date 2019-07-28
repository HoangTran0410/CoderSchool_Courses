import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Header from './components/Header';
import Footer from './components/Footer';
import UserInfo from './components/UserInfo';
import Gallery from './components/Gallery';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <UserInfo />
        <Gallery />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});