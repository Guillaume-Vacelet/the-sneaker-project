import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Test_cam from '../../../components/Test_cam';

export default function GridScan() {
  const [items, setItems] = React.useState([
    { name: 'Sole', code: 'white', image:'https://img.icons8.com/ios/452/right-shoe.png' },
    { name: 'Right-side', code: 'white', image:'https://image.flaticon.com/icons/png/512/88/88746.png'},
    { name: 'Left-side', code: 'white', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRgmJHQf3yp9xBIl46a_sJaZ1zf2Gs_m8Np6ceWvBZRAbJTzCZ-LovOQSKdZdc9DNyTs&usqp=CAU'},
    { name: 'Front/Up', code: 'white', image:'https://img.icons8.com/carbon-copy/2x/pair-of-sneakers.png' },
    { name: 'Back-side', code: 'white', image: 'https://4vector.com/i/free-vector-vans-classic-slip-on_014502_PNG/Vans%20Slip%20On%20Template%20-%20Back%20Right.png'},
    { name: 'Box', code: 'white', image:'https://static.thenounproject.com/png/863873-200.png' },
    
  ]);

  const [photoUri, setphotoUri] = React.useState("");

  const Scan_grid = async () => {
    <Test_cam/>
  }

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={20}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={Scan_grid}>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Image style={styles.tinyLogo} source={{uri: item.image}}/>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
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