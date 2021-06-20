//React
import React from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userSignIn } from '../../redux/actions/userActions';
//Components
import Colors from '../../../constants/Colors';
import User from '../../core/api/User';

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const theme = useSelector(state => state.theme);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => props.navigation.navigate("Scan")}>
          <Icon onPress={() => {
              const userAPI = new User();
              userAPI.getUserInformations(user.userid).then(data => {
                console.log(data);
                dispatch(userSignIn(data))
              }).catch(error => {
                console.log(error);
                console.log(error.data.error);
              })
              props.navigation.navigate("Profile");
            }}
            name="user-circle" 
            type="font-awesome" 
            size={35} 
            color={Colors.secondary}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={() => props.navigation.navigate("Scan")}>
          <Icon onPress={() => props.navigation.navigate("Settings")}
            name="cog" 
            type="font-awesome" 
            size={35} 
            color={Colors.secondary}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleIconContainer}>
            <Icon 
              name="checkmark-circle-outline" 
              type="ionicon" 
              // type="font-awesome-5" 
              size={75} 
              color={Colors.primary}
              style={styles.profileIcon}
              onPress={() => props.navigation.navigate("Profile")}
            />
          </View>
          <View style={styles.titleTextContainer}>
            <Text style={styles.title1}>Legit Check</Text>
            <Text style={styles.title2}>your sneakers!</Text>
          </View>
        </View>
        <View style={styles.tipContainer}>
          <Icon 
            name="camera" 
            type="font-awesome-5" 
            size={20} 
            color={Colors.secondary}
            style={styles.profileIcon}
            onPress={() => props.navigation.navigate("Profile")}
          />
          <Text style={styles.tip}>Tap to scan</Text>
        </View>
        <View style={styles.scanButtonContainer}>
          <TouchableOpacity style={styles.scanButton} onPress={() => props.navigation.navigate("Scan")}>
            <Icon name="scan-sharp" type="ionicon" size={120} color={Colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background,
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.background,
    padding: '5%',
  },
  bodyContainer: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    marginBottom: '10%',
  },
  titleIconContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleTextContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title1: {
    fontSize: 35,
    fontWeight: '600',
    color: Colors.primary,
    marginHorizontal: '2%',
    marginVertical: 0,
    paddingVertical: 0
  },
  title2: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.primary,
    marginHorizontal: '2%',
    marginVertical: 0,
    paddingVertical: 0
  },
  tipContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tip: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.secondary,
    marginHorizontal: '2%',
  },
  scanButtonContainer: {
    flex: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scanButton: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderRadius: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    elevation: 20,
    shadowColor: Colors.secondary,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  headerButton: {
    flexDirection: 'column',
    // backgroundColor: 'transparent',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});