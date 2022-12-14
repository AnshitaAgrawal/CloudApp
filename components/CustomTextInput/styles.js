import {StyleSheet} from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  defaultInputStyle: {
    fontSize: 14,
    height: 35,
    backgroundColor:Config.APP_WHITE,
    marginBottom: 0,
    zIndex: 1,
    marginTop: 5,
    paddingHorizontal: 0
  },
  errorMsg: {
    color: Config.RED,
    fontSize: 12,
    marginVertical: 5,
  },
  containerStyle:{
    marginBottom:20
  },
  labelStyle: {
    fontSize: 10,
    zIndex: 2,
    position: 'absolute'
  },
  inputStyle:{
    backgroundColor:Config.RED
  },
});
