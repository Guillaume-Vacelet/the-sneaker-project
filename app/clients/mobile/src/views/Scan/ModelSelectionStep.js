import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';

export default function ModelSelectionStep(props) {
  const [searchInput, setSearchInput] = React.useState('');
  const [sneakerModel, setSneakerModel] = React.useState('a');

  return (
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
        </View>
      </View>
      <View style={styles.footerContainer}>
        { sneakerModel
          ? <GoToStepButton back={false} />
          : null
        }
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
  }
});