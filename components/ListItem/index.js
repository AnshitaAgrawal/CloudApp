import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';


const ListItem = ({ item, onPress }) => {

    return (
        <TouchableOpacity
            style={styles.containerStyle}
            onPress={onPress}
        >
            <View style={styles.innerViewStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: item.thumbnail_url }}
                />
                <Text>{item.name}</Text>
            </View>
            <Icon
                size={20}
                color={'grey'}
                name={'chevron-forward-sharp'}
            />
        </TouchableOpacity>
    )
}

export default ListItem;