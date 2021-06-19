//React
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Redux
import { useDispatch } from "react-redux";
import { userSignOut } from "../../redux/actions/userActions";
//Components
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';
import BasicBtn from '../../components/BasicBtn';
import basicFlashMessage from '../../core/utils/basicFlashMessage';


export default function SettingsScreen(props) {
  const [notifications, setNotifications] = React.useState(false);
  const [darkTheme, setDarkTheme] = React.useState(true);
  const dispatch = useDispatch();

  function handleSignOut() {
    basicFlashMessage("success", "Successfully logged out", 3000);
    dispatch(userSignOut());
    // AsyncStorage.removeItem();
    // navigation.navigate('AuthStackScreen', { screen: 'SignIn' });
  };

  const settings = [
    {
      title: 'Notifications',
      icon: 'bell',
      canToggle: true,
      toggleValue: notifications,
      toggleSetter: setNotifications
    },
    {
      title: 'Dark theme',
      icon: 'moon-o',
      canToggle: true,
      toggleValue: darkTheme,
      toggleSetter: setDarkTheme
    },
    {
      title: 'Language',
      icon: 'language',
    },
    {
      title: 'Help',
      icon: 'question-circle-o',
      goTo: 'Help'
    },
    {
      title: 'About us',
      icon: 'info-circle',
      goTo: 'AboutUs'
    },
  ];

  return(
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <GoBackArrow left={true} goBack={props.navigation.goBack} />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingsList}>
          {settings.map((setting, i) => (
            <ListItem key={i} bottomDivider 
              containerStyle={styles.setting}
              chevron={{ color: 'red' }}
              onPress={setting.goTo 
                ? () => props.navigation.navigate(setting.goTo) 
                : null
              }
            >
              <Icon name={setting.icon} type='font-awesome' color={Colors.secondary} />
              <ListItem.Content>
                <ListItem.Title style={styles.settingTitle}>{setting.title}</ListItem.Title>
              </ListItem.Content>
              {setting.toggleSetter
                ? <Icon onPress={() => {setting.toggleSetter(!setting.toggleValue)}}
                    type={'font-awesome'} 
                    name={setting.toggleValue ? 'toggle-on' : 'toggle-off'}
                    size={30} 
                    color={Colors.secondary} 
                  />
                : <ListItem.Chevron />
              }
            </ListItem>
          ))}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <BasicBtn title={'Sign-out'} onPress={handleSignOut} color={'#CD5C5C'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.background
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
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.secondary,
    margin: '5%'
  },
  settingsList: {
    flex: 5,
    width: '100%',
  },
  setting: {
    backgroundColor: Colors.background,
    padding: '5%'
  },
  settingTitle: {
    color: "lightgray"
  },
});