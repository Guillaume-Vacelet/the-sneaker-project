import { StyleSheet, StatusBar, View, Text } from 'react-native';
import React from 'react';

export default function ScanScreen() {
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Scan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    padding: 20,
    color: "black",
  },
});