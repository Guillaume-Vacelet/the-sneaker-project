import React from 'react';
import { View, Image, StyleSheet, ScrollView} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import ProductsContext from '../../core/contexts/ProductsContext';
import ScanStepsContext from '../../core/contexts/ScanStepsContext';

export default function ModelSelectionStep(props) {
  const [searchInput, setSearchInput] = React.useState('');
  const { currentStep, stepCount, stepsTitle, setCurrentStep } = React.useContext(ScanStepsContext);
  const { products, setSelectedModel } = React.useContext(ProductsContext);

  function getSearchResults() {
    return products.filter(products => 
      products.model.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  function handleModelSelection(product) {
    setSelectedModel(product);

    if (currentStep - 1 == stepCount) {
      return;
    }
    setCurrentStep(currentStep + 1);
    props.navigation.navigate(stepsTitle[currentStep + 1]);
  }
  
  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        <SearchBar
          placeholder="Search your sneaker model"
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
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.secondary, 
    borderRadius: 10,
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