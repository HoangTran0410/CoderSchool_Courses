import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import FeedUser from './FeedUser';
import FeedStatus from './FeedStatus';
import FeedReaction from './FeedReaction';

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.feedContainer}>
        <FeedUser avatar={this.props.data.avatar} name={this.props.data.name} />
        <FeedStatus text={this.props.data.text} image={this.props.data.image} />
        <FeedReaction likeCount={this.props.data.likeCount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
