import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';

export default function ResultsStep(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <GoBackArrow left={true} goBack={props.navigation.goBack} dark={false} />
      </View>
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
    backgroundColor: Colors.background
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 11,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
    color: Colors.primary
  }
});

