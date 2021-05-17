import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
// import Colors from '../../../../constants/Colors';

export default function ResultsStep(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}></View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title1}>Results</Text>
      </View>
      <View style={styles.footerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: '#161a1d'
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  bodyContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  footerContainer: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
    color: 'white'
  }
});