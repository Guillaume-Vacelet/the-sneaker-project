import React from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/authActions";
import Authentication from '../../core/Authentication'
import { Input } from "react-native-elements";
import {showMessage} from "react-native-flash-message";
import Colors from "../../../constants/Colors"
import BasicBtn from '../../components/BasicBtn';
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen(props) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [activity, setActivity] = React.useState(false);
  const dispatch = useDispatch();

  function handleSignUp() {
    setActivity(true);
    const auth = new Authentication();

    if (!username || !email || !password || !confirmPassword) {
      showMessage({
        message: "Some fields are missing.",
        type: "warning",
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }

    if (password !== confirmPassword) {
      showMessage({
        message: "Please confirm password correctly.",
        type: "warning",
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }
    
    auth.signup(username, email, password, () => {
      dispatch(signUpUser(username, email, "abc"));
      setUsername('');
      setEmail('');
      setPassword('');
      showMessage({
        message: "Account successfully created.",
        type: "success",
        backgroundColor: Colors.primary,
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
      });
      setActivity(false);
      props.navigation.navigate('SignIn')
    }, (error) => {
      setActivity(false);
      console.log(error);
      showMessage({
        message: "An error occurred, please try again.",
        type: "danger",
        autoHide: true,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder='Username'
          onChangeText={(value) => setUsername(value)}
          inputContainerStyle={styles.authInput}
        />
        <Input
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
          inputContainerStyle={styles.authInput}
        />
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          style={[styles.textInput, {marginBottom: '8%'}]}
          placeholderTextColor='slategray'
        />
        <TextInput 
          placeholder='Confirm password'
          secureTextEntry={true}
          onChangeText={(value) => setConfirmPassword(value)}
          style={[styles.textInput, {marginBottom: '15%'}]}
          placeholderTextColor='slategray'
        />
        <BasicBtn
          title="Sign-up"
          onPress={handleSignUp}
          activity={activity}
        />
      </View>
      <BasicBtn
        title="Sign-in"
        onPress={() => props.navigation.navigate("SignIn")}
      />
    </SafeAreaView>
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
    color: Colors.primary
  },
  inputsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: '5%',
    paddingVertical: '7%',
    marginBottom: 30
  },
  authInput: {
    width: 300,
  },
  authButton: {
    marginBottom: 10,
    borderRadius: 25,
    width: 300,
    backgroundColor: Colors.primary,
  },
  textInput: {
    width: 300,
    marginTop: '3%',
    borderRadius: 5,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'slategray',
    paddingBottom: '2%'
  }
});