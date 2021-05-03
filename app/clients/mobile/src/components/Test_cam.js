import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);

  const takePicture = async () => {
    if (!camera) {
      return
    }
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }
  
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera type={type} style={styles.camera}>
        <View >
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
                <Text style={{marginLeft:30, marginTop:70}} > <Icon type={"entypo"} name={"cycle"} size={30} color={'white'} /> </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {hasPermission === false}} >
          <Text style={{marginLeft:23, marginTop:10}}> <Entypo name="cross" size={45} color="white" /></Text>
          </TouchableOpacity>
                <TouchableOpacity onPress={takePicture}
                    style={{
                      width: 60,
                      height: 60,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: '#fff',
                      alignSelf: 'center',
                      alignItems: 'center',
                      marginTop:'120%',

                    }}
                  />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
     camera:{
        height:'100%',
     }
   })