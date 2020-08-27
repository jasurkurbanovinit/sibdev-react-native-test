import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchData, searchChanged} from './../../redux/actions';
import {Layout, Input, Button, Logo, Space} from './../../components';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Search = ({navigation, value}) => {
  console.log('THIS IS VALUE', value);
  const onGo = () => {
    navigation.navigate('Results', {myData});
  };
  //alert(JSON.stringify(myData));
  const onSearch = (text) => {
    console.log('onSearch', text);
    searchChanged(text);
    fetchData(text);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => alert(item.title)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Button type={'secondary'} title="Выйти" viewStyle={{margin: 20}} />
      <Layout home>
        <Logo />
        <Space />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.searchValue,
});

export default connect(mapStateToProps, {fetchData, searchChanged})(Search);
