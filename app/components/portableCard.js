import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';

import * as actions from '../redux/actions'
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PortableCard = (props) => {
    
    const { title, type, id } = props.listsItem.item
    const { expanded } = props
    let VerticaleDoctIcon = <Icon name="dots-vertical" size={35} color="#6b6b6b" />
console.log('props', props)
    const renderDescription = () => {

        if (expanded) {
            return (
                <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.listNameTxt}>GPS Cordinates</Text>
                        <Text style={styles.listNameTxt}>GPS Source</Text>
                        <Text style={styles.listNameTxt}>Source</Text>
                        <Text style={styles.listNameTxt}>Unit</Text>
                        <Text style={styles.listNameTxt}>Comments</Text>
                        <Text style={styles.listNameTxt}>Deployed Location</Text>
                        <Text style={styles.listNameTxt}>Deployed By</Text>
                        <Text style={styles.listNameTxt}>Deploy Name</Text>
                        <Text style={styles.listNameTxt}>Permanent Location</Text>
                        <Text style={styles.listNameTxt}>Original Location</Text>
                        <Text style={styles.listNameTxt}>Original Sub market</Text>
                        <Text style={styles.listNameTxt}>Submarket</Text>
                        <Text style={styles.listNameTxt}>Deployment Description</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : N/A</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : {type}</Text>
                        <Text style={styles.listValueTxt}> : -</Text>
                        <Text style={styles.listValueTxt}> : -</Text>
                        <Text style={styles.listValueTxt}> : -</Text>
                    </View>
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.leftContainer}>

                    <View style={styles.titleItems}>

                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.items}>
                        {expanded ? null :
                            <Text style={styles.type}>Equipment Type: <Text style={styles.typeValue}>{type}</Text></Text>}
                    </View>
                    {renderDescription()}
                </View>

                <View style={styles.rightContainer}>
                    <View style={styles.topButtons}>
                        <View style={styles.availContainer}>
                            <View style={styles.avails}>
                                <Text style={styles.avialTxt}>Avail</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                        onPress={()=>props.toggleModal()}
                        style={styles.optionBtn}>
                            {VerticaleDoctIcon}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.moreBtnContainer}>
                        {expanded ?
                            <TouchableOpacity
                                onPress={() => props.selectedList(null)}
                            >
                                <Text style={styles.moreTxt}>Less info</Text>

                            </TouchableOpacity> : <TouchableOpacity
                                onPress={() => props.selectedList(id)}
                            >
                                <Text style={styles.moreTxt}>More info</Text>

                            </TouchableOpacity>}
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 0.7,
    },
    rightContainer: {
        flex: 0.3,

    },
    title: {
        fontSize: 18,
        color: "#070707",
        paddingVertical: 10,
        fontWeight: 'bold'

    },
    type: {
        fontSize: 13,
        color: "#070707",
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    items: {
        flex: 1
    },
    titleItems: {
        flex: 1,
    },
    typeValue: {
        fontSize: 13,
        fontWeight: '400',
        color: '#6b6b6b'
    },
    availContainer: {
        flex: 7,

    },
    avails: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 15
    },
    avialTxt: {
        color: '#ffffff',
        fontSize: 11,
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    optionBtn: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 11
    },
    topButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    moreBtnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10
    },
    moreTxt: {
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#6b6b6b'

    },
    listNameTxt:{
        fontSize:14,
        fontWeight:'bold'
    },
    listValueTxt:{
        fontSize:14,
        fontWeight:'bold',
        color:'#6b6b6b'
    }

})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedbyId === ownProps.listsItem.item.id
    return {
        expanded
    }
}
export default connect(mapStateToProps, actions)(PortableCard);