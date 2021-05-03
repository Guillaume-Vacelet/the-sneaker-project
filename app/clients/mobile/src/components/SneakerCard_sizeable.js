import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

const SneakerCard_sizeable = (props) => {
    const styles = StyleSheet.create({
        card: {
            //margin: '5%',
            padding: '5%',
            width: props.size * 190,
            height: props.size * 140,
            backgroundColor: 'white',
            borderRadius: 20,
            justifyContent: 'space-between',
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
        sneakerDescription: {
            marginBottom: '10%',
            zIndex: 0,
            justifyContent: 'space-between',
            height: '100%',
            maxWidth: '90%',
        },
        model: {
            fontSize: props.size * 18,
            fontWeight: 'bold',   
        },
        brand: {
            fontSize: props.size * 14,
            marginBottom: '15%'
        },
        colorContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        colorTxt: {
            fontSize: props.size * 12,
            marginRight: '2%',
        },
        colorCircle: {
            width: props.size * 10,
            height: props.size * 10,
            backgroundColor: 'pink',
            borderRadius: 10,
        },
        price: {
            fontSize: props.size * 14,
            fontWeight: 'bold',
        },
        sneakerImg: {
            width: '80%',
            height: '80%',
            position: 'absolute',
            left: '50%',
            top: '20%',
            zIndex: 1,
        },
        badgeImg: {
            width: props.size * 35,
            height: props.size * 35,
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
            top: '-15%',
            zIndex: 2,
        },
        notCheckedBox: {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            alignSelf: 'center',
            paddingVertical: 3,
            paddingHorizontal: 15,
            position: 'relative',
            top: '-15%',
            zIndex: 2,
        },
        checkedTxt: {
            fontSize: props.size * 16,
            color: 'white',
            fontWeight: 'bold',
        },
    });


    return (
        <View style={styles.card} >
            <Image
                style={styles.sneakerImg}
                source={{ uri: props.item.image }}
            />
            <View style={styles.sneakerDescription}>
                <Text style={styles.model} numberOfLines={1}>{props.item.model}</Text>
                <Text style={styles.brand} numberOfLines={1}>{props.item.brand}</Text>
                <View style={styles.colorContainer}>
                    <Text style={styles.colorTxt}>Color</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <Text style={styles.price}>${props.item.price}</Text>
            </View>
            {props.hasBeenChecked
                ? props.item.checked
                    ? <Image
                        style={styles.badgeImg}
                        source={require('../../assets/approved-badge.png')} />
                    : null
                : null
            }
            {props.hasBeenChecked
                ? props.item.checked
                    ? <View style={styles.checkedBox}><Text style={styles.checkedTxt}>CHECKED</Text></View>
                    : <View style={styles.notCheckedBox}><Text style={styles.checkedTxt}>NOT LEGIT</Text></View>
                : null
            }
        </View>
    );
};


export default SneakerCard_sizeable;