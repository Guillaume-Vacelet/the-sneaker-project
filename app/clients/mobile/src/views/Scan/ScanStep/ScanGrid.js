import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Colors from '../../../../constants/Colors';
import ScanGridItem from './ScanGridItem';
import GoToStepButton from '../GoToStepButton';

export default function ScanGrid() {
  const scanCategories = [
    { name: 'Sole', image:'https://img.icons8.com/ios/452/right-shoe.png' },
    { name: 'Right-side', image:'https://image.flaticon.com/icons/png/512/88/88746.png'},
    { name: 'Left-side', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRgmJHQf3yp9xBIl46a_sJaZ1zf2Gs_m8Np6ceWvBZRAbJTzCZ-LovOQSKdZdc9DNyTs&usqp=CAU'},
    { name: 'Front/Up', image:'https://img.icons8.com/carbon-copy/2x/pair-of-sneakers.png' },
    { name: 'Back-side', image: 'https://4vector.com/i/free-vector-vans-classic-slip-on_014502_PNG/Vans%20Slip%20On%20Template%20-%20Back%20Right.png'},
    { name: 'Box', image:'https://static.thenounproject.com/png/863873-200.png' }
  ];

  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        <FlatGrid
          itemDimension={130}
          data={scanCategories}
          style={styles.gridView}
          spacing={20}
          renderItem={({ item }) => (<ScanGridItem item={item}/>)}
        />
      </View>
      <View style={styles.footerContainer}>
        <GoToStepButton goBack={true} />
        <GoToStepButton goBack={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background,
    padding: '2%'
  },
  bodyContainer: {
    flex: 12,
    width: '100%',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  gridView: {
    flex: 1,
    width: '100%',
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