//React
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
//Redux
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { userUpdate } from "../../redux/actions/userActions";
//Assets
import profilePicture from '../../../assets/profile_picture.jpg';
//Components
import Colors from '../../../constants/Colors';
import BasicInput from '../../components/BasicInput';
import BasicBtn from '../../components/BasicBtn';
import basicFlashMessage from '../../core/utils/basicFlashMessage';
import ProfilePicture from './ProfilePicture';
import User from '../../core/api/User';

export default function EditProfileScreen(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const [pictureEdit, setPictureEdit] = React.useState(Image.resolveAssetSource(profilePicture).uri);
  const [usernameEdit, setUsernameEdit] = React.useState(user.username);
  const [emailEdit, setEmailEdit] = React.useState(user.email);
  const [passwordEdit, setPasswordEdit] = React.useState('');
  const [activity, setActivity] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPictureEdit(result.uri);
    }
  };

  function handleUpdateProfile() {
    setActivity(true);

    if (!usernameEdit) {
      basicFlashMessage("warning", "Username is empty", 3000);
      setActivity(false);
      return;
    }
    if (!emailEdit) {
      basicFlashMessage("warning", "Email is empty", 3000);
      setActivity(false);
    return;
    }
    let newUsername = '';
    let newEmail = emailEdit;
    if (usernameEdit !== user.username) {
      newUsername = usernameEdit;
    }

    const userApi = new User();
    // if (emailEdit !== user.email) {
    //   newEmail = emailEdit;
    //   userApi.sendCode(newEmail).then(data => {
    //     setActivity(false);
    //     basicFlashMessage("success", "A verification code has been sent to your new email adress", 5000);
    //     props.navigation.navigate(
    //       'EmailVerification', 
    //       { userid: data.userid, email: newEmail, destination: 'Profile'}
    //     )
    //   }).catch(error => {
    //     setActivity(false);
    //     basicFlashMessage("danger", error.data.error, 5000);
    //   });
    // } else {
      userApi.update(user.userid, newUsername, '').then(data => {
        console.log(data);
        setActivity(false);
        dispatch(userUpdate(newUsername, newEmail));
        basicFlashMessage("success", data.status, 3000);
        props.navigation.goBack();
      }).catch(error => {
        console.log(error);
        setActivity(false);
        basicFlashMessage("danger", error.data.error, 5000);
      });
    // }

  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.actionsContainer}>
          <BasicBtn title={"Cancel"} 
            onPress={props.navigation.goBack} 
            width={100}
            color={Colors.secondary}
          />
          <BasicBtn title={"Save"} 
            onPress={handleUpdateProfile} 
            activity={activity}
            width={100}
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.profilePictureContainer}>
          <ProfilePicture source={{uri: pictureEdit}} />
          <View style={styles.profilePictureOverlay}></View>
          <Text style={styles.profilePictureEditLabel}>Edit</Text>
          <View style={styles.editIconContainer}>
            <Icon
              type={'material-community'}
              name={'pencil'}
              size={20}
              color={Colors.background}
            />
          </View>
        </TouchableOpacity>
        <BasicInput label={"Username"} value={usernameEdit} setter={setUsernameEdit} 
        />
        <BasicInput label={"Email"} 
          value={emailEdit} setter={setEmailEdit} 
          type={'email-address'}
        />
        <BasicInput label={"Password"} value={passwordEdit} setter={setPasswordEdit} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.secondary
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 1,
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  profilePictureContainer: {
    width: 170,
    height: 170,
    margin: '10%'
  },
  profilePictureEditLabel: {
    position:'absolute', 
    top: '40%',
    left: '40%',
    fontSize: 25,
    color: "white"
  },
  profilePictureOverlay: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.4
  },
  editIconContainer: {
    backgroundColor: Colors.primary, 
    width: '28%', 
    height: '28%', 
    position: 'absolute', 
    top: '75%', 
    left: '80%', 
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});