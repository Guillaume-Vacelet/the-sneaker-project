import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import GoBackArrow from '../../../components/GoBackArrow';
import Test_cam from '../../../components/Test_cam';
import ButtonScanner from '../../../components/ButtonScanner';
import ButtonScannerIcon from '../../../components/ButtonScannerIcon';

export default function ScanPrompt(props) {

  // Envoyer le take picture sur une autre page comme avec le scan pour le full ecran
  // puis stockage de la photo qui sera mise a la place du carré blanc
  // Save permettra de revenir a la page d'avant


  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title1}>Take your picture</Text>
      <View style={styles.Container0}>
        <View style={styles.Container}>
          <TouchableOpacity onPress={() => props.navigation.navigate("ScanOld")} >
            <Icon name={"file-picture-o"} type={"font-awesome"} size={70} color={"black"} />
            <Text>Empty</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
       <TouchableOpacity  onPress={() => props.navigation.navigate("ScanOld")}> 
          <View style={styles.button_css2}><Text style={styles.button_css}>Take picture</Text></View>
       </TouchableOpacity >
       <TouchableOpacity  onPress={() => props.navigation.navigate("page d'avant")}>
        <View style={styles.button_css2}><Text style={styles.button_css}>Save</Text></View>
        </TouchableOpacity >
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background
  },

  Container0:{
    flexDirection:'row',
    justifyContent:'center'
  },

  Container:{
    height:'115%',
    width:"80%",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:2,

   
  },
 
  title1: {

    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
    color: Colors.primary,
  },

  button:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:'25%',
    
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
  }
});