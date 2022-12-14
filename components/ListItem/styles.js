import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex:1,
        marginVertical: 15
    },
    innerViewStyle: {
        flexDirection: 'row',
        alignItems:'center'
    },
    imageStyle: {
        height: 40,
        width: 40,
        borderColor: 'grey',
        borderWidth: 0.2,
        marginRight: 20

    }

})