import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import RoundUserAvatarWithScore from '../../components/RoundUserAvatarWithScore';
import SneakerCard_sizeable from '../../components/SneakerCard_sizeable';
import Carousel from 'react-native-snap-carousel';
//images
import nmd_r1 from '../../../assets/sneaker-example.png';
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';


export default function ProfileScreen(props) { 
  const [userProducts, setUserProducts] = React.useState([
    {id: '0', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '1', model: 'Air Force 1', brand: 'Nike', color: 'white', price: '100.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '2', model: 'Air Max 87 Off-White', brand: 'Nike', color: 'gray', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: false},
  ]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <GoBackArrow left={false} goBack={props.navigation.goBack} dark={true}/>
        </View>
        <View style={styles.infoContainer}>
          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.userName}>Username</Text>
            <Text style={styles.userID}>#usernameID</Text>
          </View>
        </View>
        <View style={styles.avatarContainer}>
          <RoundUserAvatarWithScore />
        </View>
      </View>
      <View style={styles.bodyContainer}>
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
            removeClippedSubviews={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  headerContainer: {
    flex: 1,
    zIndex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  bodyContainer: {
    flex: 3,
    backgroundColor: Colors.background,
  },
  header: {
    flex: 1,
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarContainer: {
    flex: 2,
    top: '10%',
    position: 'relative',
  },
  mesVerifs: {
    fontSize: 35,
    fontWeight: "600",
    color: "white",
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
  userProductsContainer: {
    alignItems: 'center',
    marginTop: '35%',
  },
});