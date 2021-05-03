import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet, Dimensions, Image } from 'react-native';
import RoundUserAvatarWithScore from '../../components/RoundUserAvatarWithScore';
import SneakerCard_sizeable from '../../components/SneakerCard_sizeable';
import Carousel from 'react-native-snap-carousel';
//images
import nmd_r1 from '../../../assets/sneaker-example.png';


export default function ProfileScreen() { 
  const [userProducts, setUserProducts] = React.useState([
    {id: '0', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '1', model: 'Air Force 1', brand: 'Nike', color: 'white', price: '100.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '2', model: 'Air Max 87 Off-White', brand: 'Nike', color: 'gray', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: false},
  ]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.userID}>#usernameID</Text>
        </View>
        <View style={styles.avatarContainer}>
          <RoundUserAvatarWithScore />
        </View>
      </View>
      <View>
        <View style={styles.userProductsContainer}>
          <Text style={styles.mesVerifs}>Mes vérifications</Text>
          <Carousel
            data={userProducts}
            renderItem={({item}) => (
              <SneakerCard_sizeable item={item} hasBeenChecked={true} size={1}/>
            )}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={220}
            firstItem={Math.floor(userProducts.length / 2)}
            containerCustomStyle={{marginVertical: 20}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    zIndex: 1,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  mesVerifs: {
    fontSize: 35,
    fontWeight: "600",
    color: "black",
    marginTop: 15,
  },
  userID: {
    fontSize: 16,
    fontWeight: "300",
    color: "black",
    textTransform: 'uppercase',
  },
  userName: {
    fontSize: 30,
    fontWeight:'bold',
    color: "black",
    textTransform: 'capitalize',
  },
  avatarContainer: {
    top: '10%',
    position: 'relative',
  },
  userProductsContainer: {
    alignItems: 'center',
    marginTop: '35%',
  },
});