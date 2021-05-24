import React from 'react';

const ScanPicturesContext = React.createContext({
  currentScanPart: '',
  setCurrentScanPart: () => {},
  savedPictures: {
    'Sole': { uri: '' },
    'Right-side': { uri: '' },
    'Left-side': { uri: '' },
    'Front/Up': { uri: '' },
    'Back-side': { uri: '' },
    'Box': { uri: '' },
  },
  setSavedPicture: () => {}
});

export default ScanPicturesContext;