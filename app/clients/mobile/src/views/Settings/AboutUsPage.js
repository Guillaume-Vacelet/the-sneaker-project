import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View} from 'react-native';
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';

export default function AboutUsPage(props) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <GoBackArrow left={true} goBack={props.navigation.goBack} />
        <Text style={styles.title}>About us</Text>
      </View>
      <View style={styles.teammates}>
        <Text style={styles.teammate}>Guillaume VACELET - Frontend/Backend</Text>
        <Text style={styles.teammate}>Hector BONVALLOT - Frontend/Business</Text>
        <Text style={styles.teammate}>Mathieu NEY - Frontend/Business</Text>
        <Text style={styles.teammate}>Tristan LEBARS - Data/IA</Text>
        <Text style={styles.teammate}>Sofian CH'OUIAKH - Design</Text>
        <Text style={styles.teammate}>Yannick N. LEFLEM - Business</Text>
        <Text style={styles.teammate}>Philippe TATEL - ?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  headerContainer: {
    flex: 1,
    width: '100%', 
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    fontSize: 30,
    fontWeight: '800',
    color: Colors.primary,
  },
  teammates: {
    flex: 3,
  },
  teammate: {
    fontSize: 17,
    fontWeight: '600',
    color: 'lightgray',
    marginVertical: '2%'
  }
});