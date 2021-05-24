import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, Image} from 'react-native';
import { Icon, Overlay } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BasicBtn from '../../../components/BasicBtn';
import Colors from '../../../../constants/Colors';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  let camera = Camera;
  const [overlayVisible, setOverlayVisible] = React.useState(true);
  const [hasPermission, setHasPermission] = React.useState(null);
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back);
  const [picture, setPicture] = React.useState(null);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) { 
    return <View /> 
  }
  if (hasPermission === false) { 
    return <Text>No access to camera</Text>; 
  }

  async function takePicture() {
    if (!camera) {
      return
    }
    setPreviewVisible(false);
    setPicture(null);
    const photo = await camera.takePictureAsync({
      quality: 1,
      base64: true,
      exif: true,
      skipProcessing: true,
    }).then((photo) => {
      setPicture(photo.uri)
      setPreviewVisible(true);
    }).catch((error) => {
      alert(error);
    });
  }

  function savePhoto() { 
    navigation.navigate('ScanPrompt')
  }

  function switchCameraType() {
    setCameraType(cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    )
  }

  const PicturePreview = () => {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={{ uri: picture }}
          style={{
            flex: 1,
            justifyContent: 'flex-end'
          }}
        >
          <View style={styles.buttons}>
            <BasicBtn title={'Retake'} onPress={() => {
              takePicture().then().catch(error => console.log(error))
            }} />
            <BasicBtn title={'Save'} onPress={savePhoto} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  const OpenedCamera = () => {
    return (
      <Camera type={cameraType} style={styles.camera} ref={(r) => {camera = r}}>
        <View style={styles.cameraHeader}>
          <Icon 
            onPress={() => {switchCameraType()}}
            type={"entypo"} 
            name={"cycle"} 
            size={30} 
            color={"white"}
            style={{paddingHorizontal: '10%'}}
          />
          <Icon onPress={() => navigation.navigate('ScanPrompt')}
            type="font-awesome" 
            name="close" 
            size={30} 
            color={"white"}
          />
        </View>
        <View style={styles.cameraFooter}>
          <TouchableOpacity onPress={() => {
              takePicture().then().catch(error => console.log(error))
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: '#fff',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View 
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                borderWidth: 2, 
                borderColor: 'black',
              }}
            >
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }

  return (
    <Overlay 
      fullScreen={true}
      overlayStyle={styles.overlay}
      isVisible={overlayVisible} 
      onBackdropPress={() => setOverlayVisible(!overlayVisible)}
    >
      <SafeAreaView style={styles.overlayBody}>
        {previewVisible && picture 
          ? (<PicturePreview />) 
          : (<OpenedCamera />)
        }
      </SafeAreaView>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    padding: 0,
    backgroundColor: Colors.background
  },
  overlayBody: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  cameraHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: '5%'
  },
  cameraFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: '5%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});