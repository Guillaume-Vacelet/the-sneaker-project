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

export default function ResetPassword(props) {
  const [activity, setActivity] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState('');

  const { email } = props.route.params;

  function handleResetPassword() {
    setActivity(true);

    if (!newPassword || !newPasswordConfirmation) {
      showMessage({message: "Some fields are missing", type: "warning", duration: 3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }
    if (newPassword !== newPasswordConfirmation) {
      showMessage({message: "Confirm password correctly.", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }
    if (newPassword.length < 6) {
      showMessage({message: "Password must be atleast 6 characters long.", type: "warning", duration:3000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
      setActivity(false);
      return;
    }

    const auth = new Authentication();
    auth.resetPassword(email, newPassword).then((data) => {
      console.log(data);
      setActivity(false);
      showMessage({message: data.status, backgroundColor: Colors.primary, duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
      });
      props.navigation.navigate('SignIn')
    }).catch((error) => {
      setActivity(false);
      showMessage({message: error.data.error, type:"danger", duration:5000,
        titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
      });
    });
  }

  const EmailSent = () => (
    <View style={styles.emailSent}>
      <View style={{
          flex: 10, 
          width: '100%',
          alignItems: 'center', 
          paddingTop: '30%',
        }}
      >
        <Icon name={"checkcircleo"} type={"antdesign"} color={Colors.primary} size={50}/>
        <View style={[styles.titles, {alignItems: 'center'}]}>
          <Text style={styles.title}>Email sent</Text>
          <Text style={styles.title2}>Check your email and open the link</Text>
          <Text style={styles.title2}>we sent to continue.</Text>
        </View>
        <BasicBtn title="Go back" onPress={() => props.navigation.goBack()}/>
      </View>
      <Text style={{
          flex: 1, 
          fontSize: 13, 
          color: Colors.secondary, 
          width: '100%', 
          textAlign: 'center',
          alignSelf: 'flex-end'
        }}
      >
        Did not receive the email? Check your spam filter.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableOpacity style={styles.goBack} onPress={() => props.navigation.goBack()}>
        <Icon type={'antdesign'} name={'arrowleft'} color={Colors.secondary}/>
        <Text style={{color: Colors.secondary, fontSize: 20, marginLeft: '1%'}}>Back</Text>
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <View style={{display: 'flex', flex: 1, justifyContent: 'flex-start', padding: '5%'}}>
          <View style={[styles.titles, {justifyContent: 'flex-start'}]}>
            <Text style={styles.title}>Reset password</Text>
            <Text style={styles.title2}>
              Enter a new password:
            </Text>
          </View>
          <View style={styles.inputsContainer}>
            <BasicInput label={'New password'} setter={setNewPassword} secured={true}/>
            <BasicInput label={'Confirm new password'} setter={setNewPasswordConfirmation} secured={true}/>
            <BasicBtn title="Update my password" onPress={handleResetPassword} activity={activity} />
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