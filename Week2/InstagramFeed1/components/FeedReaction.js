import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather, Foundation } from '@expo/vector-icons';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#000'
    }
  }

  _clicked() {
    let current = this.state.color;
    let newColor = (current == '#000' ? '#f55' : '#000');
    alert(newColor == '#000' ? 'DisLike' : 'Like');

    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <View>
        <Feather name="heart" style={[styles.iconReaction, { color: this.state.color }]} onPress={() => this._clicked()} />
      </View>
    );
  }
}

export default class FeedReaction extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.buttonsContainer, styles.borderBottom]}>
          <LikeButton />
          <Feather name="message-square" style={styles.iconReaction} onPress={() => { alert('comment') }} />
          <Feather name="share" style={styles.iconReaction} onPress={() => { alert('share') }} />
        </View>
        <View style={[styles.countContainer, styles.borderBottom]}>
          <Foundation name="heart" style={styles.iconReactionCount} />
          <Text style={styles.countingText}>{this.props.likeCount} likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddd'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  iconReaction: {
    fontSize: 24,
    padding: 10,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconReactionCount: {
    fontSize: 22,
    padding: 5,
    color: '#f55a'
  },
  countingText: {
    // fontSize: 16,
  },
});
