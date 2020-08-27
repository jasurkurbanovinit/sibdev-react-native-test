import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Layout,
  Input,
  CustomTab,
  Button,
  Space,
  MainHeader,
} from './../../components';
import {connect} from 'react-redux';
import {fetchData, searchChanged, saveSearch} from './../../redux/actions';
const Results = ({
  navigation,
  route,
  value,
  fetchData,
  searchChanged,
  saveSearch,
  myHits,
}) => {
  const {myData} = route.params;
  const {inputContainer, btnStyle, txtStyle, inputStyle} = styles;
  const [txt, setTxt] = useState('');

  const handleChange = (text) => {
    searchChanged(text);
    setTxt(text);
  };

  const onSearch = () => {
    console.log('value', value);
    fetchData(value);
  };

  return (
    <>
      <MainHeader onPressBack={() => navigation.goBack()} />
      <Layout>
        <Space />
        <View style={inputContainer}>
          <Input
            handleChange={handleChange}
            value={value}
            viewStyle={inputStyle}
            icon
          />
          <Button title="Найти" viewStyle={btnStyle} onPress={onSearch} />
        </View>
        <Text style={txtStyle}>Видео по запросу</Text>
      </Layout>
      <CustomTab data={myHits} />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnStyle: {width: '20%', marginTop: 0},
  txtStyle: {fontSize: 18, margin: 20},
  inputStyle: {width: '77%'},
});

const mapStateToProps = (state) => ({
  value: state.searchValue,
  myHits: state.hits,
});

export default connect(mapStateToProps, {fetchData, searchChanged, saveSearch})(
  Results,
);

/*
const iconPressed = () => {
    saveSearch(value);
    navigation.navigate('Избранное', {screen: 'Search'});
  };*/
