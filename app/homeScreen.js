import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header';
import Globe from 'react-native-vector-icons/Feather';
import Location from 'react-native-vector-icons/Entypo';
import Note from 'react-native-vector-icons/Foundation';
import Truck from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let myIcon = <Icon name="menu-sharp" size={40} color="#000000" />

        return (
            <View style={styles.container}>
                <Header 
                name="canvas^"
                icon={myIcon}
                />
                <View style={styles.bodyContainer}>
                    <View style={styles.cardsWrap}>
                        <View style={styles.cards}>
                            <Globe name="globe" size={40} color="#777575" />
                        </View>
                        <View style={styles.TxtContainer}>
                            <Text style={styles.bottomTxt}>Newtwork DashBoard</Text>
                        </View>
                    </View>
                    <View style={styles.cardsWrap}>
                        <View style={styles.cards}>
                            <Location name="location" size={40} color="#777575" />
                        </View>
                        <View style={styles.TxtContainer}>
                            <Text style={styles.bottomTxt}>Map</Text>
                        </View>
                    </View>
                    <View style={styles.cardsWrap}>
                        <View style={styles.cards}>
                        <Note name="clipboard-notes" size={40} color="#777575" />
                        </View>
                        <View style={styles.TxtContainer}>
                            <Text style={styles.bottomTxt}>Site Servey</Text>
                        </View>
                    </View>
                    <View style={styles.cardsWrap}>
                        <View style={styles.cards}>
                        <Truck name="truck-fast-outline" size={40} color="#777575" />
                        </View>
                        <View style={styles.TxtContainer}>
                            <Text style={styles.bottomTxt}>Portable</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingHorizontal: 10

    },
    cards: {
        height: 100,
        width: 100,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardsWrap: {
        height: 100,
        width: 100,
        marginHorizontal: 15,
        marginVertical: 30,

    },
    bottomTxt: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    TxtContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    }
})