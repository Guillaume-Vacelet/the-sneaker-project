import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SearchTabsNavigator } from '../../core/navigation/SearchTabsNavigator';
import BrandsContext from '../../../core/contexts/BrandsContext';
import ProductsContext from '../../../core/contexts/ProductsContext';
import { FlatGrid } from 'react-native-super-grid';
import SneakerCard from '../../../components/SneakerCard';
// images
import nmd_r1 from '../../../assets/sneaker-example.png';
import nikeLogo from '../../../assets/nike-logo.svg';
import adidasLogo from '../../../assets/adidas-logo.svg';
import newbalanceLogo from '../../../assets/new-balance-logo.svg';

export default function SearchScreen() {
  const [searchInput, setSearchInput] = React.useState('');
  const products = [
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
      <ProductsContext.Provider value={products}>
        <SafeAreaView style={styles.rootContainer}>
          <Text style={styles.title}>Que recherchez-vous ?</Text>
          <SearchBar
            placeholder="Chercher une paire..."
            onChangeText={setSearchInput}
            value={searchInput}
            clearIcon={true}
            searchIcon={false}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
          />
          {searchInput
            ? <FlatGrid
                data={products.filter(product => product.model === searchInput)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <SneakerCard item={item} hasBeenChecked={false} />
                )}
                itemDimension={150}
                spacing={10}
              />
            : <SearchTabsNavigator products={products} />
          }
        </SafeAreaView>
      </ProductsContext.Provider>
    </BrandsContext.Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'lightgray',
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    margin: 20,
    color: "black",
    alignSelf: 'center'
  },
  searchBarContainer: {
    backgroundColor: 'lightgray', 
    borderBottomColor: 'transparent', 
    borderTopColor: 'transparent',
  },
  searchBarInputContainer: {
    backgroundColor: 'white', 
    borderRadius: 50, 
    // borderWidth: 1, 
    borderColor: 'black',
  },
});