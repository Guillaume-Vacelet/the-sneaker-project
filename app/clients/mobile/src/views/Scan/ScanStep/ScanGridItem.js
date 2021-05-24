import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScanPicturesContext from '../../../core/contexts/ScanPicturesContext';

export default function ScanGridItem(props) {
  const navigation = useNavigation();
  const {setCurrentScanPart} = React.useContext(ScanPicturesContext);

  function handlingScanPart() {
    setCurrentScanPart(props.item.name);
    navigation.navigate('ScanPrompt');
  }

  return (
    <TouchableOpacity onPress={() => handlingScanPart()}>
      <View style={[styles.itemContainer, { backgroundColor: props.item.code }]}>
        <Image style={styles.tinyLogo} source={{uri: props.item.image}}/>
        <Text style={styles.itemName}>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  tinyLogo: {
    width: 90,
    height: 90,
    marginLeft:'20%',
  },
});