import React, {memo} from 'react';
import {View} from 'react-native';

const Space = memo(({height}) => <View style={{height: height || 20}} />);

export {Space};
