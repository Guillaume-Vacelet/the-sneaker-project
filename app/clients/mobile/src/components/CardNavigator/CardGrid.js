import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Colors from '../../../constants/Colors'
import nmd_r1 from '../../../assets/sneaker-example.png';
import Card from './Card'
import ProductsContext from '../../core/contexts/ProductsContext';

export default function CardGrid(props) {
  const items = React.useContext(ProductsContext);

  return (
    <View style={styles.rootContainer}>
      {items
        ? (<FlatGrid
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card item={item} hasBeenChecked={false} navigation={props.navigation} />
            )}
            itemDimension={150}
            spacing={10}
            contentContainerStyle={{paddingBottom: '50%'}}
          />)
        : null
      }
    </View>
  );
};


const styles = StyleSheet.create({
    card: {
        margin: '5%',
        padding: '5%',
        // width: 190,
        height: 145,
        backgroundColor: 'white',
        borderRadius: 20,
        // IOS Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        // Android shadow
        elevation: 10,
    },
    topText: {
        marginBottom: '10%',
        zIndex: 1,
    },
    botText: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    model: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    brand: {
        fontSize: 14,
    },
    colorTxt: {
        fontSize: 12,
        marginRight: '2%',
    },
    colorCircle: {
        width: 10,
        height: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    sneakerImg: {
        // width: 120,
        // height: 120,
        width: '65%',
        height: '75%',
        position: 'absolute',
        left: '55%',
        top: '5%',
        zIndex: 0,
    },
    badgeImg: {
        width: 38,
        height: 38,
        position: 'absolute',
        left: '53%',
        top: '55%',
        zIndex: 2,
    },
    checkedBox: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        paddingVertical: 3,
        paddingHorizontal: 15,
        position: 'relative',
        top: '10%',
        zIndex: 2,
    },
    notCheckedBox: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        alignSelf: 'center',
        paddingVertical: 3,
        paddingHorizontal: 15,
        position: 'relative',
        top: '5%',
        zIndex: 1,
    },
    checkedTxt: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
});