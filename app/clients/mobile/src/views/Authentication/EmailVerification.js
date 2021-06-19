//React
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Colors from "../../../constants/Colors"
import User from '../../core/api/User'
import basicFlashMessage from '../../core/utils/basicFlashMessage';

export default function EmailVerification(props) {
  const [inputCode, setInputCode] = React.useState('');
  const [validCode, setValidCode] = React.useState(false);
  const [verifyActivity, setVerifyActivity] = React.useState(false);
  const [sendNewCodeActivity, setSendNewCodeActivity] = React.useState(false);

  const { userid, email, destination, callback } = props.route.params;

  function checkCode() {
    setVerifyActivity(true);
    if (!inputCode) {
      setVerifyActivity(false);
      basicFlashMessage("warning", "Enter a code", 3000);
      return;
    }

    const user = new User();
    user.verifyEmail(userid, inputCode).then((data) => {
      setVerifyActivity(false);
      basicFlashMessage("success", data.status, 5000);
      setValidCode(true);
    }).catch(error => {
      setVerifyActivity(false);
      basicFlashMessage("danger", error.data.error, 5000);
    });
  }

  function sendNewCode() {
    setSendNewCodeActivity(true);

    const user = new User();
    user.sendCode(userid, email).then((data) => {
      setSendNewCodeActivity(false);
      basicFlashMessage("success", data.status, 3000);
    }).catch(error => {
      setSendNewCodeActivity(false);
      basicFlashMessage("danger", error.data.error, 5000);
    });
  }

  function handleEmailVerificationCallback() {
    if (callback) {
      callback();
    }
    props.navigation.navigate(destination, {userid: userid});
  }

  const ValidCode = () => (
    <View style={styles.emailVerification}>
      <Icon name={"checkcircleo"} type={"antdesign"} color={Colors.primary} size={50}/>
      <View style={[styles.titles, {alignItems: 'center'}]}>
        <Text style={styles.title}>Email verified!</Text>
        <Text style={styles.title2}>Your email has been successfully verified</Text>
      </View>
      <BasicBtn title="Next" 
        onPress={() => handleEmailVerificationCallback()}
      />
    </View>
  )

  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableOpacity style={styles.goBack} onPress={() => props.navigation.goBack()}>
          <Icon type={'antdesign'} name={'arrowleft'} color={Colors.secondary}/>
          <Text style={{color: Colors.secondary, fontSize: 20, marginLeft: '1%'}}>Back</Text>
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        {validCode
          ? <ValidCode />
          : <View style={{display: 'flex', flex: 1, justifyContent: 'flex-start', padding: '5%'}}>
              <View style={[styles.titles, {alignItems: 'center'}]}>
                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.title2}>
                  Enter the code we sent at your email to verify your email adress
                </Text>
              </View>
              <View style={styles.inputsContainer}>
                <BasicInput label={'Code'} type={'number-pad'} setter={setInputCode} />
                <BasicBtn title="Verify my email" onPress={checkCode} activity={verifyActivity}/>
                <BasicBtn title="Send a new code" onPress={sendNewCode} activity={sendNewCodeActivity} color={"white"}/>
              </View>
              <Text style={{
                  fontSize: 13, 
                  color: Colors.secondary, 
                  width: '100%', 
                  textAlign: 'center',
                  alignSelf: 'flex-end'
                }}
              >Did not receive the email? Check your spam filter</Text>
            </View>
        }
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
    justifyContent: 'center'
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
  emailVerification: {
    display: 'flex', 
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%',
    marginBottom: '30%'
  }
});