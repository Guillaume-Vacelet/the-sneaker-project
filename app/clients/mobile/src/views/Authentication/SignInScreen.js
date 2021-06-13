import React from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet } from 'react-native';
import { Input } from "react-native-elements";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authActions";
import Authentication from '../../core/Authentication'
import BasicBtn from '../../components/BasicBtn';
import {showMessage} from "react-native-flash-message";
import Colors from "../../../constants/Colors"
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [activity, setActivity] = React.useState(false);
  const dispatch = useDispatch();

  function handleSignIn() {
    setActivity(true);
    const auth = new Authentication();

    if (!email || !password) {
      showMessage({
        message: "Some fields are missing.",
        type: "warning",
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }

    auth.signin(email, password).then((data) => {
      setActivity(false);
      dispatch(signInUser(data.username, data.email, "abc"))
      showMessage({
        message: "Successfully logged in!",
        type: "success",
        backgroundColor: Colors.primary,
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
      });
    }).catch((error) => {
      setActivity(false);
      console.log(error)
      showMessage({
        message: "Login failed, please try again.",
        type: "danger",
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.title}>Welcome back!</Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
          inputContainerStyle={styles.authInput}
        />
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          style={{
            width: 300,
            marginTop: '5%',
            marginBottom: '15%',
            borderRadius: 5,
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: 'slategray',
            paddingBottom: '2%'
          }}
          placeholderTextColor='slategray'
        />
        <BasicBtn 
          title="Sign-in"
          onPress={handleSignIn}
          activity={activity}
        />
        <Text style={styles.forgotPassword} onPress={() => props.navigation.navigate('ForgotPassword')}>
          Forgot password?
        </Text>
      </View>
      <BasicBtn 
        title="Sign-up"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    padding: 20,
    color: Colors.primary
  },
  inputsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    paddingTop: 30,
    marginBottom: 30
  },
  authInput: {
    width: 300,
  },
  forgotPassword: {
    marginTop: '5%',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});