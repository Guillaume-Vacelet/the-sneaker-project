import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import BrandsContext from '../../../core/contexts/BrandsContext';


export default function BrandsTab({navigation}) {
  const brands = React.useContext(BrandsContext);

  function handleOnPress(brand) {
    navigation.push('BrandProducts', brand.title)
  }

  return (
    brands
      ? brands.map((brand) => (
        <ListItem 
          onPress={() => handleOnPress(brand)}
          key={brand.title} 
          containerStyle={styles.brandContainer}
          bottomDivider 
        >
          {/* <Image style={styles.brandLogo} source={{uri: brand.logo}} /> */}
          <ListItem.Content>
            <ListItem.Title style={styles.brandTitle}>{brand.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        ))
      : null
  );
}

const styles = StyleSheet.create({
  brandContainer: {
    height: 80
  },
  // brandLogoContainer: {
  //   height: '100%',
  //   justifyContent: 'center'
  // },
  // brandLogo: {
  //   width: 100,
  //   height: 100,
  // },
  brandTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
});