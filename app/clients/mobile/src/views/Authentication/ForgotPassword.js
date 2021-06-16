//React
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Colors from "../../../constants/Colors"
import Authentication from '../../core/Authentication'
import basicFlashMessage from '../../core/utils/basicFlashMessage';

export default function ForgotPassword(props) {
  const [email, setEmail] = React.useState('');
  const [activity, setActivity] = React.useState(false);

  function handleSendCode() {
    setActivity(true);

    if (!email) {
      setActivity(false);
      basicFlashMessage("warning", "Enter an email address", 3000);
      return;
    }

    const auth = new Authentication();
    auth.sendNewCode(email).then(data => {
      setActivity(false);
      basicFlashMessage("success", data.status, 5000);
      props.navigation.navigate('EmailVerification', {email: email, destination: 'ResetPassword'})
    }).catch(error => {
      setActivity(false);
      basicFlashMessage("danger", error.data.error, 5000);
    });
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableOpacity style={styles.goBack} onPress={() => props.navigation.goBack()}>
        <Icon type={'antdesign'} name={'arrowleft'} color={Colors.secondary}/>
        <Text style={{color: Colors.secondary, fontSize: 20, marginLeft: '1%'}}>Back</Text>
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <View style={{display: 'flex', flex: 1, justifyContent: 'flex-start', padding: '5%'}}>
          <View style={[styles.titles, {justifyContent: 'flex-start'}]}>
            <Text style={styles.title}>Forgot password</Text>
            <Text style={styles.title2}>
              Enter your email address and we'll send you a code to confirm you are the account owner.
            </Text>
          </View>
          <View style={styles.inputsContainer}>
            <BasicInput label={'Email address'} setter={setEmail} type={"email-address"}/>
            <BasicBtn title="Send code" 
              onPress={handleSendCode}
              activity={activity}
            />
          </View>
        </View>
      </View>
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
  goBack: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: '5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bodyContainer: {
    width: '100%',
    display: 'flex',
    flex: 10,
    justifyContent: 'center',
  },
  titles: {
    marginBottom: '10%',
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    color: Colors.primary,
    marginVertical: '5%'
  },
  title2: {
    fontSize: 18,
    color: Colors.secondary,
  },
  inputsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    paddingTop: 30,
    marginBottom: 30
  },
  ResetPassword: {
    marginTop: '5%',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  emailSent: {
    display: 'flex', 
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: '7%',
  }
});