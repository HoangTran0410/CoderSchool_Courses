import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feather
          name="arrow-left"
          style={styles.icon}
          onPress={() => {
            alert('Back');
          }}
        />
        <Feather
          name="more-vertical"
          style={styles.icon}
          onPress={() => {
            alert('More');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    fontSize: 24,
    color: 'rgb(51,60,87)',
    alignSelf: 'center',
    padding: 10,
  },
});
