import React from 'react';
import {Button, Icon} from 'react-native-elements';
import Colors from '../../constants/Colors';

export default function ToggleFavoriteButton(props) {
  return (
    <Button onPress={() => props.setFavorite(!props.favorite)}
      icon={() => {
        let iconName = props.favorite ? 'heart' : 'hearto';
        return <Icon type={"antdesign"} name={iconName} size={30} color={Colors.primary} />
      }}
      containerStyle={{
        height: 70, 
        width: 70, 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
      buttonStyle={{
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        shadowOpacity: '0.2',
        shadowOffset: { width: 0, height: 2 },
      }}
    />
  );
};