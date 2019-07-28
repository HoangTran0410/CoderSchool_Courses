import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feather
          name="menu"
          style={styles.icon}
          onPress={() => {
            alert('Menu');
          }}
        />
        <Feather
          name="plus-circle"
          style={styles.icon}
          onPress={() => {
            alert('Add Image');
          }}
        />
        <Feather
          name="user"
          style={styles.icon}
          onPress={() => {
            alert('User');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 35,
  },
  icon: {
    fontSize: 24,
    color: 'rgb(51,60,87)',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
});
