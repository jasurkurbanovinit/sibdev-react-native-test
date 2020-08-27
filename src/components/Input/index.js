import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Input = ({viewStyle, iconPressed, icon, value, handleChange}) => {
  const [active, setActive] = useState(false);
  const {main, inputStyle, iconStyle} = styles;

  const onClicked = () => {
    setActive((status) => !status);
    iconPressed();
  };
  return (
    <View style={[main, viewStyle]}>
      <TextInput
        placeholder={'input text'}
        onChangeText={handleChange}
        value={value}
        autoCapitalize="none"
        style={inputStyle}
      />
      {icon && (
        <TouchableOpacity style={iconStyle} onPress={onClicked}>
          <Icon name={active ? 'heart' : 'hearto'} size={20} color="#1390E5" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainCopy: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  main: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputStyle: {width: '80%', paddingHorizontal: 15},
  iconStyle: {
    width: '20%',
    alignItems: 'center',
  },
});
export {Input};
