import {StatusBar} from 'expo-status-bar'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import { Icon } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
import {Camera} from 'expo-camera'
/* 
Faire run bouton pour fermer l'appareil, redemander a reprendre la photo & afficher la photo prise

*/

export default function ButtonScannerIcon() {
  let camera = Camera;
  const [startCamera,setStartCamera] = React.useState(false);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
   
  const handleStartCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  } 

  const takePicture = async () => {
    if (!camera) {
      return;
    }
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  }
  
  return (
    <View style={styles.container}>
      {startCamera 
        ? (<View style={styles.container}>
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
        </View>)
      : (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={handleStartCamera}
            style={{
              width: 80,
              borderRadius: 50,
              backgroundColor: '#73eca6',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 80
            }}
          >
              <Icon type={"antdesign"} name={"scan1"} size={40} color={'white'} />
          </TouchableOpacity>
       </View>)
      }
    </View> 
  )
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    width:500,
  }
})