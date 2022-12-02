import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import { Avatar, ListItem } from 'react-native-elements';
import { Api } from "../../Global/Axios/Api";
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"

import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BanBeDanhBa = () => {
    const navigation = useNavigation()
    const [click1, setclick1] = useState()
    
    const DATA1 = [
        {
            title: "Tất cả",
            soluong: 5
        },
        {
            title: "Mới truy cập",
            soluong: 10
        },
    ];
    const DATA2 = [
        {
            ten: "Đức",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Đức",
        },
        {
            ten: "Đức",
        },
        {
            ten: "Đức",
        },
        {
            ten: "Đức",
        },
    ];
  
    const Item1 = ({ item, index, onPress }) => (
        <View>
            {click1 === index ? (<View><TouchableOpacity style={{ justifyContent: 'center', marginLeft: 5, alignItems: 'center', borderWidth: 1, borderRadius: 50, borderColor: 'gray', height: 40, width: 170, backgroundColor: 'gray' }} onPress={onPress}  >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", marginLeft: 5 }}>
                        {item.soluong}
                    </Text>
                </View>
            </TouchableOpacity></View>) : (<View>
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 5, alignItems: 'center', borderWidth: 1, borderRadius: 50, borderColor: 'gray', height: 40, width: 170 }} onPress={onPress}  >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17, color: "gray" }}>
                            {item.title}
                        </Text>
                        <Text style={{ fontSize: 17, color: "gray", marginLeft: 5 }}>
                            {item.soluong}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>)}

        </View>
    );

    const Item2 = ({ item, index, onPress }) => (
        <View>
            <TouchableOpacity >
                <ListItem>
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.ten}</ListItem.Title>
                    </ListItem.Content>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Feather name="phone" size={25} color={"black"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 30 }}>
                            <Ionicons name="videocam-outline" size={30} color={"black"} />
                        </TouchableOpacity>
                    </View>
                </ListItem>
            </TouchableOpacity>
        </View>
    );

    const renderItem1 = ({ item, index }) => {
        return (
            <Item1
                item={item}
                index={index}
                click={click1}
                onPress={() => {
                    setclick1()
                }
                }
            />
        );
    };
    const renderItem2 = ({ item, index }) => {
        return (
            <Item2
                item={item}
            />
        );
    };

    return (
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', height: 50, alignItems: 'center', marginTop: 15, marginLeft: 15 }} onPress={() => navigation.navigate("LoiMoiKetBan")}>
                    <TouchableOpacity style={{ width: 45, height: 45, backgroundColor: '#1e90ff', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome5 title="kết bạn" size={25} name="user-friends" color={"white"} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, marginLeft: 20 }}>Lời mời kết bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', height: 50, alignItems: 'center', marginTop: 30, marginLeft: 15 }}>
                    <TouchableOpacity style={{ width: 45, height: 45, backgroundColor: '#1e90ff', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome title="danh bạ" size={25} name="address-book-o" color={"white"} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>Danh bạ máy</Text>
                        <Text style={{ fontSize: 17, marginLeft: 20, color: "gray" }}>Các liên hệ có cùng zalo</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#d3d3d3', height: 10, marginTop: 10 }}></View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <FlatList
                        data={DATA1}
                        renderItem={renderItem1}
                        horizontal
                    />
                </View>
                <View style={{ backgroundColor: '#c0c0c0', height: 2, marginTop: 20 }}></View>
                <FlatList
                    data={DATA2}
                    renderItem={renderItem2}
                />
            </View>
    );
};

export default BanBeDanhBa

const styles = StyleSheet.create({
})

