import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: 1,
    src: 'http://placehold.it/200x200?text=1',
  },
  {
    id: 2,
    src: 'http://placehold.it/200x200?text=2',
  },
  {
    id: 3,
    src: 'http://placehold.it/200x200?text=3',
  },
  {
    id: 4,
    src: 'http://placehold.it/200x200?text=4',
  },
  {
    id: 5,
    src: 'http://placehold.it/200x200?text=5',
  },
  {
    id: 6,
    src: 'http://placehold.it/200x200?text=6',
  },
];
const List = ({data}) => {
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <>
            <View
              key={item.objectID}
              style={{
                width: '100%',
                flexDirection: 'row',

                justifyContent: 'space-between',
              }}>
              <Image
                style={{width: '40%', height: 100}}
                resizeMode={'contain'}
                source={require('./../../../../../assets/img/placeholder.png')}
              />
              <View style={{width: '58%', padding: 5}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold'}}
                  numberOfLines={2}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 5,
                    color: 'rgba(23, 23, 25, 0.3)',
                  }}
                  numberOfLines={1}>
                  {item.author}
                </Text>
                <Text
                  style={{fontSize: 16, color: 'rgba(23, 23, 25, 0.3)'}}
                  numberOfLines={1}>
                  {item.num_comments} комментариев
                </Text>
              </View>
            </View>
          </>
        )}
        //Setting the number of column
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export {List};
