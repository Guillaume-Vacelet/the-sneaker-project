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
      <Text style={styles.title}>Vérifiez vos <Text style={{fontWeight:'bold', color:}}>sneakers</Text> rapidement !</Text>
      <SneakerCard />
      <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Button color="#841584" title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    padding: 20,
    color: "black",
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  imageCard: {
    height:200,
  },
  paragraph: {
    margin: 20,
  }
});