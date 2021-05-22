import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import IdentificatonStep from './IdentificationStep';
import ScanStep from './ScanStep/ScanStep';
import ResultsStep from './ResultsStep';

export default function ScanScreen(props) {
  const [currentStep, setCurrentStep] = React.useState(1);
  const ScanStack = createStackNavigator();
  let steps = [
    { route: 'Identification', id: 1 },
    { route: 'Scanning', id: 2 },
    { route: 'Results', id: 3 },
  ]

  function getStep(stepId) {
    return true;
    // steps.forEach(step => {
    //   if (ScanStack.state.routeName == step.route) {
    //     return true;
    //   }
    // });
    return false
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={ getStep(1) ? styles.currentStep : styles.step}><Text>1</Text></View>
        <View style={ getStep(2) ? styles.currentStep : styles.step}><Text>2</Text></View>
        <View style={ getStep(3) ? styles.currentStep : styles.step}><Text>3</Text></View>
      </View>
      <ScanStack.Navigator initialRouteName="Identification" >
        <ScanStack.Screen name="Identification" component={IdentificatonStep} options={{
            headerShown: false
          }}
        />
        <ScanStack.Screen name="Scanning" component={ScanStep} options={{
            headerShown: false
          }}
        />
        <ScanStack.Screen name="Results" component={ResultsStep} options={{
            headerShown: false
          }}
        />
      </ScanStack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: '#161a1d'
  },
  headerContainer: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
  },
  currentStep: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  step: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});