import {StatusBar} from 'expo-status-bar'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import {Camera} from 'expo-camera'
/* 
Faire run bouton pour fermer l'appareil, redemander a reprendre la photo & afficher la photo prise
Mettre la camera en full screen
*/

export default function ButtonScanner() {
  let camera = Camera;
  const [startCamera, setStartCamera] = React.useState(false);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
   
  const handleStartCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync();

    if(status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  }

  const takePicture = async () => {
    if (!camera) {
      return
    }
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }
  
  return (
    <View style={styles.container}>
      {startCamera 
        ? (<Camera style={{flex:1, height:'100%'}} ref={(r) => {camera = r}}>
            <View>
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
          </Camera>)
        : (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={handleStartCamera}
              title='Scanner'
              titleStyle={{ fontSize: 25, marginRight: '10%' }}
              buttonStyle={{ backgroundColor: '#73eca6', borderRadius: 50, height: 50}}
              containerStyle={{ marginRight: '10%' }}
              icon={() => <Icon type={"antdesign"} name={"scan1"} size={30} color={'white'} style={{marginHorizontal: '10%'}} />}
            />
          </View>)
      }
    </View> 
  )
}

const styles = StyleSheet.create({
 container: {
   flex:1,
   
  }
})