import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { CHOISES } from '../GameRules';

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {Object.keys(CHOISES).map((key, index) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              key={CHOISES[key].name}
              name={CHOISES[key].name}
              disabled={this.props.disabled}
              onPress={() => {
                this.props.onPressBtn(CHOISES[key]);
              }}>
              <Image
                style={[
                  styles.img,
                  { opacity: this.props.disabled ? 0.4 : 1 },
                ]}
                source={CHOISES[key].img}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 5,
    width: 70,
    height: 70,
  },
  img: {
    resizeMode: 'contain',
    flex: 1,
    width: null,
    height: null,
  },
});
