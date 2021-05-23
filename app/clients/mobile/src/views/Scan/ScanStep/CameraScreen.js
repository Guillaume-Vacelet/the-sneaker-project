import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, Image} from 'react-native';
import { Icon, Overlay } from 'react-native-elements'
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BasicBtn from '../../../components/BasicBtn';

export default function CameraScreen() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigation = useNavigation();
  
  let camera = Camera

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
            <BasicBtn title={'Retake'} onPress={retakePicture} />  
            <BasicBtn title={'Save'} onPress={savePhoto} />  
          </View>  
        </ImageBackground>
      </View>
    )
  }

  const retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    takePicture()
  }

  const savePhoto = (photo) => { navigation.navigate('ScanPrompt') }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) { return <View /> }
  if (hasPermission === false) { return <Text>No access to camera</Text>; }

  return (
    <Overlay 
      fullScreen={true}
      overlayStyle={styles.overlay}
      isVisible={overlayVisible} 
      onBackdropPress={() => setOverlayVisible(!overlayVisible)}
    >
      <SafeAreaView style={styles.overlayBody}>
        {previewVisible && capturedImage 
          ? (<CameraPreview photo={capturedImage} savePhoto={savePhoto} retakePicture={retakePicture} />) 
          : (<Camera type={type} style={styles.camera} ref={(r) => {camera = r}}>
              <View style={styles.cameraHeader}>
                <Icon 
                  onPress={() => {
                    setType(type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                    )}
                  }
                  type={"entypo"} 
                  name={"cycle"} 
                  size={30} 
                  color={'black'}
                  style={{paddingHorizontal: '10%'}}
                />
                <Icon onPress={() => {
                    setOverlayVisible(!overlayVisible);
                  }}
                  type="font-awesome" 
                  name="close" 
                  size={35} 
                  color="black"
                />
              </View>
              <View style={styles.cameraFooter}>
                <TouchableOpacity onPress={takePicture}
                  style={{
                    width: 60,
                    height: 60,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                  }}
                >
                </TouchableOpacity>
              </View>
           </Camera>)
        }
      </SafeAreaView>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
  },
  overlayBody: {
    flex: 1,
    width: '100%'
  },
  camera: {
    flex: 1,
    width: '100%'
  },
  cameraHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  cameraFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});