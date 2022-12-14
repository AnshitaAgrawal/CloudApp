import React from 'react';
import { Dimensions, StyleSheet, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('screen').width;

const AppHeader = ({ textOne, showBackBtn, onPress }) => {


    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle={'light-content'}
            />
            <View style={styles.viewStyle}>

                <View style={styles.innerContainerStyle}>
                    {
                        showBackBtn ?
                            <Icon
                                onPress={onPress}
                                name={'md-arrow-back-outline'}
                                color={'white'}
                                size={22}
                                style={styles.backArrowStyle}
                            />
                            : null
                    }
                    <View style={styles.textViewStyle}>
                        <Text
                            dynamicLines={true}
                            style={styles.textOneStyle}>{textOne}</Text>
                    </View>
                    {showBackBtn ? <View style={styles.backViewStyle}></View> : null}
                </View>

            </View>
        </>
    )
}



const styles = StyleSheet.create({
    viewStyle: {
        width: screenWidth,
        backgroundColor: '#5E3DFE',
        marginBottom: 20,
        height: 70
    },
    textOneStyle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    innerContainerStyle: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginTop: 20
    },
    textViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    backViewStyle: {
        height: 50,
        width: 50
    },
    backArrowStyle: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})

export default AppHeader;