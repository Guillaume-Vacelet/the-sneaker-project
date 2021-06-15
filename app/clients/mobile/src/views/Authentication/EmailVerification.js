//React
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import {showMessage} from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import BasicBtn from '../../components/BasicBtn';
import BasicInput from '../../components/BasicInput';
import Colors from "../../../constants/Colors"
import Authentication from '../../core/Authentication'

export default function EmailVerification(props) {
  const [inputCode, setInputCode] = React.useState('');
  const [validCode, setValidCode] = React.useState(false);
  const [verifyActivity, setVerifyActivity] = React.useState(false);
  const [sendNewCodeActivity, setSendNewCodeActivity] = React.useState(false);

  const { email, destination } = props.route.params;

  function checkCode() {
    setVerifyActivity(true);
    if (!inputCode) {
      showMessage({message: "Enter a code", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setVerifyActivity(false);
      return;
    }

    const auth = new Authentication();
    auth.verifyEmail(email, inputCode).then((data) => {
      showMessage({message: data.status, backgroundColor: Colors.primary, duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
      });
      setValidCode(true);
      setVerifyActivity(false);
    }).catch(error => {
      showMessage({message: error.data.error, type: "danger", duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setVerifyActivity(false);
    });
  }

  function sendNewCode() {
    setSendNewCodeActivity(true);

    const auth = new Authentication();
    auth.sendNewCode(email).then((data) => {
      setSendNewCodeActivity(false);
      showMessage({message: data.status, backgroundColor: Colors.primary, duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
    }).catch(error => {
      setSendNewCodeActivity(false);
      showMessage({message: error.data.error, type: "danger", duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
    });
  }

  const ValidCode = () => (
    <View style={styles.emailVerification}>
      <Icon name={"checkcircleo"} type={"antdesign"} color={Colors.primary} size={50}/>
      <View style={[styles.titles, {alignItems: 'center'}]}>
        <Text style={styles.title}>Email verified!</Text>
        <Text style={styles.title2}>Your email has been successfully verified</Text>
      </View>
      <BasicBtn title="Next" onPress={() => props.navigation.navigate(destination, {email: email})}/>
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