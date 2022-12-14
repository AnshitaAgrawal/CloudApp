import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput,Searchbar } from "react-native-paper";



const SearchBar=({
    value,
    onChangeText,
    onSubmitEditing
})=>{
    return(
        <View>
            <Searchbar
      placeholder="Search"
      onChangeText={onChangeText}
      style={styles.searchBarStyle}
      numberOfLines={1}
      value={value}
    />
        </View>
    )
}

export default SearchBar