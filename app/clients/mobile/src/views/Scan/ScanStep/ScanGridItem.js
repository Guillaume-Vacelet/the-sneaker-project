import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScanPicturesContext from '../../../core/contexts/ScanPicturesContext';
import Colors from '../../../../constants/Colors';

export default function ScanGridItem(props) {
  const navigation = useNavigation();
  const {savedPictures, setCurrentScanPart} = React.useContext(ScanPicturesContext);

  function handlingScanPart() {
    setCurrentScanPart(props.item.name);
    navigation.navigate('ScanPrompt');
  }

  return (
    <TouchableOpacity onPress={() => handlingScanPart()}
      style={{
        backgroundColor: savedPictures[props.item.name].uri ? Colors.primary : 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
        height: 130,
        // width: 150,
      }}
    >
      <View style={{
        height: '100%', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Image style={styles.tinyLogo} source={{uri: props.item.image}}/>
      </View>
      <Text style={styles.itemName}>{props.item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemName: {
    fontSize: 16,
    color: Colors.background,
    fontWeight: '600',
    alignSelf: 'flex-start',
    width: '100%',
  },
  tinyLogo: {
    width: 85,
    height: 85,
  },
});