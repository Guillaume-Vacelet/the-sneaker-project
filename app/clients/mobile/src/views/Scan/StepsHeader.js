import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import { View, Text, StyleSheet} from 'react-native';
import ScanStepsContext from '../../core/contexts/ScanStepsContext';
import Colors from '../../../constants/Colors';

export default function StepsHeader() {
  const { currentStep, stepCount, stepsSubtitle } = React.useContext(ScanStepsContext);

  function getSubtitlePosition() {
    if (currentStep == 0) {
      return 'flex-start';
    } else if (currentStep == 1) {
      return 'center';
    } else {
      return 'flex-end';
    }
  }

  return (
    <View>
      <StepIndicator
        currentPosition={currentStep}
        stepCount={stepCount}
        customStyles={{
          //current
          stepStrokeCurrentColor: Colors.primary,
          stepIndicatorCurrentColor: Colors.background,
          stepIndicatorLabelCurrentColor: Colors.primary,
          //finished
          stepIndicatorFinishedColor: Colors.primary,
          separatorFinishedColor: Colors.primary,
          stepIndicatorLabelFinishedColor: 'black',
          //unfinished
          stepIndicatorUnFinishedColor: Colors.secondary,
          separatorUnFinishedColor: Colors.secondary,
          stepIndicatorLabelUnFinishedColor: 'black'
        }}
      />
      <View style={{
        width: '100%',
        alignItems: getSubtitlePosition(),
        paddingLeft: currentStep == 0 ? '5%' : 0,
        paddingRight: currentStep == 2 ? '10%' : 0,
        justifyContent: 'center',
      }}>
        <Text style={styles.title1}>{stepsSubtitle[currentStep].subtitle1}</Text>
        <Text style={styles.title2}>{stepsSubtitle[currentStep].subtitle2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titles: {
    width: '100%',
    alignItems:'flex-start',
    paddingLeft: '5%',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.primary
  },
  title2: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.secondary
  },
});