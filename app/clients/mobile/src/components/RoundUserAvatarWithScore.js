import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

export default function RoundUserAvatarWithScore(props) {
  return (
    <View style={styles.container}>
      <Avatar 
        rounded
        size="xlarge"
        title="GV"
        containerStyle={{ backgroundColor: 'black' }}
      />
      <View style={styles.scoreContainer} >
        <Text style={{ fontSize: 25, fontWeight: '600'}}>Score</Text>
        <View style={styles.score} >
          <Text style={{ fontSize: 20 }}>1750</Text>
          <Icon name={'checkcircle'} size={20} color={'#73eca6'} type={"antdesign"} iconStyle={{ marginHorizontal: 5 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 5,
    marginTop: -30,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});