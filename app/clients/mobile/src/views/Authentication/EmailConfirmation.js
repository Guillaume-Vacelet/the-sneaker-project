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

export default function EmailConfirmation(props) {
  const [inputCode, setInputCode] = React.useState('');
  const [validCode, setValidCode] = React.useState(false);
  const [activity, setActivity] = React.useState(false);
  const { email } = props.route.params;

  function checkCode() {
    setActivity(true);
    if (!inputCode) {
      showMessage({message: "Enter a code", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }

    const auth = new Authentication();
    auth.verifyEmail(email, inputCode).then((data) => {
      console.log(data);
      setValidCode(true);
      setActivity(false);
    }).catch(error => {
      showMessage({message: error, type: "danger", duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
    });
  }

  function sendNewCode() {

  }

  const ValidCode = () => (
    <View style={styles.emailConfirmation}>
      <Icon name={"checkcircleo"} type={"antdesign"} color={Colors.primary} size={50}/>
      <View style={[styles.titles, {alignItems: 'center'}]}>
        <Text style={styles.title}>Email verified!</Text>
        <Text style={styles.title2}>Your account has been successfully created</Text>
      </View>
      <BasicBtn title="Next" onPress={() => props.navigation.navigate('SignIn')}/>
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
              <View style={[styles.titles, {justifyContent: 'flex-start'}]}>
                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.title2}>
                  Enter the code we sent you at your email adress to verify your email adress
                </Text>
              </View>
              <View style={styles.inputsContainer}>
                <BasicInput label={'Code'} type={'number-pad'} setter={setInputCode} />
                <BasicBtn title="Verify my email" onPress={checkCode} activity={activity}/>
                <Text style={styles.sendNewCode} onPress={sendNewCode}>
                  Send a new code
                </Text>
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
  emailConfirmation: {
    display: 'flex', 
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%',
    marginBottom: '30%'
  },
  sendNewCode: {
    marginTop: '5%',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});