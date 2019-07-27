import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class FeedUser extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.props.avatar}
          onPress={() => { alert('User') }}
          style={styles.imgUserAvatar}
        />
        <Text style={styles.txtUserName}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginVertical: 5,
  },
  txtUserName: {
    fontWeight: 'bold',
    fontSize: 17
  }
});
