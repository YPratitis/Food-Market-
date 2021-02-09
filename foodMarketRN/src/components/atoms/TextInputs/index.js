import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextInputs = ({label, placeholder}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default TextInputs

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8, 
        paddingVertical: 10
    },
})
