import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Modal, Button } from 'react-native';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';

export default function ResultsStep(props) {
  const [modalVisible, setModalVisible] = useState(true);
  const showModal = () => { setTimeout( () => setModalVisible(false), 3000)}
  showModal();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={{color: Colors.primary}}>Legit Checking your sneaker...</Text>
          </View>
        </Modal>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}> Congrats! </Text>
          {"\n"}Your <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 'bold' }}> Nike Jordan AF1 </Text>got :</Text>
        <Image
          style={styles.legitCkdImg}
          source={require('../../../assets/legit_checked.png')}
        />
        <Image
          style={styles.sneakerImg}
          source={require('../../../assets/AirJordanLow_RoyalToe.png')}
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
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
    height: '70%',
    width: '100%',
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
  legitCkdImg: {
    height: 200,
    width: 200,
    position: 'absolute',
    left: '25%',
    top: '40%',
    zIndex: 1,
  },
  sneakerImg : {
    width: '100%', 
    height: '50%',
    zIndex: 0,
    margin: 20,
  },
});
