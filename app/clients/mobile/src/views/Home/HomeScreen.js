import React from 'react';
import { View, StatusBar, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { signOutUser } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';                               
import SneakerCard from '../../components/SneakerCard';


export default function HomeScreen(props) {
  const dispatch = useDispatch();
  
  function handleSignOut() {
    dispatch(signOutUser());
    // AsyncStorage.removeItem();
    // navigation.navigate('AuthStackScreen', { screen: 'SignIn' });
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Vérifiez vos sneakers</Text>
      <Text style={styles.title}>rapidement !</Text>
      <Button style={styles.signOutButton} color="#841584" title="Sign out" onPress={handleSignOut} />
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
    fontSize: 30,
    color: "black",
  },
  signOutButton: {
    margin: 50
  }
});