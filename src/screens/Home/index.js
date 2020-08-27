import React from 'react';
import {connect} from 'react-redux';
import {fetchData, searchChanged} from './../../redux/actions';
import {Layout, Input, Button, Logo, Space} from './../../components';

const Home = ({navigation, value, fetchData, searchChanged}) => {
  const onGo = () => {
    navigation.navigate('Results');
  };
  //alert(JSON.stringify(myData));
  const onSearch = (text) => {
    console.log('onSearch', text);
    searchChanged(text);
    fetchData(text);
  };
  return (
    <>
      <Button type={'secondary'} title="Выйти" viewStyle={{margin: 20}} />
      <Layout home>
        <Logo />
        <Space />
        <Input handleChange={onSearch} value={value} />
        <Space />
        <Button title="Найти" onPress={onGo} />
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.searchValue,
});

export default connect(mapStateToProps, {fetchData, searchChanged})(Home);
