import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({type = 'primary', title, onPress, viewStyle}) => {
  const buttonType = (size) =>
    ({
      primary,
      secondary,
    }[size]);

  const buttonText = (size) =>
    ({
      primary: primaryText,
      secondary: secondaryText,
    }[size]);

  const primaryPressed = {
    backgroundColor: '#1390E5',
  };
  const secondaryPressed = {
    backgroundColor: 'white',
  };

  const {primary, secondary, primaryText, secondaryText} = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonType(type),
        type === 'primary' ? primaryPressed : secondaryPressed,
        viewStyle,
      ]}>
      <Text style={buttonText(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  secondary: {
    borderRadius: 5,
    alignSelf: 'center',
    padding: 10,
  },
  primary: {
    width: '30%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    marginRight: 5,
  },
  primaryText: {color: 'white', fontSize: 16},
  secondaryText: {color: '#1390E5', fontSize: 16},
});
export {Button};
