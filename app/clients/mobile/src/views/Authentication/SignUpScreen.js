import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/authActions";
import CustomIcon from '../../components/CustomIcon';
import Authentication from '../../core/Authentication'
import { Button, Input, Icon } from "react-native-elements";

export default function SignUpScreen(props) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
  const dispatch = useDispatch();

  function handleSignUp() {
    const auth = new Authentication();
    if (!username || !email || !password) {
      setStatus('Some inputs are empty');
      return;
    }

    // auth.signup(username, email, password).then((/*jwt*/) => {
    //   dispatch(signUpUser(username, email, "abc"))
    // }).catch(() => {
    //   setStatus('Something went wrong, please try again.');
    // });

    auth.signup(username, email, password, () => {
      dispatch(signUpUser(username, email, "abc"));
      setStatus('Registered successfully!');
    }, (err) => {
      setStatus('Something went wrong, please try again.');
    });
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Create your account:</Text>
      <Text style={{color:'red'}}>{ status }</Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder='Username'
          onChangeText={(value) => setUsername(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={
            <Icon type={"font-awesome-5"} name={"user-circle"} size={20} />
          }
        />
        <Input
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={
            <Icon type={"font-awesome-5"} name={"envelope"} size={20} />
          }
        />
        <Input
          placeholder='Password'
          onChangeText={(value) => setPassword(value)}
          inputContainerStyle={styles.authInput}
          leftIcon={
            <Icon type={"font-awesome-5"} name={"key"} size={20} />
          }
        />
        <Button title="Sign-up" 
          buttonStyle={styles.authButton} 
          onPress={handleSignUp}
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