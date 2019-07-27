import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

class BasicInfo extends React.Component {
  render() {
    return (
      <View style={styles.basicInfoContainer}>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/ava.jpg')} style={styles.avatar} />
        </View>
        <View style={styles.name_actionContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.userName}>Phan Manh Quynh</Text>
            <Text style={styles.smallText}>Singer, Musician</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={[styles.followBtn, styles.btn]}
              onPress={() => {
                alert('Followed');
              }}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sendMesBtn, styles.btn]}
              onPress={() => {
                alert('Message sended');
              }}>
              <Ionicons name="md-send" style={styles.sendMesIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class RecordDetail extends React.Component {
  render() {
    return (
      <View style={styles.recordDetailContainer}>
        <Text style={styles.bigText}>{this.props.value}</Text>
        <Text style={styles.smallText}>{this.props.type}</Text>
      </View>
    );
  }
}

class Record extends React.Component {
  render() {
    return (
      <View style={styles.recordContainer}>
        <RecordDetail value={210} type={'Photos'} />
        <RecordDetail value={'15k'} type={'Followers'} />
        <RecordDetail value={605} type={'Following'} />
      </View>
    );
  }
}

export default class UserInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BasicInfo />
        <Record />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Containers
  container: {
    flex: 4.5,
    // paddingTop: 20,
  },
  basicInfoContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  recordContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  recordDetailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Avatar
  avatarContainer: {
    flex: 1,
    width: 90,
    height: 90,
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
    width: 90,
    height: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  // Basic info of user
  name_actionContainer: {
    flex: 1.5,
  },
  nameContainer: {
    flex: 1,
  },
  actionContainer: {
    flex: 0.8,
    flexDirection: 'row',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  followBtn: {
    width: 100,
    height: 27,
    borderRadius: 20,
    backgroundColor: FOLLOW_COLOR,
  },
  followText: {
    color: '#fff',
    fontSize: 15,
  },
  sendMesBtn: {
    width: 50,
    height: 27,
    borderRadius: 20,
    backgroundColor: SEND_MESSAGE_COLOR,
  },
  sendMesIcon: {
    color: '#fff',
    fontSize: 15,
  },
  bigText: {
    fontSize: 23,
    color: '#222',
    fontWeight: '500',
  },
  smallText: {
    fontSize: 13,
    color: '#999',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 21,
  },
});
