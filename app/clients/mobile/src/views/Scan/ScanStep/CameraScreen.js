import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, Alert,Button } from 'react-native';
import { Icon, Overlay } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ScanPicturesContext from '../../../core/contexts/ScanPicturesContext';
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
  const {currentScanPart, savedPictures, setSavedPicture} = React.useContext(ScanPicturesContext);
  
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
      return;
    }
    setPreviewVisible(false);
    setPicture(null);

    let photo = await camera.takePictureAsync({
      quality: 1,
      base64: true,
      exif: true,
      skipProcessing: true,
    }).then((photo) => {
      setPicture(photo.uri)
      setPreviewVisible(true);
      setSavedPicture({
        ...savedPictures,
        [currentScanPart]: {uri: photo.uri},
      });
    }).catch((error) => {
      alert(error);
      console.log(error);
    });
    // let resizedPhoto = await ImageManipulator.manipulateAsync(
    //   photo.uri,
    //   [{ crop: { originX: 50, originY: 600, width: 2000, height: 3000 } }],
    //   { compress: 1, format: "jpeg", base64: false }
    // ).then((cropped) => {
    //   setPicture(cropped.uri);
    //   setPreviewVisible(true);
    //   setSavedPicture({
    //     ...savedPictures,
    //     [currentScanPart]: {uri: cropped.uri},
    //   });
    // })
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
            <BasicBtn 
              title={'Retake'} 
              onPress={() => {
                takePicture().then().catch(error => console.log(error))
              }} 
              width={150}
            />
            <BasicBtn title={'Save'} onPress={savePhoto} width={150}/>
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
        <View><Text style={styles.baseText}>Take the picture of the sneakers horizontally inside the rectangle</Text></View>
        
          <View  style={styles.SquareShapeView}>
          
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
  },

  baseText: {
    fontSize:15,
    fontWeight:'bold',
    marginLeft:'5%',
    color:"white",
  },

  SquareShapeView: {
    justifyContent:'center',
    marginLeft:'4%',
    borderColor:'white',
    borderWidth:5,
    width: 350,
    height: 500,
  },
});