import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


const Footer = () => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{ backgroundColor: '#c0c0c0', height: 1, marginTop: 65 }}></View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 60, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Ionicons title="tin nhắn" size={25} name="message1" color={"#808080"} />
                    <Text>Tin nhắn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("DanhBa")}>
                    <Ionicons title="danh bạ" size={25} name="contacts" color={"#808080"} />
                    <Text>Danh bạ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15 }} onPress={() => navigation.navigate("Profile")}>
                    <FontAwesome title="cá nhân" size={25} name="user-o" color={"#808080"} />
                    <Text>Cá nhân</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Footer

const style = StyleSheet.create({})

