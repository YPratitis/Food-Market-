import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Buttons, Gaps, Headers, Selects, TextInputs } from '../../components';

const SignUpAddress = ({navigation}) => {
    return (
        <View style={styles.page}>
        <Headers 
            title="Address" 
            subTitle="Make sure it’s valid" 
            onBack={()=> {}} 
        />
        <View style={styles.container}>
            
            <TextInputs 
                label="Phone No." 
                placeholder="Type your phone number" 
            />
            <Gaps height={16} />
            <TextInputs 
                label="Address " 
                placeholder="Type your address" 
            />
            <Gaps height={16} />
            <TextInputs 
                label="House No." 
                placeholder="Type your house number " 
            />
            <Gaps height={24} />
            <Selects label='City' />
            <Gaps height={16} />
            <Buttons 
                text="Sign Up Now" 
                onPress={() => navigation.replace('SuccessSignUp')}
            />
            <Gaps height={12} />
        </View>
    </View>
    )
}

export default SignUpAddress;

const styles = StyleSheet.create({
    page: {
        flex: 1 
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 24
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    },
})
