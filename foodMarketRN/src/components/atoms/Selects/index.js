import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Selects = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                    // selectedValue={this.state.language}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({language: itemValue})
                    //   }
                //     
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    )
}

export default Selects;

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
        paddingHorizontal: 2,
        paddingVertical: 0
    },
})
