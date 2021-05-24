import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftHeader}>
                {props.icon}
            </TouchableOpacity>
            <View style={styles.centerHeader}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.rightHeader}>
            </View>
        </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    leftHeader: {
        flex: 1,
        paddingLeft: 10
    },
    centerHeader: {
        flex: 1,
        justifyContent:'center',
        alignItems:"center"
    },
    rightHeader: {
        flex: 1
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25
    }
})