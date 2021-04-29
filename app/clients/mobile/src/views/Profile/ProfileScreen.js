import React from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, Image } from 'react-native';
import RoundUserAvatarWithScore from '../../components/RoundUserAvatarWithScore';
import SneakerCard from '../../components/SneakerCard';
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
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Username</Text>
          <Text style={styles.userID}>#usernameID</Text>
        </View>
        <View style={styles.avatarContainer}>
          <RoundUserAvatarWithScore />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.userProductsContainer}>
          <Text style={styles.title}>Mes vérifications</Text>
          <Carousel
            data={userProducts}
            renderItem={({item}) => (
              <SneakerCard item={item} hasBeenChecked={true} />
            )}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={220}
            firstItem={Math.floor(userProducts.length / 2)}
            containerCustomStyle={{marginVertical: 20}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 1,
    zIndex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  infoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: "black",
  },
  userID: {
    fontSize: 20,
    fontWeight: "300",
    color: "black",
  },
  avatarContainer: {
    flex: 1,
    position: 'relative',
  },
  bodyContainer: {
    flex: 2,
    zIndex: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userProductsContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: '50%',
  },
});