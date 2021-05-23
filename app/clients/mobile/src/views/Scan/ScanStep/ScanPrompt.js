import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../../../constants/Colors';

export default function ScanPrompt(props) {
  // Envoyer le take picture sur une autre page comme avec le scan pour le full ecran
  // puis stockage de la photo qui sera mise a la place du carré blanc
  // Save permettra de revenir a la page d'avant
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title1}>Take your picture</Text>
      </View>
      <View style={styles.Container0}>
        <View style={styles.Container}>
          <TouchableOpacity onPress={null} >
            <Icon name={"file-picture-o"} type={"font-awesome"} size={70} color={Colors.secondary} />
            <Text style={{color: Colors.secondary}}>Empty</Text>
          </TouchableOpacity>
        </View>
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
  }
});