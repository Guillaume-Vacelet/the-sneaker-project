import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../../constants/Colors';
//Contexts
import ScanStepsContext from '../../core/contexts/ScanStepsContext';
import ProductsContext from '../../core/contexts/ProductsContext';
//Steps
import StepsHeader from './StepsHeader';
import ModelSelectionStep from './ModelSelectionStep';
import ScanStep from './ScanStep/ScanStep';
import ResultsStep from './ResultsStep';
//Assets
import airforce1 from '../../../assets/airforce1.png';
import airforce1_aurora from '../../../assets/airforce1_aurora.png';
import nmdr1 from '../../../assets/nmdr1.png';
import dunklow_bw from '../../../assets/dunklow_blackwhite.png';
import b23_dior from '../../../assets/b23_dior.png';
import AirJordanLow_RoyalToe from '../../../assets/AirJordanLow_RoyalToe.png';

export default function ScanScreen(props) {
  const ScanStack = createStackNavigator();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedModel, setSelectedModel] = React.useState({});
  const steps = { 
    currentStep, 
    stepCount: 3, 
    stepsTitle: ['ModelSelection', 'Scanning', 'Results'],
    stepsSubtitle: [
      {subtitle1: 'Select', subtitle2: 'Search your sneaker model'},
      {subtitle1: 'Scan', subtitle2: 'Take photos of your sneakers from different angles as described below'},
      {subtitle1: 'Result', subtitle2: ""},
    ],
    setCurrentStep
  };
  const products = {
    products: [
      {id: '0', model: 'NMDR1', brand: 'Adidas', color: 'black', image: Image.resolveAssetSource(nmdr1).uri, checked: true},
      {id: '1', model: 'Air Force 1', brand: 'Nike', color: 'white', image: Image.resolveAssetSource(airforce1).uri, checked: true},
      {id: '2', model: 'Air Force 1 Shadow Aurora', brand: 'Nike', color: 'white', image: Image.resolveAssetSource(airforce1_aurora).uri, checked: true},
      {id: '3', model: 'Dunk Low', brand: 'Nike', color: 'black', image: Image.resolveAssetSource(dunklow_bw).uri, checked: false},
      {id: '4', model: 'B23 Dior', brand: 'Nike', color: 'black', image: Image.resolveAssetSource(b23_dior).uri, checked: false},
      {id: '5', model: 'Air Jordan Low Royal Toe', brand: 'Nike', color: 'black', image: Image.resolveAssetSource(AirJordanLow_RoyalToe).uri, checked: false},
    ],
    selectedModel: selectedModel,
    setSelectedModel: setSelectedModel
  }

  return (
    <ScanStepsContext.Provider value={steps}>
      <ProductsContext.Provider value={products}>
        <SafeAreaView style={styles.rootContainer}>
          <View style={styles.headerContainer}>
            <View style={{alignItems: 'flex-start'}}>
              <Icon 
                name={'home'}
                type="font-awesome" 
                size={30} 
                color={props.dark ? Colors.background : Colors.secondary}
                onPress={() => props.navigation.goBack()}
                containerStyle={{marginLeft: '5%', marginVertical: '2%'}}
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
      </ProductsContext.Provider>
    </ScanStepsContext.Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background
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