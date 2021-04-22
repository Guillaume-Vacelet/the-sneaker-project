import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { signOutUser } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';                               

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  
  function handleSignOut() {
    dispatch(signOutUser());
    // AsyncStorage.removeItem();
    // navigation.navigate('AuthStackScreen', { screen: 'SignIn' });
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Home</Text>
      <Button color="#841584" title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
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