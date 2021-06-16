//React
import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//Redux
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/authActions";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Authentication from '../../core/Authentication'
import Colors from "../../../constants/Colors"
import basicFlashMessage from '../../core/utils/basicFlashMessage';

export default function SignUpScreen(props) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState('');
  const [activity, setActivity] = React.useState(false);
  const dispatch = useDispatch();

  function handleSignUp() {
    setActivity(true);
    const auth = new Authentication();

    if (!username || !email || !password || !newPasswordConfirmation) {
      setActivity(false);
      basicFlashMessage("warning", "Some fields are missing", 3000);
      return;
    }
    if (password !== newPasswordConfirmation) {
      setActivity(false);
      basicFlashMessage("warning", "Confirm password correctly", 3000);
      return;
    }
    if (password.length < 6) {
      setActivity(false);
      basicFlashMessage("warning", "Password must be atleast 6 characters long", 3000);
      return;
    }

    auth.signup(username, email, password).then((data) => {
      dispatch(signUpUser(username, email, "abc"));
      setActivity(false);
      basicFlashMessage("success", data.status, 5000);
      props.navigation.navigate('EmailVerification', { email: email, destination: 'SignIn'})
    }).catch((error) => {
      setActivity(false);
      basicFlashMessage("danger", error.data.error, 5000);
      if (error.status === 403) {
        props.navigation.navigate('SignIn');
      }
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputsContainer}>
        <BasicInput label={'Username'} setter={setUsername}/>
        <BasicInput label={'Email'} setter={setEmail} type={"email-address"}/>
        <BasicInput label={'Password'} setter={setPassword} secured={true}/>
        <BasicInput label={'Confirm password'} setter={setNewPasswordConfirmation} secured={true}/>
        <BasicBtn title="Sign-up" onPress={handleSignUp} activity={activity}/>
      </View>
      <BasicBtn title="Sign-in" onPress={() => props.navigation.navigate("SignIn")}/>
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
    backgroundColor: Colors.background
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
  }
});