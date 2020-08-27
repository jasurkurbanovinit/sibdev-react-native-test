import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Grid, List} from './TabScreens';
const CustomTab = ({data}) => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  const {tabContainerStyle, tabStyle, tabTextStyle} = styles;
  return (
    <>
      <SegmentedControlTab
        values={['⊞', '☰']}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={10}
        tabsContainerStyle={tabContainerStyle}
        tabStyle={tabStyle}
        tabTextStyle={tabTextStyle}
        activeTabStyle={{backgroundColor: '#1390E5'}}
        activeTabTextStyle={{color: 'white'}}
      />
      {customStyleIndex === 0 && <Grid data={data} />}
      {customStyleIndex === 1 && <List data={data} />}
    </>
  );
};

const styles = StyleSheet.create({
  tabContainerStyle: {
    height: 50,
    width: '30%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
  },
  tabStyle: {
    borderColor: '#1390E5',
    borderWidth: 2,
  },
  tabTextStyle: {
    fontSize: 30,
    color: '#a2c4db',
    margin: 2,
    fontWeight: 'bold',
  },
  scene: {
    padding: 20,
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
});

export {CustomTab};
