import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const imgData = [
  { id: 1, imgSource: require('../assets/1.jpg') },
  { id: 2, imgSource: require('../assets/2.jpg') },
  { id: 3, imgSource: require('../assets/3.jpg') },
  { id: 4, imgSource: require('../assets/4.jpg') },
  { id: 5, imgSource: require('../assets/5.jpg') },
  { id: 6, imgSource: require('../assets/6.jpg') },
  { id: 7, imgSource: require('../assets/7.jpg') },
  { id: 8, imgSource: require('../assets/8.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

export default class Gallery extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={styles.splitView}>
            {
              imgData.slice(0, centerImgData).map(item => {
                return <Image key={item.id} source={item.imgSource} style={styles.img} />
              })
            }
          </View>
          <View style={styles.splitView}>
            {
              imgData.slice(centerImgData).map(item => {
                return <Image key={item.id} source={item.imgSource} style={styles.img} />
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    paddingHorizontal: 15,
  },
  containerScroll: {
    flexDirection: 'row',
  },
  splitView: {
    flex: 1,
  },
  img: {
    width: '95%',
    height: 150,
    borderRadius: 20,
    margin: 5
  },
});
