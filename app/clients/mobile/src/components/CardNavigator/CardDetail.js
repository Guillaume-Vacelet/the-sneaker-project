import React from 'react';
import { SharedElement } from "react-navigation-shared-element";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import ScanButton from '../ScanButton';
import ButtonScanner from '../../components/ButtonScanner';
import ToggleFavoriteButton from '../ToggleFavoriteButton';

export default function CardDetail(props) {
  const [favorite, setFavorite] = React.useState(false)
  const item = props.route.params;

  return (
    <SharedElement id={item.id}>
      <View contentContainerStyle={{ marginBottom: '50%' }}>
        <View>
          <View style={styles.card}>
            <View style={styles.sneakerImgContainer}>
              <Image style={styles.sneakerImg} source={{uri: item.image}}/>
            </View>
            <View style={styles.scanButtonContainer}>
              {/* <ScanButton /> */}
              <ToggleFavoriteButton favorite={favorite} setFavorite={setFavorite}/>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailsLeft}>
            <Text style={styles.model}>{item.model}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>
          <View style={styles.detailsRight}>
            <View style={{ }}>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.color}>Color</Text>
              <View style={styles.colorCircle}></View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title2}>Description</Text>
          <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </View>
      </View>
    </SharedElement>
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
  details: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: '5%',
  },
  detailsLeft: {
    flex: 2,
    paddingHorizontal: '5%',
  },
  detailsRight: {
    flex: 1,
    paddingHorizontal: '5%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  model: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 30,
  },
  color: {
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 25,
    fontWeight: "600",
    padding: 20,
    color: "black",
  },
  text1:{
    paddingHorizontal:20,
  },
});