import React from 'react';

const ScanStepsContext = React.createContext({
  currentStep: 0,
  stepCount: 3,
  stepsTitle: ['ModelSelection', 'Scanning', 'Results'],
  stepsSubtitle: [
    {subtitle1: 'Select', subtitle2: 'you sneaker model'},
    {subtitle1: 'Scan', subtitle2: 'you sneakers'},
    {subtitle1: 'Get', subtitle2: 'your results'},
  ],
  setCurrentStep: () => {}
});

export default ScanStepsContext;