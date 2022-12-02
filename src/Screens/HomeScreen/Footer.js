import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


const Footer = ({setTinNhan,setDanhBa}) => {
    const navigation = useNavigation()

    const clickTinNhan = ()=>{
        setTinNhan(true)
        setDanhBa(false)
    }
    const clickDanhBa = ()=>{
        console.log("Click");
        setTinNhan(false)
        setDanhBa(true)
        
    }
    
    const clickCanhan = ()=>{
     
        setTinNhan(false)
        setDanhBa(false)
        
    }
    return (
        <View>
            <View style={{ backgroundColor: '#c0c0c0', height: 1 }}></View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', height: "100%", justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} onPress={() => clickTinNhan()} >
                    <Ionicons title="tin nhắn" size={25} name="message1" color={"#808080"} />
                    <Text>Tin nhắn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => clickDanhBa()}>
                    <Ionicons title="danh bạ" size={25} name="contacts" color={"#808080"} />
                    <Text>Danh bạ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15 }} onPress={() => clickCanhan()}>
                    <FontAwesome title="cá nhân" size={25} name="user-o" color={"#808080"} />
                    <Text>Cá nhân</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Footer

const style = StyleSheet.create({})

