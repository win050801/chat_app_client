import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, ViewComponent } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { Api } from "../../Global/Axios/Api";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { getRoom } from "../../util/API"
const NhomDanhBa = ({user}) => {
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
    const [data,setdata] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await Api.post(getRoom, {
                id: user._id
            });
            setdata(response.data)
        }

        fetchData();
    }
        , [])

    const Item2 = ({ item, index, onPress }) => (
        <View>

            <TouchableOpacity >
                <ListItem>
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://e7.pngegg.com/pngimages/901/452/png-clipart-computer-icons-users-group-avatar-computer-icons-users-group.png' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.roomName}</ListItem.Title>
                        
                    </ListItem.Content>
                   
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
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginTop: 5, marginLeft: 20 }}>Nhóm đang tham gia (10)</Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, marginRight: 10 }}>
                    <Ionicons name="swap-vertical" size={20} color={"black"} />
                    <Text>Hoạt động cuối</Text>
                </TouchableOpacity>
            </View>
            {data.map((item, index) => (
                <Item2 key={item.id} item={item} index={index}></Item2>
            ))}
        </View>
    );
};

export default NhomDanhBa

const styles = StyleSheet.create({
})

