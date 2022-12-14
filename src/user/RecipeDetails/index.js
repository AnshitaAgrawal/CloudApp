import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import List from '../../../components/List';
import styles from './styles';


const ReceipeDetails = (props) => {

    const detailItem = props?.route?.params?.item

    const rating = detailItem.recipes[0].user_ratings

    return (
        <ScrollView>
            <Image
                style={styles.imageStyle}
                source={{ uri: detailItem.thumbnail_url }}
            />
            <View style={styles.mainView}>
            <Text style={styles.nameStyle}>{`By ${detailItem.credits[0].name}`}</Text>

                <View style={styles.dividerStyle} />

                <Text >{detailItem.description}</Text>
                <View style={styles.dividerStyle} />

                <View>
                    <Text style={styles.instructionStyle}>Instructions</Text>

                    <List
                        data={detailItem.recipes[0].instructions}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.instructionViewStyle}>
                                    <Text style={{ marginRight: 10 }}>{item.position}</Text>
                                    <Text>{item.display_text}</Text>
                                </View>
                            )
                        }}
                        ItemSeparatorComponent={() => <View style={styles.dividerStyle} />}
                    />
                </View>
                <View style={styles.dividerStyle} />
                <View style={styles.ratingMainStyle}>
                    <View style={styles.ratingViewStyle}>
                        <Icon name="like" size={30} /><Text style={styles.ratingText}>{rating.count_positive}</Text>
                    </View>
                    <View style={styles.ratingViewStyle}>
                        <Icon name="dislike" size={30} /><Text style={styles.ratingText}>{rating.count_negative}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


export default ReceipeDetails;