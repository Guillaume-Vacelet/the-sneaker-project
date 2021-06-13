//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {showMessage} from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
//Redux
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authActions";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Authentication from '../../core/Authentication'
import Colors from "../../../constants/Colors"

export default function SignInScreen(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [activity, setActivity] = React.useState(false);
  const dispatch = useDispatch();

  function handleSignIn() {
    setActivity(true);

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

    const auth = new Authentication();
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
        <BasicInput label={'Email'} setter={setEmail}/>
        <BasicInput label={'Password'} setter={setPassword} secured={true}/>
        <BasicBtn title="Sign-in" onPress={handleSignIn} activity={activity}/>
        <Text style={styles.forgotPassword} onPress={() => props.navigation.navigate('ForgotPassword')}>
          Forgot password?
        </Text>
      </View>
      <BasicBtn title="Sign-up" onPress={() => props.navigation.navigate("SignUp")}/>
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
  forgotPassword: {
    marginTop: '5%',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});