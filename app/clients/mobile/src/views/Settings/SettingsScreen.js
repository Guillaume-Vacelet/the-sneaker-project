import { StyleSheet, StatusBar, View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';
import RoundUserAvatarWithScore from '../../components/RoundUserAvatarWithScore';


export default function SettingsScreen() {
  const [notif,setnotif] = React.useState(false)

  return(
    <View style={styles.Container}>
      <View style={styles.Head2} >
        <View style={styles.Head}>
          <RoundUserAvatarWithScore/>
        </View>
        <View style={{marginTop:70}}>
          <Text style={{fontSize:20}}>#Guillaume Vacelet</Text>
        </View>
      </View>
      <View style={styles.buttons_container}>
        <View style={styles.button_view1}>
          <Text style={styles.button1} onPress={() => {alert("Access denied")}} >Modifier</Text>
        </View>
        <View style={styles.button_view2}>
          <Text style={styles.button2} onPress={() => {alert("Access denied")}}>Deconnexion</Text>
        </View>
      </View>
      <Text style={styles.title}>Général</Text>
        <View style={styles.no}>
          <View>
            <Icon type={'feather'} name={'bell'} size={50} />
          </View>
          <View>
            <Text style={{fontSize:25}}>Notifications</Text>
            <Text>Activer ou non les notifications</Text>
          </View>
          <View>
            {notif
              ? <Icon type={'material-community'} name={'toggle-switch'} size={50} color="#73eca6" onPress={() => {!setnotif(false)}} />
              : <Icon type={'material-community'} name={'toggle-switch-off'} size={50} onPress={() => {!setnotif(true)}} />
            }
          </View>
        </View>

        <View style={styles.no}>
          <View style={styles.icon_earth}>
            <Icon type={'antdesign'} name={'earth'} size={50} />
          </View>
          <View>
            <Text style={{fontSize:25}}>Langages</Text>
            <Text>Selectionnez votre langue           </Text>
          </View>
          <View style={styles.icon_arrow}>
            <Icon type={'material'} name={'arrow-forward-ios'} size={30} />
          </View>
        </View>

        <View style={styles.no}>
          <View style={styles.icon_earth}>
            <Icon type={'material-community'} name={'signal-variant'} size={50} />
          </View>
          <View>
            <Text style={{fontSize:25}}>Synchronisation</Text>
            <Text>Liez votre compte à vos réseaux</Text>
          </View>
          <View style={styles.icon_arrow}>
            <Icon type={'material'} name={'arrow-forward-ios'} size={30} />
          </View>
        </View>

        <View style={styles.line}/>

        <View style={styles.no}>
          <View style={{ marginTop:10}}>
            <Text style={{fontSize:25, marginLeft:10}}>Aide</Text>
          </View>
          <View style={styles.icon_arrow2}>
            <Icon type={'material'} name={'arrow-forward-ios'} size={30} />
          </View>
        </View>

        <View style={styles.line}/>

        <View style={styles.no}>
          <View style={{ marginTop:10}}>
            <Text style={{fontSize:25, marginLeft:10}}>A propos</Text>
          </View>
          <View style={styles.icon_arrow2}>
            <Icon type={'material'} name={'arrow-forward-ios'} size={30} />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
Head:{
  width: 150,
  marginLeft: 15,
  marginTop:45,
},

Head2:{
flexDirection:'row',
},

buttons_container:{
marginTop:25,
flexDirection: 'row',
justifyContent:'center',
},

button1:{
backgroundColor:'black',
color:'white',
padding: 8,
textAlign:'center',
fontSize:17,
},

button_view1:{
marginRight:20,
width:120,
},

button_view2:{
  width:120,
  },

button2:{
  backgroundColor:'black',
  color:'white',
  padding: 8,
  fontSize:17,
},

no:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:20,
  paddingHorizontal:15,
  alignItems:'center',
  },

  icon_earth:{
  marginLeft:1,
  },

  icon_arrow:{
    marginRight:8,
  },

  icon_arrow2:{
    marginRight:8,
    marginTop:15,
  },

  line:{
      borderBottomColor: 'black',
      borderBottomWidth: 3,
      marginTop:5,
      marginHorizontal:25,
  },

  title: {
    fontSize: 30,
    fontWeight: "600",
    padding: 20,
    color: "black",
    paddingVertical:35,
  }, 
});

/*
Faire un mouvement de hoover sur les deux bouton en haut avec du vert
*/