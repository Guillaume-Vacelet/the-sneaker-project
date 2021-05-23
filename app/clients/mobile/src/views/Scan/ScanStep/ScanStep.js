import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,} from 'react-native';
import Colors from '../../../../constants/Colors';
import GoToStepButton from '../GoToStepButton';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
import ScanGrid from './ScanGrid';
import ScanPrompt from './ScanPrompt';
import Test_cam from '../../../components/Test_cam';
import CameraScreen from './CameraScreen';

export default function ScanStep(props) {
  const ScanItemStack = createStackNavigator();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        {/* <ScanItemStackNavigator /> */}
        <ScanItemStack.Navigator initialRouteName={'ScanGrid'}
          // mode={'modal'}
          screenOptions={{
            headerShown: false
          }}
        >
          <ScanItemStack.Screen name="ScanGrid" component={ScanGrid} />
          <ScanItemStack.Screen name="ScanPrompt" component={ScanPrompt} />
          <ScanItemStack.Screen name="Camera" component={CameraScreen} />
        </ScanItemStack.Navigator>
      </View>
      {/* <View style={styles.footerContainer}>
        <GoToStepButton goBack={true} />
        <GoToStepButton goBack={false} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background
  },
  bodyContainer: {
    flex: 9,
    width: '100%',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  // headerContainer:{
  //   flex:0.1
  // },
  // rootContainer: {
  //   height: '100%',
  //   backgroundColor: Colors.background
  // },
  
  // title1: {
  //   fontSize: 30,
  //   fontWeight: '600',
  //   marginBottom: '10%',
  //   color: Colors.primary
  // }
});