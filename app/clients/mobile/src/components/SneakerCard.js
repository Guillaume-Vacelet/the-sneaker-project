import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

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
            {props.hasBeenChecked
                ? props.item.checked
                    ? <Image
                        style={styles.badgeImg}
                        source={require('../../assets/approved-badge.png')}/>
                    : null
                : null
            }
            <Image
                style={styles.sneakerImg}
                source={{uri: props.item.image}}
            />
            {props.hasBeenChecked
                ? props.item.checked
                    ? <View style={styles.checkedBox}><Text style={styles.checkedTxt}>CHECKED</Text></View>
                    : <View style={styles.notCheckedBox}><Text style={styles.checkedTxt}>NOT LEGIT</Text></View>
                : null
            }
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        margin: '5%',
        padding: '5%',
        // width: '90%',
        // height: '100%',
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
        // width: 120,
        // height: 120,
        width: '65%',
        height: '75%',
        position: 'absolute',
        left: '53%',
        top: '5%',
        zIndex: 1,
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