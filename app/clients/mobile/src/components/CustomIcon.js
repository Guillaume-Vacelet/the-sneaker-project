import React from 'react';
import { Icon } from "react-native-elements";

export default function CustomIcon(props) {
  return(
    <Icon 
      type={props.type}
      name={props.name}
      size={props.size}
    />
  );
}