import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

export default function SearchScreen() {

  return (
    <View style={styles.rootContainer}>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
});