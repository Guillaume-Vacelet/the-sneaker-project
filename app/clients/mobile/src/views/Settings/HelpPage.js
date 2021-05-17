import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View} from 'react-native';
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';

export default function HelpPage(props) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <GoBackArrow left={true} goBack={props.navigation.goBack} />
        <Text style={styles.title}>Help</Text>
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
    flex: 1,
    fontSize: 30,
    fontWeight: '800',
    color: Colors.primary,
  },
});