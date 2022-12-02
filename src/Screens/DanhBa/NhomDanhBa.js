import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, ViewComponent } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { Api } from "../../Global/Axios/Api";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const NhomDanhBa = () => {
    const navigation = useNavigation()

    const DATA2 = [
        {
            ten: "Nhóm 1",
        },
        {
            ten: "Nhóm 2",
        },
        {
            ten: "Nhóm 3",
        },
        {
            ten: "Nhóm 4",
        },
        {
            ten: "Nhóm 5",
        },
    ];


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
                        <Text style={{marginTop:5}}>Thắng:Xin chào</Text>
                    </ListItem.Content>
                    <Text>15 phút</Text>
                </ListItem>
            </TouchableOpacity>
        </View>
    );

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
                <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#dcdcdc', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign title="kết bạn" size={25} name="addusergroup" color={"blue"} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginLeft: 20, color: 'blue' }}>Tạo nhóm mới</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#d3d3d3', height: 10, marginTop: 10 }}></View>
            <View>
                <Text>Tạo nhóm với:</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 30 }}>
                        <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#dcdcdc', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign title="kết bạn" size={25} name="calendar" color={"blue"} />
                        </TouchableOpacity>
                        <Text>Lịch</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#dcdcdc', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons title="nhắc hẹn" size={25} name="alarm" color={"red"} />
                        </TouchableOpacity>
                        <Text>Nhắc hẹn</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 30 }}>
                        <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#dcdcdc', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign title="nhóm" size={25} name="team" color={"#4b0082"} />
                        </TouchableOpacity>
                        <Text>Nhóm offline</Text>
                    </View>

                </View>
            </View>
            <View style={{ backgroundColor: '#d3d3d3', height: 10, marginTop: 10 }}></View>
            <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginLeft:20}}>Nhóm đang tham gia (10)</Text>
                <TouchableOpacity style={{flexDirection:'row',marginTop:5,marginRight:10}}>
                <Ionicons name="swap-vertical" size={20} color={"black"} />
                    <Text>Hoạt động cuối</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA2}
                renderItem={renderItem2}
            />
        </View>
    );
};

export default NhomDanhBa

const styles = StyleSheet.create({
})

