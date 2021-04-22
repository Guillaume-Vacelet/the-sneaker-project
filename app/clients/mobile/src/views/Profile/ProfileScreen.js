import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Profile</Text>
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