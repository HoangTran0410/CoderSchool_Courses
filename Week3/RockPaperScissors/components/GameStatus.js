import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class GameStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  showHistory() {
    let str = 'Lần: Bạn - Máy:\n';
    let his = this.props.data.history;
    let i = 1;
    for (let h of his) {
      str += `${i}: ${h.playerChoise.nameVN} - ${h.computerChoise.nameVN}\n`;
      i++;
    }
    Alert.alert(
      'Lịch Sử', str, [{
        text: 'Xoá',
        onPress: () => this.onPressDeleteBtn(),
      }, {
        text: 'OK',
        onPress: () => { }
      }]
    );
  }

  showCounting() {
    let data = this.props.data;
    let str = `Thắng: ${data.winCount} lần \nThua: ${data.loseCount} lần \nHoà: ${data.tieCount} lần`;
    Alert.alert(
      'Bộ đếm', str,
      [{
        text: 'Xoá',
        onPress: () => this.onPressDeleteBtn(),
      }, {
        text: 'OK',
        onPress: () => { }
      }]
    );
  }

  onPressDeleteBtn() {
    Alert.alert(
      'Yêu cầu xác nhận',
      'Bạn có chắc muốn xoá? Lịch sử và Bộ đếm sẽ bị xoá!', [{
        text: 'Đồng ý xoá',
        onPress: () => this.props.onPressDeleteBtn()
      }, {
        text: 'Huỷ'
      }]
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.split} onPress={() => { alert('Info') }}>
          <Feather name="info" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.split} onPress={() => { alert('Flag') }}>
          <Feather name="bookmark" style={styles.icon} />
        </TouchableOpacity>

        <View style={[styles.split, styles.columnFlex, { backgroundColor: this.props.data.colorStatus }]}>
          <Text style={styles.name}>{this.props.data.computerChoise.nameVN}</Text>
          <Text style={styles.status}>{this.props.data.status}</Text>
          <Text style={styles.name}>{this.props.data.playerChoise.nameVN}</Text>
        </View>

        <TouchableOpacity style={styles.split} onPress={() => this.showCounting()}>
          <Feather name="award" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.split} onPress={() => this.showHistory()}>
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
    flex: 1.5
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
    color: '#444'
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
