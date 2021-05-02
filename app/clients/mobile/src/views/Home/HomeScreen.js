import React from 'react';
import { View, StatusBar, Text, StyleSheet, Image } from 'react-native';

import SneakerCard from '../../components/SneakerCard';
import Colors from '../../../constants/Colors';
import BasicBtn from '../../components/BasicBtn';
import nmd_r1 from '../../../assets/sneaker-example.png';

export default function HomeScreen(props) {
  const itemExample = {id: '0', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true}

  return (
    <View style={styles.rootContainer}>
      <View style ={{alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.logo} source={require('../../../assets/logo_example.png')}/>
      </View>
      <Text style={styles.verif}>Vérifiez vos <Text style={{ fontWeight: 'bold', color: Colors.primary }}>sneakers</Text> <Text style={styles.rapid}>rapidement !</Text></Text>
      <SneakerCard item={itemExample} hasBeenChecked={true}/>
      <Text style={styles.comment}>Comment <Text style={{ fontWeight: 'bold', color: Colors.primary }}>vérifier{'\n'}</Text><Text style={styles.paires}>Mes paires ?</Text></Text>
      <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <BasicBtn title='commencer' onPress={console.log('hello')} />
    </View>      
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    marginHorizontal: 25,
  },
  logo: {
    width: 50,
    height: 50
  },
  verif: {
    fontSize: 22,
    padding: 20,
    color: "black",
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  rapid: {
    fontSize: 38
  },
  comment: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 5,
  },
  paires: {
    fontSize: 28,
    textTransform: 'uppercase',
  },
  imageCard: {
    height: 200,
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 20,
  }
});