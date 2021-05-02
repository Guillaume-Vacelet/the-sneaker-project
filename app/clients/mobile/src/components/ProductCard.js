import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonScannerIcon from './ButtonScannerIcon';
import ScanButton from './ScanButton';

export default function ProductCard(props) {
  return (
    <View>
      <View>
        <View style={styles.card}>
          <View style={styles.sneakerImgContainer}>
            <Image style={styles.sneakerImg} source={{uri: props.item.image}}/>
          </View>
          <View style={styles.scanButtonContainer}>
            <ScanButton />
            {/* <ButtonScannerIcon/> */}
          </View>
        </View>
      </View>

      <View style={styles.botText}>
        <View style={styles.topText}>
          <Text style={styles.model}>{props.item.model}</Text>
          <Text style={styles.brand}>{props.item.brand}</Text>
        </View>
        <View style={styles.topText}>
          <Text style={styles.price}>${props.item.price}</Text>
          <View style={styles.botText}>
            <Text style={styles.colorTxt}>Color</Text>
            <View style={styles.colorCircle}></View>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    height: 310,
    backgroundColor: 'white',
    borderRadius: 20,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sneakerImgContainer: {
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
  sneakerImg: {
    width: 300,
    height: 300,
  },
  scanButtonContainer: {
    zIndex: 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  topText: {
    marginBottom: 30,
    zIndex: 0,
  },
  botText: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    zIndex: 0,
    marginTop:20,
  },
  model: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 30,
  },
  colorTxt: {
    fontSize: 25, 
    marginRight: 7,
  },
  colorCircle: {
    width: 30,
    height: 30,
    backgroundColor: 'pink',
    borderRadius: 30,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  
});