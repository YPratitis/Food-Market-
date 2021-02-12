import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { IlcSuccessSignUp } from '../../assets';
import { Buttons, Gaps } from '../../components';

const SuccessSignUp = () => {
    return (
        <View style={styles.page}>
            <IlcSuccessSignUp />
            <Gaps height={30} />
            <Text style={styles.title}>Yeay! Completed</Text>
            <Gaps height={6} />
            <Text style={styles.subTitle}>Now you are able to order</Text>
            <Text style={styles.subTitle}>some foods as a self-reward</Text>
            <Gaps height={30} />
            <View style={styles.buttonContainer}>
                <Buttons text='Find Foods' />
            </View>
  
        </View>
    )
}

export default SuccessSignUp;

const styles = StyleSheet.create({
    page: {
        // backgroundColor: 'yellow',  
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    subTitle: {
         fontSize: 14,
         fontFamily: 'Poppins-Light',
         color: '#8D92A3'
    },
    buttonContainer: {
        // backgroundColor: 'green',
        width: '100%',
        paddingHorizontal: 80
    },
})
