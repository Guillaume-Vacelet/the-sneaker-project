//React
import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
//Redux
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/authActions";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Authentication from '../../core/Authentication'
import Colors from "../../../constants/Colors"

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
      showMessage({message: "Some fields are missing.", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }
    if (password !== confirmPassword) {
      showMessage({message: "Confirm password correctly.", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }
    if (password.length < 6) {
      showMessage({message: "Password must be atleast 6 characters long.", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }

    auth.signup(username, email, password).then((data) => {
      console.log(data);
      dispatch(signUpUser(username, email, "abc"));
      showMessage({message: "Account successfully created.", type: "success", duration:5000,
        backgroundColor: Colors.primary, 
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
      });
      setActivity(false);
      props.navigation.navigate('EmailConfirmation', { email: email })
    }).catch((error) => {
      console.log(error);
      setActivity(false);
      showMessage({message: error, type: "danger", duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputsContainer}>
        <BasicInput label={'Username'} setter={setUsername}/>
        <BasicInput label={'Email'} setter={setEmail} type={"email-address"}/>
        <BasicInput label={'Password'} setter={setPassword} secured={true}/>
        <BasicInput label={'Confirm password'} setter={setConfirmPassword} secured={true}/>
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
  }
});