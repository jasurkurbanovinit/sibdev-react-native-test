import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header} from './../Header';
import {Logo} from './../Logo';
import {Button} from './../Button';

import Icon from 'react-native-vector-icons/Ionicons';

const MainHeader = ({onPressBack, onPressLogOut}) => {
  return (
    <Header>
      <TouchableOpacity onPress={onPressBack}>
        <Icon name="arrow-back-outline" size={30} color="#1390E5" />
      </TouchableOpacity>
      <Logo small />
      <Button type="secondary" title="Выйти" onPress={onPressLogOut} />
    </Header>
  );
};

export {MainHeader};
