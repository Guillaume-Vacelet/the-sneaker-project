import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const basicBtn = (props) => {
    return (
        <TouchableOpacity onPress={ props.onPress } style={styles.container} >
            <Text style={styles.txt} >TEST</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {},
    txt: {},
});

export default basicBtn;