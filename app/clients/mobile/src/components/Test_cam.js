import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';
import BasicBtn from './BasicBtn';
import GoBackArrow from './GoBackArrow';


//Faire la navigation retour a mettre dans la croix avec un retour ?
// Supprimer le flip et la croix ?

//Comment faire avec le save picture

export default function Test_cam() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  

  const takePicture = async () => {
    if (!camera) {
      return
    }
    const photo = await camera.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
    setphotoUri(photo.uri)
  }

  const CameraPreview = ({photo})=> {

    alert(photo.uri);

    return (
      <View
        style={{
          backgroundColor: 'transparent',
          //flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        >
          <View style={styles.button}>
            <BasicBtn title={'Retake'} onPress={__retakePicture} />  
            <BasicBtn title={'Save'} onPress={__savePhoto} />  
          </View>  
        </ImageBackground>
      </View>
    )
  }

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    takePicture()
  }

  const __savePhoto = (photo) => {
    alert(typeof(photo));
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


  let camera = Camera

  
  return (
    
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
          ) : (
      <Camera type={type} style={styles.camera} 
      ref={(r) => {
        camera = r
      }}
      >
        <View >
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
                <Text style={{marginLeft:30, marginTop:40}} > <Icon type={"entypo"} name={"cycle"} size={30} color={'white'} /> </Text>
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
          )}
    </View>
  );
}

const styles = StyleSheet.create({
     camera:{
        height:'100%',
     },

     button:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      height:'180%',
     },
   })

   