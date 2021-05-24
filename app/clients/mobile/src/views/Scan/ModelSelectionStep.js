import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';
import airforce1 from '../../../assets/airforce1.png';
import airforce1_aurora from '../../../assets/airforce1_aurora.png';
import nmdr1 from '../../../assets/nmdr1.png';
import dunklow_bw from '../../../assets/dunklow_blackwhite.png';
import ProductsContext from '../../core/contexts/ProductsContext';

export default function ModelSelectionStep(props) {
  const [searchInput, setSearchInput] = React.useState('');
  const [sneakerModel, setSneakerModel] = React.useState('');
  const sneakers = [
    {id: '0', model: 'NMDR1', brand: 'Adidas', color: 'black', price: '180.00', image: Image.resolveAssetSource(nmdr1).uri, checked: true},
    {id: '1', model: 'Air Force 1', brand: 'Nike', color: 'white', price: '100.00', image: Image.resolveAssetSource(airforce1).uri, checked: true},
    {id: '2', model: 'Air Force 1', brand: 'Nike', color: 'white', price: '100.00', image: Image.resolveAssetSource(airforce1_aurora).uri, checked: true},
    {id: '3', model: 'Dunk Low', brand: 'Nike', color: 'black', price: '180.00', image: Image.resolveAssetSource(dunklow_bw).uri, checked: false},
  ]
  function getSearchResults() {
    return sneakers.filter(sneaker => 
      sneaker.model.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  
  return (
    <ProductsContext.Provider value={sneakers}>
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
          <View style={styles.searchResults}>
            {searchInput
              ? getSearchResults().map((sneaker, i) => {
                  return (
                  <ListItem key={i} bottomDivider 
                    containerStyle={styles.result}
                    onPress={() => setSneakerModel(sneaker.model)}
                  >
                    <Image style={{width: '50%', height: '100%'}} source={{uri: sneaker.image}}/>
                    <ListItem.Content>
                      <ListItem.Title style={styles.resultTitle}>{sneaker.model}</ListItem.Title>
                    </ListItem.Content>
                  </ListItem>);
                })
              : null
            }
          </View>
        </View>
        <View style={styles.footerContainer}>
          { sneakerModel
            ? <GoToStepButton back={false} />
            : null
          }
        </View>
      </View>
    </ProductsContext.Provider>
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
    flex: 1,
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
    flex: 10,
    width: '100%',
  },
  result: {
    height: 150,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.background
  },
  resultTitle: {
    color: Colors.secondary,
    fontSize: 20
  }
});