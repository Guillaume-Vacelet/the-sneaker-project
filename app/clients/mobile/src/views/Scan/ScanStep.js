import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, ScrollView,} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';
import Grid_card from '../../components/grid_scan';

export default function ScanStep(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <GoBackArrow left={true} goBack={props.navigation.goBack} dark={false} />
      </View>
        <Text style={styles.title1}>Takes your six pictures</Text>
          <Grid_card/>
        <View>
        </View>
        <Button title={"Next"} onPress={() => props.navigation.navigate("Results")} />
       
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:0.1
  },
  rootContainer: {
    height: '100%',
    backgroundColor: Colors.background
  },
  
  title1: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: '10%',
    color: Colors.primary
  }
});