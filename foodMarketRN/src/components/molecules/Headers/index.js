import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Headers = ({title, subTitle}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

export default Headers;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30, 
        paddingBottom: 24
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    }
})
