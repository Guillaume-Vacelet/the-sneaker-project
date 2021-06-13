import React from 'react';
import { View, Text, StatusBar, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import ButtonScanner from '../../../components/ButtonScanner';
import ProductCard from '../../../components/ProductCard';
import nmd_r1 from '../../../assets/sneaker-example.png';

export default function ProductScreen() {
  const [favorite, setFavorite] = React.useState(false)
  let item = {
    id: '0', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00',image: Image.resolveAssetSource(nmd_r1).uri, checked: true
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View>
          <ProductCard item={item} hasBeenChecked={true} />
        </View>
        <View>
          <Text style={styles.title2}>Description</Text>
          <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </View>
        <View style={styles.productActions}>
          <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '10%'}}>
            <Button onPress={() => setFavorite(!favorite)}
              icon={() => {
                let iconName = favorite ? 'heart' : 'hearto';
                return <Icon type={"antdesign"} name={iconName} size={30} color={'#73eca6'} />
              }}
              containerStyle={{
                height: 70, 
                width: 70, 
                justifyContent: 'center', 
                alignItems: 'center'
              }}
              buttonStyle={{
                width: 60,
                height: 60,
                backgroundColor: 'white',
                borderRadius: 50,
                shadowOpacity: '0.2',
                shadowOffset: { width: 0, height: 2 },
              }}
            />
          </View>
          <ButtonScanner/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // marginTop:50
    
  },
  Container:{
    height:350,
    backgroundColor:'pink'
    
  },
  title2: {
    fontSize: 30,
    fontWeight: "600",
    padding: 20,
    color: "black",
  },
  text1:{
    paddingHorizontal:20,
  },
  productActions:{
    flexDirection:'row',
    marginTop: '5%',
  },
});