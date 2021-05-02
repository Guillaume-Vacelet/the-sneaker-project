import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { Button, Input } from "react-native-elements";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authActions";
import Authentication from '../../core/Authentication'

export default function SignInScreen(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
  const dispatch = useDispatch();

  function handleSignIn() {
    const auth = new Authentication();
    if (!email || !password) {
      setStatus('Some inputs are empty');
      return;
    }

    auth.signin(email, password).then((/*jwt*/) => {
      dispatch(signInUser(user.username, user.email, "abc"))
    }).catch(() => {
      setStatus('Something went wrong, please try again.');
    });
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={{color:'red'}}>{ status }</Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={{ 
            type: 'font-awesome-5', 
            size: 20, 
            name: 'envelope'
          }}
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
        <Button title="Sign-in" 
          buttonStyle={styles.authButton} 
          onPress={handleSignIn}
        />
      </View>
      <Button title="Sign-up" 
        buttonStyle={styles.authButton} 
        onPress={() => props.navigation.navigate("SignUp")} 
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
    fontSize: 40,
    fontWeight: "600",
    padding: 20,
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
    shadowOffset: { width: 0, height: 5 },
  },
  authInput: {
    width: 300,
  },
  authButton: {
    marginBottom: 10,
    width: 300,
    backgroundColor: "#73eca6"
  }
});