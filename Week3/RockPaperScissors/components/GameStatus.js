import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RULEWIN, CHOISES } from '../GameRules';

export default class GameStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  showInfo() {
    Alert.alert(
      'Thông tin',
      'Game: Kéo Búa Bao\nTác giả: Hoàng Trần\nKhoá học: React Native Devc'
    )
  }

  showHistory() {
    let his = this.props.data.history;
    let str = 'Lần: Bạn - Máy:\n';
    let i = his.length;
    for (let h of his) {
      str += `${i}: ${h.playerChoise.nameVN} - ${h.computerChoise.nameVN}\n`;
      i--;
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

    let total = data.history.length || 1;
    let percentWin = ~~(data.winCount / total * 100);
    let percentLose = ~~(data.loseCount / total * 100);
    let percentTie = ~~(data.tieCount / total * 100);

    let str = 'Bạn đã chơi ' + data.history.length + ' lần\n\n';
    str += `Thắng: ${data.winCount} lần (${percentWin}%)\n`;
    str += `Thua: ${data.loseCount} lần (${percentLose}%)\n`;
    str += `Hoà: ${data.tieCount} lần (${percentTie}%)`;

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

  showHow() {
    let str = '';
    for (let r in RULEWIN) {
      str += `(${CHOISES[r].nameVN}) thắng (`;
      for (let rToWin of RULEWIN[r]) {
        str += `${CHOISES[rToWin].nameVN}, `;
      }
      str += ')\n';
    }
    Alert.alert('Luật chơi', str);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.split} onPress={() => { this.showInfo() }}>
          <Feather name="info" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.split} onPress={() => { this.showHow() }}>
          <Feather name="help-circle" style={styles.icon} />
        </TouchableOpacity>

        <View style={[styles.split, styles.columnFlex, { backgroundColor: this.props.data.colorStatus }]}>
          <Text style={styles.name}>{this.props.data.computerChoise.nameVN}</Text>
          <Text style={styles.status}>{this.props.data.status}</Text>
          <Text style={styles.name}>{this.props.data.playerChoise.nameVN}</Text>
        </View>

        <TouchableOpacity style={styles.split} onPress={() => this.showCounting()}>
          <Feather name="trending-up" style={styles.icon} />
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
    flex: 1.5,
    borderRadius: 10,
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
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    color: '#444'
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  }
});
