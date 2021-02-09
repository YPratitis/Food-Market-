import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Buttons = ({text, color='#FFC700', textColor = '#020202'}) => {
    return (
        <View style={styles.container(color)}>
            <Text style={styles.text(textColor)}>{text}</Text>
        </View>
    )
}

export default Buttons;

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color, 
        padding: 12,
        borderRadius: 8
    }),
    text: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: color,
        textAlign: 'center'
    })
    ,
})
