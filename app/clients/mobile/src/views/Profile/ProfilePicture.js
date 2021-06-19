import React from 'react';
import { Image } from 'react-native';

export default function ProfilePicture(props) {
  return (
    <Image 
      source={{uri: Image.resolveAssetSource(props.source).uri}}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 35,
      }}
    />
  )
}