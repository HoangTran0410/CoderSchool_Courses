import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { CHOISES, checkWin, getStatus, getColorStatus, getRandomChoise } from './GameRules';
import ChoiseCard from './components/ChoiseCard';
import GameStatus from './components/GameStatus';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerChoise: CHOISES.Bua,
      computerChoise: CHOISES.Bua,
      winCount: 0,
      loseCount: 0,
      tieCount: 0,
      status: '',
      colorStatus: '#fff',
      history: [],
      animate: false,
    };
  }

  onChosed = choise => {
    let compChoise = getRandomChoise();
    let check = checkWin(choise, compChoise);
    let status = getStatus(check);
    let color = getColorStatus(check);

    this.setState({
      playerChoise: choise,
      computerChoise: compChoise,

      winCount: this.state.winCount + (check == 1 ? 1 : 0),
      loseCount: this.state.loseCount + (check == 2 ? 1 : 0),
      tieCount: this.state.tieCount + (check == 0 ? 1 : 0),
      status: status,
      colorStatus: color,
      history: [
        {
          playerChoise: choise,
          computerChoise: compChoise,
          status: status,
        },
        ...this.state.history,
      ],
      animate: false
    });
  };

  onPressDeleteBtn = () => {
    this.setState({
      history: [],
      winCount: 0,
      loseCount: 0,
      tieCount: 0,
    }, () => {
      alert('Đã xoá')
    })
  }

  onPlayerPressBtn = choise => {
    this.setState({
      animate: true
    }, () => {
      setTimeout(() => {
        this.onChosed(choise);
      }, 1500);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ChoiseCard
          hideInput={true}
          revert={true}
          choise={this.state.computerChoise}
          animate={this.state.animate}
        />
        <GameStatus
          data={this.state}
          onPressDeleteBtn={this.onPressDeleteBtn}
        />
        <ChoiseCard
          choise={this.state.playerChoise}
          onChose={this.onPlayerChose}
          onPressBtn={this.onPlayerPressBtn}
          animate={this.state.animate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  },
});
