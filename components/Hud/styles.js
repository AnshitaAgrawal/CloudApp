import { StyleSheet, Dimensions } from 'react-native';
import Config from 'react-native-config';

const screenWidth=Dimensions.get('screen').width
const screenHeight=Dimensions.get('screen').height


 export default StyleSheet.create({
 // hud progress bar
 HudMainContainer: {},
 HudContainer: {
   top: 0,
   right: 0,
   left: 0,
   bottom: 0,
   backgroundColor: 'rgba(0, 0, 0, 0.2)',
   justifyContent: 'center',
   width: screenWidth,
   height: screenHeight,
 },
 hudContainer: {
   paddingHorizontal: 20,
   paddingVertical: 15,
   backgroundColor: "white",
   alignSelf: 'center',
   borderRadius: 5,
 },
 HudtxtLoad: {
   marginTop: 10,
   fontSize: 16,
 },
 hudDialogStyle: {
   alignSelf: 'center',
   width: 70,
   height: 70,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 10,
 }
})