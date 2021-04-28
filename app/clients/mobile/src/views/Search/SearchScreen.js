import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { SearchTabsNavigator } from '../../core/navigation/SearchTabsNavigator';
import BrandsContext from '../../core/contexts/BrandsContext';
import UserProductsContext from '../../core/contexts/UserProductsContext';
import nmd_r1 from '../../../assets/sneaker-example.png';
import nikeLogo from '../../../assets/nike-logo.svg';
import adidasLogo from '../../../assets/adidas-logo.svg';
import newbalanceLogo from '../../../assets/new-balance-logo.svg';

export default function SearchScreen() {
  const userProducts = [
    {id: '0', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '1', model: 'Air Force 1', brand: 'Nike', color: 'white', price: '100.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '2', model: 'AirMax 97 Off-White', brand: 'Nike', color: 'gray', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: false},
    {id: '3', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '4', model: 'Air Force 1', brand: 'Nike', color: 'white', price: '100.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
    {id: '5', model: 'AirMax 97 Off-White', brand: 'Nike', color: 'gray', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: false},
    {id: '6', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true},
  ]

  const brands = [
    { title: 'Nike', logo: Image.resolveAssetSource(nikeLogo).uri },
    { title: 'Adidas', logo: Image.resolveAssetSource(adidasLogo).uri },
    { title: 'New Balance', logo: Image.resolveAssetSource(newbalanceLogo).uri },
  ]

  return (
    <BrandsContext.Provider value={brands}>
      <UserProductsContext.Provider value={userProducts}>
        <SafeAreaView style={styles.rootContainer}>
          <Text style={styles.title}>Que recherchez-vous ?</Text>
            <SearchTabsNavigator userProducts={userProducts} />
        </SafeAreaView>
      </UserProductsContext.Provider>
    </BrandsContext.Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // marginTop: StatusBar.currentHeight,
    // height: '100%',
    // width: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    padding: 20,
    color: "black",
    alignSelf: 'center'
  },
});