import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import Feather from "react-native-vector-icons/Feather"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HeaderProfile = () => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{ backgroundColor: '#00bfff' }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: "90%" }}>
                        <SearchBar
                            placeholderTextColor={"white"}
                            placeholder="Tìm kiếm"
                            searchIcon={{color:'white'}}
                            inputContainerStyle={{ width: "90%", marginLeft: 10, height: 40 }} />
                    </View>
                    <Feather style={{ marginRight: 10 }} title="setting" size={25} name="settings" color={"white"} />
                </View>
            </View>
        </View>

    );
};

export default HeaderProfile

const styles = StyleSheet.create({

})

