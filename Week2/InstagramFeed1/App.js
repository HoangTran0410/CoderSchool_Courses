import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Feed from './components/Feed';

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    avatar: require('./assets/avatar.png'),
    text: 'Best Summer Ever',
    image: require('./assets/beach1.jpg'),
    likeCount: 128,
  },
  {
    id: 2,
    name: 'Lovely',
    avatar: require('./assets/avatar2.png'),
    text: 'Missing this beach !!',
    image: require('./assets/beach2.jpg'),
    likeCount: 756,
  },
  {
    id: 3,
    name: 'CoderSchool',
    avatar: require('./assets/avatar.png'),
    text: 'Lonely ... ',
    image: require('./assets/beach3.jpg'),
    likeCount: 1280,
  },
  {
    id: 4,
    name: 'Lovely',
    avatar: require('./assets/avatar2.png'),
    text: 'Welcome to my beach <3',
    image: require('./assets/beach4.jpg'),
    likeCount: 1576,
  },
  {
    id: 5,
    name: 'CoderSchool2',
    avatar: require('./assets/avatar.png'),
    text: 'Beauty night !',
    image: require('./assets/night.jpg'),
    likeCount: 2000,
  }
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <ScrollView style={styles.instagramScroll}>
          {feedData.map(feed => {
            return (
              <Feed data={feed} key={feed.id} />
            );
          })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6fa',
  },
  instagramScroll: {

  },
  header: {

  }
});