import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { ListItem, Icon, Button } from 'react-native-elements';
import RoundUserAvatarWithScore from '../../components/RoundUserAvatarWithScore';
import { signOutUser } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';


export default function SettingsScreen(props) {
  const [notifications, setNotifications] = React.useState(false);
  const [darkTheme, setDarkTheme] = React.useState(true);

  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOutUser());
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
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.avatarContainer}>
          <RoundUserAvatarWithScore />
        </View>
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
              <Icon name={setting.icon} type='font-awesome' color={"lightgray"} />
              <ListItem.Content>
                <ListItem.Title style={styles.settingTitle}>{setting.title}</ListItem.Title>
              </ListItem.Content>
              {setting.toggleSetter
                ? <Icon onPress={() => {setting.toggleSetter(!setting.toggleValue)}}
                    type={'font-awesome'} 
                    name={setting.toggleValue ? 'toggle-on' : 'toggle-off'}
                    size={30} 
                    color={'lightgray'} 
                  />
                : <ListItem.Chevron />
              }
            </ListItem>
          ))}
        </View>
        <View style={styles.signOutContainer}>
          <Button 
            raised 
            title={"Logout"} 
            titleStyle={{color: Colors.background}}
            buttonStyle={{backgroundColor: '#CD5C5C'}}
            icon={<Icon 
              name="logout" 
              type={"antdesign"} 
              color={Colors.background}
              style={{marginRight: '10%'}}
            />}
            onPress={handleSignOut}
          />
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  title: {
    flex: 2,
    fontSize: 30,
    fontWeight: '600',
    color: Colors.primary,
  },
  goBackContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  avatarContainer: {
    flex: 4,
  },
  settingsList: {
    flex: 5,
    width: '100%',
  },
  setting: {
    backgroundColor: Colors.background
  },
  settingTitle: {
    color: "lightgray"
  },
  signOutContainer: {
    flex: 2,
    justifyContent: 'center',
  },
});

// const styles = StyleSheet.create({
// Head:{
//   width: 150,
//   marginLeft: 15,
//   marginTop:45,
// },

// Head2:{
// flexDirection:'row',
// justifyContent: 'center'
// },

// buttons_container:{
// marginTop:25,
// flexDirection: 'row',
// justifyContent:'center',
// },

// button1:{
// backgroundColor:'black',
// color:'white',
// padding: 8,
// textAlign:'center',
// fontSize:17,
// },

// button_view1:{
// marginRight:20,
// width:120,
// },

// button_view2:{
//   // width:120,
//   },

// button2:{
//   backgroundColor:'black',
//   color:'white',
//   padding: 8,
//   fontSize:17,
// },

// no:{
//   flexDirection:'row',
//   justifyContent:'space-between',
//   marginBottom:20,
//   paddingHorizontal:15,
//   alignItems:'center',
//   },

//   icon_earth:{
//   marginLeft:1,
//   },

//   icon_arrow:{
//     marginRight:8,
//   },

//   icon_arrow2:{
//     marginRight:8,
//     marginTop:15,
//   },

//   line:{
//       borderBottomColor: 'black',
//       borderBottomWidth: 3,
//       marginTop:5,
//       marginHorizontal:25,
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "600",
//     padding: 20,
//     color: "black",
//     paddingVertical:35,
//   }, 
// });

/*
Faire un mouvement de hoover sur les deux bouton en haut avec du vert
*/