import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';

export default function ResultsStep(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
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
    flexDirection: 'row'
  },
});