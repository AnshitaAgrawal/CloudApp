import React from 'react';
import {Text} from 'react-native';
import styles from './styles';


const BoldBlackText = ({title,textStyle}) => {
  return (
    <Text style={[styles.textStyle,textStyle]}>{title}</Text>
  );
};

export default BoldBlackText;