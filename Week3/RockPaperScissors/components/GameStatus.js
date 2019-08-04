import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class GameStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.split}>
          <Feather name="award" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.split}>
          <Feather name="info" style={styles.icon} />
        </TouchableOpacity>

        <View style={[styles.split, styles.columnFlex]}>
          <Text style={styles.name}>{this.props.data.computerChoise.nameVN}</Text>
          <Text style={styles.status}>{this.props.data.status}</Text>
          <Text style={styles.name}>{this.props.data.playerChoise.nameVN}</Text>
        </View>

        <TouchableOpacity style={styles.split}>
          <Feather name="bookmark" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.split}>
          <Feather name="clock" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#d8d5d9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  columnFlex: {
    flexDirection: 'column',
  },
  split: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 30,
    color: '#000',
    padding: 10,
  },
  name: {
    fontSize: 16,
    color: '#777'
  },
  status: {
    fontSize: 20,
  }
});
