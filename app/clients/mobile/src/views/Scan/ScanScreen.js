import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../../constants/Colors';
import ScanStepsContext from '../../core/contexts/ScanStepsContext';
import StepsHeader from './StepsHeader';
import ModelSelectionStep from './ModelSelectionStep';
import ScanStep from './ScanStep/ScanStep';
import ResultsStep from './ResultsStep';

export default function ScanScreen(props) {
  const ScanStack = createStackNavigator();
  const [currentStep, setCurrentStep] = React.useState(0);
  const value = { 
    currentStep, 
    stepCount: 3, 
    stepsTitle: ['ModelSelection', 'Scanning', 'Results'],
    stepsSubtitle: [
      {subtitle1: 'Select', subtitle2: 'you sneaker model'},
      {subtitle1: 'Scan', subtitle2: 'you sneakers'},
      {subtitle1: 'Get', subtitle2: 'your results'},
    ],
    setCurrentStep
  };

  return (
    <ScanStepsContext.Provider value={value}>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <View style={{alignItems: 'flex-end'}}>
            <Icon 
              name={'home'}
              type="font-awesome" 
              size={30} 
              color={props.dark ? Colors.background : Colors.secondary}
              onPress={() => props.navigation.goBack()}
              containerStyle={{margin: '2%'}}
            />
          </View>
          <StepsHeader />
        </View>
        <ScanStack.Navigator initialRouteName="ModelSelection" >
          <ScanStack.Screen name="ModelSelection" component={ModelSelectionStep} 
            options={{
              headerShown: false
            }}
          />
          <ScanStack.Screen name="Scanning" component={ScanStep} 
            options={{
              headerShown: false
            }}
          />
          <ScanStack.Screen name="Results" component={ResultsStep} 
            options={{
              headerShown: false
            }}
          />
        </ScanStack.Navigator>
      </SafeAreaView>
    </ScanStepsContext.Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: '#161a1d'
  },
  headerContainer: {
    width: '100%',
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
  },
  
});