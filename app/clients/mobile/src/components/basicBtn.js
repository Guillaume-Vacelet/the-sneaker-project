import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';

const BasicBtn = (props) => {
    return (
        <TouchableOpacity onPress={ props.onPress } style={styles.container} >
            <Text style={styles.txt} >{props.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // IOS Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        // Android shadow
        elevation: 10,
    },
    txt: {
        color: 'white',
        //fontFamily : '',
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'uppercase',
    }
});

export default BasicBtn;