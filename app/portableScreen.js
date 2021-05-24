import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import Header from './components/header';
import Icon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import ShortByIcon from 'react-native-vector-icons/MaterialIcons';
import FilterIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import PortableCard from './components/portableCard';
import Modal from 'react-native-modal';
import RBSheet from "react-native-raw-bottom-sheet";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
    { label: 'Name--A to Z', value: 0 },
    { label: 'Name--Z to A', value: 1 },
    { label: 'Status--A to Z', value: 2 },
    { label: 'Status--Z to A', value: 3 },
    { label: 'Equipment Type--A to Z', value: 4 },
    { label: 'Equipment Type--Z to A', value: 5 },
];
class PortableScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalVisibleDetails: false,
            value: 0,
        };
    }
    componentDidMount() {
        console.log(this.props, "state", this.state)

    }


    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    };
    openDetailsModal = () => {
        this.setState({ isModalVisibleDetails: !this.state.isModalVisibleDetails })
    }
    render() {
        let myIcon = <Icon name="chevron-left" size={45} color="#000000" />
        let searchIcon = <SearchIcon name="search-outline" size={25} color="#6b6b6b" />
        let shortbyIcon = <ShortByIcon name="short-text" size={25} color="#ffffff" />
        let filterIcon = <FilterIcon name="filter" size={18} color="#ffffff" />

        return (
            <View style={styles.container}>
                <Header
                    name="Portables"
                    icon={myIcon}
                />
                <View style={styles.bodyContainer}>
                    <View style={styles.optionHeading}>
                        <TouchableOpacity
                            onPress={() => this.RBSheet.open()}
                            style={[styles.headerOptions]}>
                            {shortbyIcon}
                            <Text style={styles.optionTxt}>Sort by</Text>
                        </TouchableOpacity>
                        <View style={styles.seperater} />
                        <TouchableOpacity style={styles.headerOptions}>
                            {filterIcon}
                            <Text style={styles.optionTxt}>Filter</Text>

                        </TouchableOpacity>

                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInnercontainer}>

                            <View style={styles.searchIcon}>
                                {searchIcon}
                            </View>
                            <View style={{ flex: 9 }}>
                                <TextInput
                                    placeholder="Search"
                                    style={{ fontSize: 14 }}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={styles.listContainer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.props.list}
                            keyExtractor={lists => lists.id}
                            renderItem={(listsItem) => {
                                return (
                                    <PortableCard
                                        toggleModal={this.toggleModal}
                                        listsItem={listsItem} />
                                )
                            }}
                        />
                    </View>
                </View>
                <Modal
                    isVisible={this.state.isModalVisible}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.deployBtn}
                            onPress={() => {
                                this.openDetailsModal(),
                                    this.toggleModal()
                            }

                            }>
                            <Text style={styles.deployTxt}>Deploy</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    avoidKeyboard={true}
                    isVisible={this.state.isModalVisibleDetails}>
                    <View style={styles.detailsmodalView}>

                        <View style={styles.deployHeading}>
                            <Text style={styles.deployheadingTxt}>Delploy Portable</Text>
                        </View>

                        <View style={styles.secondModalContainer}>
                            <View style={styles.modalitems}>

                                <View style={styles.innerItems}>
                                    <Text style={styles.lableTxt}>type</Text>
                                    <TextInput
                                        placeholder="Select"
                                        style={styles.inputItems}

                                    />
                                </View>
                                <View style={styles.innerItems}>
                                    <Text style={styles.lableTxt}>site</Text>
                                    <TextInput
                                        placeholder="Select"
                                        style={styles.inputItems}

                                    />
                                </View>
                            </View>
                            <View style={styles.modalitems}>

                                <View style={styles.innerItems}>
                                    <Text style={styles.lableTxt}>Deploy Date</Text>
                                    <TextInput
                                        placeholder="Select"
                                        style={styles.inputItems}


                                    />
                                </View>
                                <View style={styles.innerItems}>
                                    <Text style={styles.lableTxt}>Return Date</Text>
                                    <TextInput
                                        placeholder="Select"
                                        style={styles.inputItems}


                                    />
                                </View>
                            </View>
                            <View style={styles.innerItems}>
                                <Text style={styles.lableTxt}>Deployed by:</Text>
                                <TextInput
                                    placeholder="Select"
                                    style={styles.inputItems}

                                />
                            </View>


                        </View>
                        <View style={styles.commentContainer}>
                            <View style={styles.commentwrapper}>
                                <Text style={styles.lableTxt}>Comments</Text>
                                <TextInput
                                    numberOfLines={2}
                                    multiline={true}

                                    style={styles.commentTextInput}

                                />
                            </View>
                            <View style={styles.cancelDepBtnContainer}>

                                <TouchableOpacity
                                    style={styles.cancelBtn}
                                    onPress={() => {
                                        this.openDetailsModal()
                                    }

                                    }>
                                    <Text style={[styles.deployTxt, { color: 'black' }]}>close</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.depBtn}
                                    onPress={() => {
                                        this.openDetailsModal()
                                    }

                                    }>
                                    <Text style={[styles.deployTxt, { color: '#ffffff' }]}>Deploy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={270}
                    openDuration={250}
                    customStyles={{
                        container: {
                            // justifyContent: "center",
                            // alignItems: "center"
                        }
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 20 }}>
                        <View
                            style={{ flexDirection: 'row',
                            alignItems:'center', paddingHorizontal:10, height: 25, backgroundColor: '#212121' }}>
                            {shortbyIcon}
                            <Text style={{ fontSize: 12, color: '#ffffff' }}>Sort by</Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>

                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                buttonColor={'#212121'}
                                buttonOuterColor={'#212121'}
                                buttonInnerColor={'#212121'}
                                selectedButtonColor={'#212121'}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </View>



                    </View>

                </RBSheet>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        list: state.portableList
    }
}
export default connect(mapStateToProps)(PortableScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#eae5e5'

    },
    optionHeading: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#545454'
    },
    headerOptions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchContainer: {
        height: 50,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 5

    },
    listContainer: {
        flex: 8,
        paddingHorizontal: 10

    },
    optionTxt: {
        fontSize: 13,
        color: '#ffffff'
    },
    seperater: {
        height: 30,
        width: 2,
        backgroundColor: '#ffffff'
    },
    searchIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    searchInnercontainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#c9c9c9',
    },
    deployBtn: {
        backgroundColor: '#ffffff',
        height: 30,
        width: 100,
        justifyContent: 'center',
        paddingHorizontal: 6
    },
    deployTxt: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#6b6b6b'
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left: 85,
        bottom: 100
    },
    detailsmodalView: {
        height: 400,
        width: 300,
        backgroundColor: '#ffffff',
        top: 50,
        left: 10,
    },
    deployHeading: {
        height: 25,
        backgroundColor: '#0f0f0f',
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    deployheadingTxt: {
        fontSize: 13,
        color: '#ffffff'
    },
    cancelBtn: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 12,
        height: 25,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    depBtn: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        height: 25,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondModalContainer: {
        flex: 6, paddingHorizontal: 20
    },
    modalitems: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputItems: {
        borderWidth: 1,
        borderRadius: 5,
        width: 120,
        height: 35
    },
    commentContainer: {
        flex: 4,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    cancelDepBtnContainer: {
        flex: 1,
        paddingHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    commentTextInput: {
        borderWidth: 1,
        textAlignVertical: "top",
        borderRadius: 5
    },
    commentwrapper: {
        flex: 1,
        paddingHorizontal: 20
    },
    lableTxt: {
        paddingVertical: 5

    },
    innerItems: {
        flex: 1
    }
})