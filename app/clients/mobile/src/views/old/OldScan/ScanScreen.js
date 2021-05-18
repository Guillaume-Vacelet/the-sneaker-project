import { StyleSheet, StatusBar, View, Text } from 'react-native';
import React from 'react';
import TestCam from '../../../components/Test_cam';

export default function ScanScreen() {
  return(
    <View style={styles.rootContainer}>
      <TestCam/>
    </View>
  );
}

const styles = StyleSheet.create({
  

});