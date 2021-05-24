import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';
import ScanPicturesContext from '../../../core/contexts/ScanPicturesContext';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
//components
import ScanGrid from './ScanGrid';
import ScanPrompt from './ScanPrompt';
import CameraScreen from './CameraScreen';

export default function ScanStep() {
  const ScanItemStack = createStackNavigator();
  const [currentScanPart, setCurrentScanPart] = React.useState('');
  const [savedPictures, setSavedPicture] = React.useState({
    'Sole': { uri: '' },
    'Right-side': { uri: '' },
    'Left-side': { uri: '' },
    'Front/Up': { uri: '' },
    'Back-side': { uri: '' },
    'Box': { uri: '' },
  });
  const contextValue = { 
    currentScanPart,
    setCurrentScanPart,
    savedPictures,
    setSavedPicture
  };

  return (
    <ScanPicturesContext.Provider value={contextValue}>
      <View style={styles.rootContainer}>
        <View style={styles.bodyContainer}>
          <ScanItemStack.Navigator initialRouteName={'ScanGrid'}
            screenOptions={{
              headerShown: false
            }}
          >
            <ScanItemStack.Screen name="ScanGrid" component={ScanGrid} />
            <ScanItemStack.Screen name="ScanPrompt" component={ScanPrompt} />
            <ScanItemStack.Screen name="Camera" component={CameraScreen} />
          </ScanItemStack.Navigator>
        </View>
      </View>
    </ScanPicturesContext.Provider>
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
  }
});