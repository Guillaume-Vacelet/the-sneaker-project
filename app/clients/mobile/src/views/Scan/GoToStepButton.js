import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import ScanStepsContext from '../../core/contexts/ScanStepsContext';

export default function GoToStepButton(props) {
  const navigation = useNavigation();
  let { currentStep, stepCount, stepsTitle, setCurrentStep } = React.useContext(ScanStepsContext);

  function goToStep() {
    if (props.goBack) {
      if (currentStep == 0) {
        return;
      }
      setCurrentStep(currentStep - 1);
      navigation.navigate(stepsTitle[currentStep - 1]);
    } else {
      if (currentStep - 1 == stepCount) {
        return;
      }
      setCurrentStep(currentStep + 1);
      navigation.navigate(stepsTitle[currentStep + 1]);
    }
  }

  return (
    <TouchableOpacity onPress={() => goToStep()}
      style={styles.nextStepButton}
    >
      <Icon 
        name={props.goBack ? "arrow-left" : "arrow-right"}
        type={"font-awesome"}
        color={Colors.background}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nextStepButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  }
});