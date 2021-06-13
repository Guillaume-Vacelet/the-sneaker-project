import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { Input, Icon } from "react-native-elements";
import BasicBtn from '../../components/BasicBtn';
import {showMessage} from "react-native-flash-message";
import Colors from "../../../constants/Colors"
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword(props) {
  const [email, setEmail] = React.useState('');
  const [activity, setActivity] = React.useState(false);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableOpacity style={styles.goBack} onPress={() => props.navigation.goBack()}>
        <Icon 
          type={'antdesign'}
          name={'arrowleft'}
          color={Colors.primary}
        />
        <Text style={{color: Colors.primary, fontSize: 20, marginLeft: '1%'}}>Back</Text>
      </TouchableOpacity>
      {/* <View style={styles.bodyContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Forgot password</Text>
          <Text style={styles.title2}>Enter the email adress associated with your account and we'll send instructions to reset your password.</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            label='Email adress'
            labelStyle={{color: 'gray', fontWeight: '500'}}
            // placeholder='Email'
            onChangeText={(value) => setEmail(value)}
            inputContainerStyle={styles.authInput}
            />
          <BasicBtn 
            title="Get a new password"
            activity={activity}
            />
        </View>
      </View> */}
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
    backgroundColor: 'red'
  },
  goBack: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  bodyContainer: {
    width: '100%',
    display: 'flex',
    flex: 5,
    padding: '5%',
    backgroundColor: 'pink'
  },
  titles: {
    marginBottom: '5%',
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    color: Colors.primary,
    alignSelf: 'flex-start'
  },
  title2: {
    fontSize: 18,
    color: Colors.primary,
    alignSelf: 'flex-start'
  },
  inputsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    paddingTop: 30,
    marginBottom: 30
  },
  authInput: {
    width: 300,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    paddingLeft: 10
  },
  forgotPassword: {
    marginTop: '5%',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  
});