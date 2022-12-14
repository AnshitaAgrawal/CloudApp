import { StyleSheet, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
    imageStyle: {
        height: screenHeight * 0.35,
        width: '100%'
    },
    ratingText: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    nameStyle: {
        textAlign: "right",
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5, color: 'black'
    },

    ratingViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    instructionViewStyle: {
        flexDirection: 'row'
    },
    dividerStyle: {
        marginVertical: 10,
        borderTopWidth: 0.6,
        borderTopColor: 'grey'
    },
    mainView: {
        marginHorizontal: 15
    },
    ratingMainStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    instructionStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    }
})