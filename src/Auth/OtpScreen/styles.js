import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        backgroundColor: Config.APP_WHITE
    },
    containerStyle: {
        alignItems: 'center',
        paddingHorizontal: 15
    },
    boldTextStyle: {
        marginTop: 10,
        marginBottom: 50
    },
    otpViewStyle: {
        height: 70,
        width: '70%'
    },
    underlineStyleBase: {
        borderRadius: 5,
        width: 50,
        height: 50,
        borderWidth: 2,
        fontSize: 20,
        color: Config.BLACK,
        backgroundColor: Config.APP_WHITE,
        borderColor: Config.LIGHT_GREY
    },
    underlineStyleHighLighted: {
        borderRadius: 5,
        width: 50,
        height: 50,
        borderWidth: 2,
        fontSize: 20,
        color:Config.BLACK,
        backgroundColor: Config.LIGHT_GREY,
        borderColor: Config.APP_WHITE,
    },

})