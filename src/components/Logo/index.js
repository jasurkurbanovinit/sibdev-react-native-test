import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = ({small}) => {
  const {bigImg, smallImg} = styles;
  return (
    <Image
      style={[bigImg, small && smallImg]}
      source={require('./../../../assets/img/sibdev-logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  bigImg: {
    width: 100,
    height: 100,
  },
  smallImg: {
    width: 50,
    height: 50,
  },
});
export {Logo};
