//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//Redux
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authActions";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Authentication from '../../core/Authentication'
import Colors from "../../../constants/Colors"
import basicFlashMessage from '../../core/utils/basicFlashMessage';


export default function SignInScreen(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [activity, setActivity] = React.useState(false);
  const dispatch = useDispatch();

  function handleSignIn() {
    setActivity(true);

    if (!email || !password) {
      setActivity(false);
      basicFlashMessage("warning", "Some fields are missing", 3000);
      return;
    }

    const auth = new Authentication();
    auth.signin(email, password).then((data) => {
      setActivity(false);
      dispatch(signInUser(data.username, data.email, "abc"))
      basicFlashMessage("success", data.status, 5000);
    }).catch((error) => {
      setActivity(false);
      basicFlashMessage("danger", error.data.error, 5000);
      if (error.status === 403) {
        props.navigation.navigate('EmailVerification', {email: email, destination: 'SignIn'});
      }
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.title}>Welcome back!</Text>
      <View style={styles.inputsContainer}>
        <BasicInput label={'Email'} setter={setEmail} type={"email-address"}/>
        <BasicInput label={'Password'} setter={setPassword} secured={true}/>
        <BasicBtn title="Sign-in" onPress={handleSignIn} activity={activity} />
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
    backgroundColor: Colors.background
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