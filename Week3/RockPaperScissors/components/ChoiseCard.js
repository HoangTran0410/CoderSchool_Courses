import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

import ButtonGroup from './ButtonGroup';
import NamTay from '../assets/Bua.png';

export default class ChoiseCard extends React.Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  handleAnimation = () => {
    // A loop is needed for continuous animation
    Animated.loop(
      // Animation consists of a sequence of steps
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 1.0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.animatedValue, {
          toValue: 0.0,
          duration: 140,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  onPressBtn = choise => {
    this.props.onPressBtn(choise);
  }

  render = () => {

    let animate = this.props.animate ? {
      transform: [
        {
          rotate: this.animatedValue.interpolate({
            inputRange: [-1, 1],
            outputRange: ['-0.1rad', '0.1rad'],
          }),
        },
      ],
    } : {};

    this.handleAnimation();

    return (
      <View
        style={
          this.props.revert
            ? [styles.container, styles.revert]
            : styles.container
        }>
        <Animated.Image
          source={this.props.animate ? NamTay : this.props.choise.img}
          style={[styles.img, animate]}
        />
        {!this.props.hideInput && (
          <ButtonGroup
            disabled={this.props.animate}
            onPressBtn={this.onPressBtn}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'contain',
    flex: 4,
    width: null,
    height: null,
  },
  revert: {
    transform: [
      { rotate: '180deg' },
    ] /* change the deg (degree of rotation) between 0deg, 360deg*/,
  },
});
