import React, { useEffect } from "react";
import { View, Text, Image } from 'react-native';
import images from "../../../lib/images";
import styles from "./styles";

const Splash = (props) => {

    useEffect(()=>{
        setTimeout(() => {
            props.navigation.replace("AuthNavigator")
        }, 300);
    })

    return (
        <View style={styles.containerStyle}>
           <Image source={images.logo} />
        </View>
    )
}

export default Splash;