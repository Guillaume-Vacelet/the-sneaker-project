import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default function LoadingScreen() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ActivityIndicator size="large" color='black' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});