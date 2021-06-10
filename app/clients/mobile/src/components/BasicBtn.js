import React from 'react';
import { Button } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default function BasicBtn(props) {
    return (
        <Button title={props.title}
            buttonStyle={{
                marginBottom: 10,
                borderRadius: 25,
                width: 300,
                backgroundColor: Colors.primary,
            }} 
            titleStyle={{color: 'black'}}
            onPress={props.onPress}
            loading={props.activity}
            loadingProps={{color: 'black'}}
        />
    )
};