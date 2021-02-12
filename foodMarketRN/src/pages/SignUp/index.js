import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { Buttons, Gaps, Headers, TextInputs} from '../../components'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers title="Sign Up" subTitle="Register and eat" onBack={()=> {}} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                
                <TextInputs label="Fullname" placeholder="Type your fullname" />
                <Gaps height={16} />
                <TextInputs label="Email Address" placeholder="Type your email address" />
                <Gaps height={16} />
                <TextInputs label="Password" placeholder="Type your password" />
                <Gaps height={24} />
                <Buttons 
                    text="Continue"  
                    onPress= {()=>navigation.navigate('SignUpAddress')}    
                />
                <Gaps height={12} />
            </View>
        </View>
    )
}

export default SignUp;

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
