import React from 'react';
import { View, StatusBar, Text, StyleSheet, Image } from 'react-native';

import SneakerCard_sizeable from '../../components/SneakerCard_sizeable';
import Colors from '../../../constants/Colors';
import BasicBtn from '../../components/BasicBtn';
import nmd_r1 from '../../../assets/sneaker-example.png';

export default function HomeScreen(props) {
  const itemExample = { id: '0', model: 'NMD_R1', brand: 'Adidas', color: 'pink', price: '180.00', image: Image.resolveAssetSource(nmd_r1).uri, checked: true }

  return (
    <View style={styles.rootContainer}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.logo} source={require('../../../assets/logo_example.png')} />
      </View>
      <Text style={styles.verif}>Vérifiez vos <Text style={{ fontWeight: 'bold', color: Colors.primary }}>sneakers</Text> <Text style={styles.rapid}>rapidement !</Text></Text>
      <SneakerCard_sizeable item={itemExample} hasBeenChecked={true} size={1.3} />
      <Text style={styles.comment}>Comment <Text style={{ fontWeight: 'bold', color: Colors.primary }}>vérifier{'\n'}</Text><Text style={styles.paires}>Mes paires ?</Text></Text>
      <Text style={styles.paragraph}>Grâce à de l'intelligence artificielle, AICheck/SafeCheck est capable de déterminer l'authenticité de vos sneakers grâce à une seule photo à publier.</Text>
      <BasicBtn title='commencer' onPress={console.log('Commencer bouton pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    marginBottom: 125,
    flex: 1,
    marginHorizontal: '8%',
  },
  logo: {
    width: 50,
    height: 50
  },
  verif: {
    fontSize: 22,
    marginVertical: 10,
    color: "black",
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: '7%',
  },
  rapid: {
    fontSize: 38
  },
  comment: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginTop: 40,
    marginBottom: 5,
    marginVertical: '7%',
  },
  paires: {
    fontSize: 28,
    textTransform: 'uppercase',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 30,
  }
});