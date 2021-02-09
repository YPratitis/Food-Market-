import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Buttons, Gaps, Headers, TextInputs } from '../../components';

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Headers title="Sign In" subTitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInputs label="Email Address" placeholder="Type your email address" />
                <Gaps height={16} />
                <TextInputs label="Password" placeholder="Type your password" />
                <Gaps height={24} />
                <Buttons text="Sign In" />
                <Gaps height={12} />
                <Buttons text="Create New Account" color='#8D92A3' />
            </View>
        </View>
    )
}

export default SignIn;

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
})
