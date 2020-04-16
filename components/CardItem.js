import React from 'react';
import { Image, View, Text, Item, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Config from '../Config'

const CardItem = props => {

    let TochableCmp = TouchableOpacity;
    const photo_reference = props.Photo;
    let url
    let star
    if (photo_reference !== '') {

        url = Config.googlePhotoUrl + props.Photo + '&key=' + Config.googleApiKey;
    }
    else {
        url = 'https://www.teamgroup.co.th/wp-content/themes/consultix/images/no-image-found-360x260.png';
    }
    {console.log('rating :: ' + props.rating)}
    if(props.rating !== undefined){
        star = props.rating;
    }
    else{
        star = 'Unspecified'
    }

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TochableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TochableCmp onPress={() => { }} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: url }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title} ( {star} Stars )</Text>
                            {/* <Text style={styles.vicinity}>{props.rating}</Text> */}
                            <Text style={styles.vicinity}>{props.vicinity}</Text>

                        </View>
                    </View>
                </TochableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        marginVertical: 4,
        color: 'black'
    },
    vicinity: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888',
        color: 'black'
    },
    details: {
        alignItems: 'center',
        height: '30%',
        padding: 10,
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10
    }

});

export default CardItem;