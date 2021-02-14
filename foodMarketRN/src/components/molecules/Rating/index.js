import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FoodDummy1, IcStarOff, IcStarOn } from '../../../assets'

const Rating = () => {
    return (
        <View style={styles.ratingContainer}>
                    <View style={styles.starContainer}>
                        <IcStarOn />
                        <IcStarOn />
                        <IcStarOn />
                        <IcStarOn />
                        <IcStarOff />
                    </View>
                    <Text>
                        4.5
                    </Text>
                </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row'
   },
   starContainer: {
       flexDirection: 'row'
   },
})
