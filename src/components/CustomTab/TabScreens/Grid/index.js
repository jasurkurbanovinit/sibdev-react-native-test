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
const Grid = ({data}) => {
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <>
            <View
              key={item.objectID}
              style={{
                flex: 1,
                margin: 10,
                alignItems: 'center',
              }}>
              <Image
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 100,
                }}
                resizeMode={'contain'}
                source={require('./../../../../../assets/img/placeholder.png')}
              />
              <View style={{width: '90%'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}
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
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 10,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export {Grid};
