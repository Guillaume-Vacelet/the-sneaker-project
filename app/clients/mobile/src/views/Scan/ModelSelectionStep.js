import React from 'react';
import { View, Image, StyleSheet, ScrollView} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';
import airforce1 from '../../../assets/airforce1.png';
import airforce1_aurora from '../../../assets/airforce1_aurora.png';
import nmdr1 from '../../../assets/nmdr1.png';
import dunklow_bw from '../../../assets/dunklow_blackwhite.png';
import b23_dior from '../../../assets/b23_dior.png';
import AirJordanLow_RoyalToe from '../../../assets/AirJordanLow_RoyalToe.png';
import ProductsContext from '../../core/contexts/ProductsContext';
import ScanStepsContext from '../../core/contexts/ScanStepsContext';

export default function ModelSelectionStep(props) {
  const [searchInput, setSearchInput] = React.useState('');
  // const [sneakerModel, setSneakerModel] = React.useState('');
  // const sneakers = [
  //   {id: '0', model: 'NMDR1', brand: 'Adidas', color: 'black', image: Image.resolveAssetSource(nmdr1).uri, checked: true},
  //   {id: '1', model: 'Air Force 1', brand: 'Nike', color: 'white', image: Image.resolveAssetSource(airforce1).uri, checked: true},
  //   {id: '2', model: 'Air Force 1 Shadow Aurora', brand: 'Nike', color: 'white', image: Image.resolveAssetSource(airforce1_aurora).uri, checked: true},
  //   {id: '3', model: 'Dunk Low', brand: 'Nike', color: 'black', image: Image.resolveAssetSource(dunklow_bw).uri, checked: false},
  //   {id: '4', model: 'B23 Dior', brand: 'Nike', color: 'black', image: Image.resolveAssetSource(b23_dior).uri, checked: false},
  //   {id: '5', model: 'Air Jordan Low Royal Toe', brand: 'Nike', color: 'black', image: Image.resolveAssetSource(AirJordanLow_RoyalToe).uri, checked: false},
  // ]
  const { currentStep, stepCount, stepsTitle, setCurrentStep } = React.useContext(ScanStepsContext);
  const { products, setSelectedModel } = React.useContext(ProductsContext);

  function getSearchResults() {
    return products.filter(products => 
      products.model.toLowerCase().includes(searchInput.toLowerCase())
    );
    // return sneakers.filter(sneaker => 
    //   sneaker.model.toLowerCase().includes(searchInput.toLowerCase())
    // );
  }

  function handleModelSelection(product) {
    // setSneakerModel(sneaker.model);
    setSelectedModel(product);

    if (currentStep - 1 == stepCount) {
      return;
    }
    setCurrentStep(currentStep + 1);
    props.navigation.navigate(stepsTitle[currentStep + 1]);
  }
  
  return (
    // <ProductsContext.Provider value={sneakers}>
      <View style={styles.rootContainer}>
        <View style={styles.bodyContainer}>
          <SearchBar
            placeholder="Recherchez votre paire..."
            onChangeText={setSearchInput}
            value={searchInput}
            clearIcon={true}
            searchIcon={true}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={{color: 'black'}}
          />
          <ScrollView 
            style={styles.searchResults} 
            contentContainerStyle={styles.searchResultsContentContainer}
          >
            {searchInput
              ? getSearchResults().map((product, i) => {
                  console.log(product.image)
                  return (
                  <ListItem key={i} bottomDivider 
                    containerStyle={styles.result}
                    onPress={() => handleModelSelection(product)}
                  >
                    <Image style={{width: '50%', height: '100%'}} source={{uri: product.image}}/>
                    <ListItem.Content>
                      <ListItem.Title style={styles.resultModel}>{product.model}</ListItem.Title>
                      <ListItem.Subtitle style={styles.resultBrand}>{product.brand}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>);
                })
              : null
            }
          </ScrollView>
        </View>
      </View>
    // </ProductsContext.Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background,
  },
   bodyContainer: {
    flex: 9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    marginTop: '5%',
    backgroundColor: Colors.background, 
  },
  searchBarInputContainer: {
    backgroundColor: 'white', 
    borderRadius: 50,
  },
  searchResults: {
    // flex: 10,
    width: '100%',
  },
  searchResultsContentContainer: {
    // flex: 1,
    height: '150%',
    width: '100%',
  },
  result: {
    height: 150,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.background
  },
  resultModel: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: '600',
  },
  resultBrand: {
    color: Colors.secondary,
    fontSize: 20,
  }
});