import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { Button, Input } from "react-native-elements";
import CustomIcon from '../../components/CustomIcon';

export default function SignUpScreen(props) {

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Create your account:</Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder='Username'
          onChangeText={(value) => setEmail(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={
            <CustomIcon type={"font-awesome-5"} name={"user-circle"} size={20} />
          }
        />
        <Input
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={
            <CustomIcon type={"font-awesome-5"} name={"envelope"} size={20} />
          }
        />
        <Input
          placeholder='Password'
          onChangeText={(value) => setPassword(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={{ 
            type: 'font-awesome-5', 
            size: 20, 
            name: 'key'
          }}
        />
        <Button title="Sign-up" 
          buttonStyle={styles.authButton} 
        />
      </View>
      <Button title="Sign-in" 
        buttonStyle={styles.authButton}
        onPress={() => props.navigation.navigate("SignIn")}
      />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 20,
    color: "#73eca6"
  },
  inputsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    shadowColor: 'white',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 }
  },
  authInput: {
    width: 300,
  },
  authButton: {
    marginBottom: 10,
    width: 300,
    backgroundColor: "#73eca6",
  }
});