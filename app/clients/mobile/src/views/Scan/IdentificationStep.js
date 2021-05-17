import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
// import Colors from '../../../../constants/Colors';

export default function IdentificatonStep(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}></View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title1}>Identification</Text>
        <Button title={"Next"} onPress={() => props.navigation.navigate("Scanning")} />
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
  bodyContainer: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
    color: 'white'
  }
});