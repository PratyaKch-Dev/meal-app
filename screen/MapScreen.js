import React, { useState } from 'react'
import { FlatList, View, Text, Button, StyleSheet } from 'react-native'
import Card from '..//components/Card'
import CardItem from '../components/CardItem';
import vars from '../Config';

const MapScreen = props => {

    var url = "";
    const [selectedNumber, setSearchDate] = useState();

    const fetchNearlyArea = async () => {
        try {
            const responseConnect = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.828253,100.5284507&sensor=true&rankby=distance&type=restaurant&key=AIzaSyDURr4tM4K8vDoY7aHI1ixBFRMTQIWq-84');

            const resData = await responseConnect.json();
            setSearchDate(resData.results);
            // console.log(resData.status);

            return responseConnect;
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        <View style={styles.screen}>
            <Button title="Finding Restaurant in Bangsue" onPress={fetchNearlyArea} />

            <View>

                <FlatList
                    data={selectedNumber}
                    keyExtractor={item => item.id}
                    renderItem={itemData => (

                        <View>
                            {console.log(itemData.item.rating)}
                            <CardItem
                                title={itemData.item.name}
                                Photo={itemData.item.photos === undefined ? '' : itemData.item.photos[0].photo_reference}
                                vicinity={itemData.item.vicinity}
                                rating = {itemData.item.rating}
                            />
                        </View>
                    )}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'stretch',

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MapScreen;