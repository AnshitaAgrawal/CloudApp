import React from 'react';
import {Text} from 'react-native';
import styles from './styles';


const RegGreyText = ({title,textStyle}) => {
  return (
    <Text style={[styles.textStyle, textStyle]}>{title}</Text>
  );
};

export default RegGreyText;