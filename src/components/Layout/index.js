import React from 'react';
import {StyleSheet, View} from 'react-native';

const Layout = ({viewStyle, children, home}) => {
  return (
    <View style={[styles.main, home && {flex: 1}, viewStyle]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
export {Layout};
