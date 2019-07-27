import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class FeedStatus extends React.Component {
  render() {
    return (
      <View style={styles.feedStatus}>
        <Text style={styles.txtFeedStatus}>{this.props.text}</Text>
        <Image
          style={styles.imgFeedStatus}
          source={this.props.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedStatus: {
    height: 300
  },
  imgFeedStatus: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  txtFeedStatus: {
    padding: 5,
    fontSize: 15
  },
});
