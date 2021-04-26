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
      <Button color="#841584" title="Sign out" onPress={handleSignOut} />
      <View>
        <Text style={styles.title}>Vérifiez vos sneakers rapidement !</Text>
      </View>
      <SneakerCard />
      <Text>TEST</Text>
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
  },
  imageCard: {
    height:200,
  }
});