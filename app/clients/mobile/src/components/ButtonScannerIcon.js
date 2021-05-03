import {StatusBar} from 'expo-status-bar'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import { Icon } from 'react-native-elements'
import {Camera} from 'expo-camera'
/* 
Faire run bouton pour fermer l'appareil, redemander a reprendre la photo & afficher la photo prise
Mettre la camera en full screen
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
        ? (<Camera style={{flex:1}} ref={(r) => {camera = r}}>
            <View style={{flex: 1, width: '100%', backgroundColor: 'transparent', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.text}>
                  <Icon type={"entypo"} name={"cycle"} size={24} color={'white'} />
                </Text>
              </TouchableOpacity>
            <View style={{
              position: 'absolute', 
              bottom: 0, 
              flexDirection: 'row', 
              flex: 1, 
              width: '100%', 
              padding: 20, 
              justifyContent: 'space-between'
              }}
            >
              <View style={{alignSelf: 'center', flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={takePicture}
                  style={{
                    width: 50,
                    height: 50,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                  }}
                />
              </View>
            </View>
          </View>
        </Camera>)
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
            <Text>
              <Icon type={"antdesign"} name={"scan1"} size={40} color={'white'} />
            </Text>
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