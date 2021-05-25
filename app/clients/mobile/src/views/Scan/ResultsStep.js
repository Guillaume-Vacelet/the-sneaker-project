import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';
//import { BoxLoading } from 'react-loadingg';

export default function ResultsStep(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center' }}> 
          <Text style={{fontSize: 35, fontWeight: 'bold'}}> Congrats! </Text> 
          {"\n"}Your <Text style={{fontSize: 22, fontStyle: 'italic', fontWeight: 'bold'}}> Nike Jordan AF1 </Text>got :</Text>
        <Image
          style={styles.legitCkdImg}
          source={require('../../../assets/legit_checked.png')}
        />
        <Image
          style={styles.sneakerImg}
          source={require('../../../assets/sneaker-example.png')}
        />
      </View>
      <View style={styles.footerContainer}>
        <GoToStepButton goBack={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background
  },
  bodyContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  legitCkdImg : {
    height: 200,
    width: 200,
    position: 'absolute',
    left: '25%',
    top: '40%',
    zIndex: 1,
  },
  sneakerImg : {
    height: 300,
    width: 300,
    zIndex: 0,
    margin: 20,
  },
});
