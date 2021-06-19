//React
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
//Redux
import { useSelector } from 'react-redux'
//Images
import dunklow_blackwhite from '../../../assets/dunklow_blackwhite.png';
import airforce1 from '../../../assets/airforce1.png';
import airJordanLow from '../../../assets/AirJordanLow_RoyalToe.png';
import b23_dior from '../../../assets/b23_dior.png';
import profilePicture from '../../../assets/profile_picture.jpg';
//Components
import Colors from '../../../constants/Colors';
import GoBackArrow from '../../components/GoBackArrow';
import UserProductCard from '../../components/UserProductCard';
import ProfilePicture from './ProfilePicture';

export default function ProfileScreen(props) { 
  const user = useSelector(state => state.user.data);
  const [searchInput, setSearchInput] = React.useState('');

  const test = [
    { id: '#12345', legit: true, brand: 'Nike', title: 'Air Force 1', image: airforce1 },
    { id: '#12346', legit: true, brand: 'Nike', title: 'Dunk low', image: dunklow_blackwhite },
    { id: '#12347', legit: false, brand: 'Dior/Converse', title: 'B23', image: b23_dior },
    { id: '#12348', legit: true, brand: 'Nike', title: 'Air Jordan Low', image: airJordanLow },
    { id: '#12349', legit: true, brand: 'Nike', title: 'Air Jordan Low', image: airJordanLow },
    { id: '#12350', legit: true, brand: 'Nike', title: 'Air Jordan Low', image: airJordanLow },
    { id: '#12351', legit: true, brand: 'Nike', title: 'Air Jordan Low', image: airJordanLow },
  ];
  

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Icon onPress={() => props.navigation.navigate('EditProfile')}
          type={'material-community'}
          name={'pencil'}
          size={26}
          color={Colors.secondary}
          containerStyle={{position: 'absolute', top: '5%', left: '5%'}}
        />
        <GoBackArrow left={false} goBack={props.navigation.goBack} dark={false}/>
        <View style={{width: 130, height: 130, margin: '5%'}}>
          <ProfilePicture source={profilePicture} />
        </View>
        <Text style={styles.userName}>{user.username}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView 
          style={{width: '100%', marginTop: '1%', padding: '5%'}} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            paddingBottom: '20%'
          }}
        >
          <SearchBar 
            containerStyle={{backgroundColor: Colors.secondary, marginBottom: '5%', borderTopWidth: 0, borderBottomWidth: 0}} 
            inputContainerStyle={{backgroundColor: 'lightgray', borderRadius: 15, width: '100%'}}
            placeholder={"Search"}
            onChangeText={setSearchInput}
            value={searchInput}
            inputStyle={{color: Colors.background}}
          />
          <Text style={{fontSize: 23, fontWeight: '600', color: Colors.background, margin: '2%'}}>My checks</Text>
          {test.map((product) => (
            <UserProductCard key={product.id}
              id={product.id}
              legit={product.legit}
              brand={product.brand}
              title={product.title} 
              image={product.image}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  headerContainer: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 5,
    width: '100%',
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userName: {
    fontSize: 30,
    fontWeight:'bold',
    color: Colors.secondary,
  },
});