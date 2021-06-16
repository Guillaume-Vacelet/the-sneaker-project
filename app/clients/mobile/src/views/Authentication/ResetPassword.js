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

export default function ResetPassword(props) {
  const [activity, setActivity] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState('');

  const { email } = props.route.params;

  function handleResetPassword() {
    setActivity(true);

    if (!newPassword || !newPasswordConfirmation) {
      setActivity(false);
      basicFlashMessage("warning", "Some fields are missing", 3000);
      return;
    }
    if (newPassword !== newPasswordConfirmation) {
      setActivity(false);
      basicFlashMessage("warning", "Confirm password correctly", 3000);
      return;
    }
    if (newPassword.length < 6) {
      setActivity(false);
      basicFlashMessage("warning", "Password must be atleast 6 characters long", 3000);
      return;
    }

    const auth = new Authentication();
    auth.resetPassword(email, newPassword).then((data) => {
      setActivity(false);
      basicFlashMessage("success", data.status, 5000);
      props.navigation.navigate('SignIn')
    }).catch((error) => {
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