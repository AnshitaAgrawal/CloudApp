import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';


/* Component for Flatlist */

const List = ({
  data,
  renderItem,
  horizontal,
  numColumns,
  ...rest
}) => {

  return (
    <View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        horizontal={horizontal}
        numColumns={numColumns}
        keyExtractor={item => item.id}
        {...rest}
      />
    </View>
  )
}

export default List; 
