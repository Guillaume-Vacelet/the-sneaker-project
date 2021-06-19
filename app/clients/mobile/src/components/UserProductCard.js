import React from 'react';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default function UserProductCard(props) {
  return (
    <View style={{
      flex: 1,
      width: '100%', 
      // height: '35%', 
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: '25%',
      marginVertical: '3%',
      paddingLeft: '5%',
      paddingRight: '5%',
      backgroundColor: 'lightgray'
    }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={{color: Colors.background, fontSize: 20, fontWeight: '600'}}>
          { props.title }
        </Text>
        <Text style={{color: Colors.background,fontSize: 18}}>
          { props.brand }
        </Text>
        <Text style={{color: Colors.background,fontSize: 12, paddingTop: 10}}>
          { props.id }
        </Text>

      </View>
      <Image source={{uri: Image.resolveAssetSource(props.image).uri}}
        style={{flex: 1, width: 140, height: 100, maxWidth: 140, maxHeight: 100}}
      />
      {props.legit
        ? <Icon
            type={'ionicon'}
            name={'checkmark-circle'}
            size={35}
            color={Colors.primary}
            containerStyle={{
              position: 'absolute',
              top: '5%', 
              left: '95%', 
            }}
          />
        : <Icon
            type={'ionicon'}
            name={'close-circle'}
            size={35}
            color={'orangered'}
            containerStyle={{
              position: 'absolute',
              top: '5%', 
              left: '95%', 
            }}
          />
      }
    </View>
  )
}