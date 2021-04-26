import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const SneakerCard = (props) => {
    return (
        <View style={styles.card} >
            <View style={styles.topText}>
                <Text style={styles.model}>{props.item.model}</Text>
                <Text style={styles.brand}>{props.item.brand}</Text>
            </View>
            <View style={styles.botText}>
                <Text style={styles.colorTxt}>Color</Text>
                <View style={styles.colorCircle}></View>
            </View>
            <Text style={styles.price}>${props.item.price}</Text>
            {props.item.checked
                ? <Image
                    style={styles.badgeImg}
                    source={require('../../assets/approved-badge.png')}/>
                : null
            }
            <Image
                style={styles.sneakerImg}
                source={{uri: props.item.image}}
                // source={require('../../assets/sneaker-example.png')}
            />
            {props.item.checked
                ? <View style={styles.checkedBox}><Text style={styles.checkedTxt}>CHECKED</Text></View>
                : <View style={styles.notCheckedBox}><Text style={styles.checkedTxt}>NOT LEGIT</Text></View>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        padding: '4%',
        width: 190,
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
        marginBottom: 30,
        zIndex: 0,
    },
    botText: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 0,
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
        marginRight: 7,
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
        width: 120,
        height: 120,
        position: 'absolute',
        left: '53%',
        top: 10,
        zIndex: 1,
    },
    badgeImg: {
        width: 38,
        height: 38,
        position: 'absolute',
        left: '53%',
        top: 70,
        zIndex: 2,
    },
    checkedBox: {
        backgroundColor: '#4cfa8e',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        borderRadius: 5,
        paddingVertical: 3,
        position: 'relative',
        top: '5%',
        zIndex: 1,
    },
    notCheckedBox: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        borderRadius: 5,
        paddingVertical: 3,
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

export default SneakerCard;