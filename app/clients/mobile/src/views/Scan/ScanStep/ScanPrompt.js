import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import ScanPicturesContext from '../../../core/contexts/ScanPicturesContext';

export default function ScanPrompt(props) {
  const {currentScanPart, savedPictures} = React.useContext(ScanPicturesContext);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title1}>Take your picture</Text>
      </View>
      <View style={styles.Container0}>
        { savedPictures[currentScanPart].uri
          ? (<Image style={styles.picture} source={{uri: savedPictures[currentScanPart].uri}} />)
          : (<View style={styles.Container}>
              <Icon name={"file-picture-o"} type={"font-awesome"} size={70} color={Colors.secondary} />
              <Text style={{color: Colors.secondary}}>Empty</Text>
            </View>)
        }
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity  onPress={() => props.navigation.navigate("Camera")}> 
          <View style={styles.button_css2}>
            <Text style={styles.button_css}>Take picture</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity  onPress={() => props.navigation.navigate("ScanGrid")}>
          <View style={styles.button_css2}>
            <Text style={styles.button_css}>Save</Text>
          </View>
        </TouchableOpacity >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background
  },
  headerContainer: {
    flex: 1,
    justifyContent:'center',
    paddingLeft: '5%'
  },
  Container0:{
    flex: 5,
    flexDirection:'row',
    justifyContent:'center',
  },
  Container:{
    flex: 1,
    width:"80%",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:2,
  },
  title1: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.primary
  },
  buttons:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
  },
  button_css:{
   fontSize:22,
   fontWeight:'bold',
   color:"white",
   padding:10,
  },
  button_css2:{
    backgroundColor:'#73eca6',
    borderRadius:2,
  },
  picture: {
    height: '100%',
    width: '80%',
  }
});