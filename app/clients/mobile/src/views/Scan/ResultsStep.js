import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import GoToStepButton from './GoToStepButton';
import { MaterialIndicator } from 'react-native-indicators';
import { Icon } from 'react-native-elements';
import ProductsContext from '../../core/contexts/ProductsContext';

export default function ResultsStep(props) {
  const [activity, setActivity] = useState(true);
  const [legit, setLegit] = useState(false);
  const { selectedModel } = React.useContext(ProductsContext);

  setTimeout(() => setActivity(false), 5000);

  console.log(selectedModel)

  const ResultsLoader = () => (
    <View>
      <Text style={{fontSize: 25, color: Colors.primary}}>Waiting for AI results...</Text>
      <MaterialIndicator color={Colors.primary} animationDuration={5000} size={100} />
    </View>
  )

  const Results = () => (
    <View style={styles.resultView}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Icon 
            name="checkmark-circle-outline" 
            type="ionicon" 
            size={50} 
            color={legit ? Colors.primary : '#CD5C5C'}
            style={styles.profileIcon}
            onPress={() => props.navigation.navigate("Profile")}
          />
          {legit
            ? <Text style={styles.resultPositiveTitle1}>Authentic!</Text>
            : <Text style={styles.resultNegativeTitle1}>Fake!</Text>
          }
        </View>
        <Text style={styles.resultTitle2}>Your pair of {selectedModel.model}</Text>
        {legit
          ? <Text style={styles.resultTitle2}>has been approved by our AI.</Text>
          : <Text style={styles.resultTitle2}>has not been approved by our AI.</Text>
        }
      </View>
      <Image
        style={styles.sneakerImg}
        source={{uri: selectedModel.image}}
      />
    </View>
  )

  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        {activity
          ? <ResultsLoader />
          : <Results />
        }
      </View>
      <View style={styles.footerContainer}>
        <GoToStepButton goBack={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
    height: '70%',
    width: '100%',
    backgroundColor: Colors.background
  },
  bodyContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  resultView: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  resultPositiveTitle1: {
    fontSize: 30, 
    fontWeight: '600',
    color: Colors.primary, 
  },
  resultNegativeTitle1: {
    fontSize: 30, 
    fontWeight: '600',
    color: '#CD5C5C', 
  },
  resultTitle2: {
    fontSize: 22, 
    color: Colors.secondary, 
  },
  sneakerImg: {
    width: '70%', 
    height: '35%',
    zIndex: 0,
    margin: 20,
  },
});
