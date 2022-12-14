import { StyleSheet, Dimensions } from 'react-native';
import Config from 'react-native-config';

const screenWidth=Dimensions.get('screen').width

export default StyleSheet.create({
  defaultTitleStyle: {
    fontSize: 14,
    color:'white',
    paddingHorizontal: 10,
    letterSpacing:0
  },
  defaultButtonStyle: {
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: Config.PRIMARY,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Config.PRIMARY,
    elevation:0,
    width:screenWidth-30
  }
});