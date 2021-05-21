import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => props.navigation.navigate("Scan")}>
          <Icon 
            name="user-circle" 
            type="font-awesome" 
            size={35} 
            color={"white"}
            style={styles.profileIcon}
            onPress={() => props.navigation.navigate("Profile")}
          />
          {/* <Text style={styles.profileIconLabel}>My Sneakers</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={() => props.navigation.navigate("Scan")}>
          <Icon 
            name="cog" 
            type="font-awesome" 
            size={35} 
            color={"white"}
            style={styles.profileIcon}
            onPress={() => props.navigation.navigate("Settings")}
          />
          {/* <Text style={styles.profileIconLabel}>Settings</Text> */}
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
            <Text style={styles.title2}>your sneakers</Text>
          </View>
        </View>
        <View style={styles.tipContainer}>
          <Icon 
            name="camera" 
            type="font-awesome-5" 
            size={20} 
            color={'white'}
            style={styles.profileIcon}
            onPress={() => props.navigation.navigate("Profile")}
          />
          <Text style={styles.tip}>Tap to scan</Text>
        </View>
        <View style={styles.scanButtonContainer}>
          <TouchableOpacity style={styles.scanButton} onPress={() => props.navigation.navigate("Scan")}>
            <Icon name="scan-sharp" type="ionicon" size={120} color={"white"} />
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
  },
  bodyContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '10%',
  },
  titleIconContainer: {
    justifyContent: 'center',
    marginHorizontal: '2%',
  },
  titleTextContainer: {
    justifyContent: 'center',
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
    color: 'white',
    marginHorizontal: '2%',
    marginVertical: 0,
    paddingVertical: 0
  },
  tipContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  tip: {
    fontSize: 23,
    fontWeight: '600',
    color: 'white',
    marginHorizontal: '2%',
  },
  scanButtonContainer: {
    flex: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scanButton: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    borderRadius: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    elevation: 10,
    shadowColor: "white",
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  headerButton: {
    flexDirection: 'column',
    margin: '5%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    paddingBottom: '2%',
  },
  profileIconLabel: {
    color: 'white',
    fontSize: 15
  }
});