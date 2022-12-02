import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Api } from "../../Global/Axios/Api";
import { addRoom } from "../../util/API"
const TaoNhom = ({ props, route }) => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState([]);
    const data = route.params.data
    const [dsMem, setdsMem] = useState([])
    const [roomName, setRoomName] = useState()

    const them = async () => {

        if (roomName!==undefined) {
            const dsTam = [...dsMem]
            dsTam.push(route.params.user._id)
            const { data } = await Api.post(addRoom, {
                manager: route.params.user._id,
                members: dsTam,
                roomName: roomName
            });
            const roomTam = {
                id: data.data._id,
                roomName: data.data.roomName,
                manager: data.data.manager,
                members: data.data.members
            }
            console.log(data);
            navigation.navigate("ChatNhom", { item: roomTam, user: route.params.user, socket: route.params.socket })
        }
        else{
            Alert.alert("Bạn phải đặt tên nhóm")
        }
    }
    const RenderItem = ({ item, index }) => {
        const addMem = async (item) => {

            const checkTam = [...checked]
            const dsTam = [...dsMem]
            if (checked.indexOf(index) === -1) {
                checkTam.push(index)
                dsTam.push(item._id)
            }
            else {
                checkTam.splice(checked.indexOf(index), 1)
                dsTam.splice(checked.indexOf(index), 1)
            }

            setdsMem(dsTam)
            setChecked(checkTam);

        }

        return (
            <TouchableOpacity onPress={() => addMem(item)}>
                <ListItem>
                    <Checkbox style={{ borderRadius: 15 }}
                        status={checked.indexOf(index) !== -1 ? 'checked' : 'unchecked'}
                    />
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: `${item.avatarImage}` }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.username}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        );
    }
    return (
        <View style={style.main}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("BottomTabNavigator", { user: route.params.user })}>
                        <Ionicons title="Hủy tạo nhóm" size={25} name="close" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Nhóm mới
                    </Text>
                    <Text>
                        Đã chọn: {dsMem.length}
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#d3d3d3', width: 50, alignItems: 'center', height: 50, borderRadius: 50 }}>
                    <Ionicons style={{ marginTop: 10 }} title="Tạo ảnh nhóm" size={25} name="camera" />
                </TouchableOpacity>
                <TextInput onChangeText={(e) => setRoomName(e)} fontSize={18} placeholder="Đặt tên nhóm" style={{ height: 44, margin: 10, borderWidth: 1, padding: 10, width: 300, borderColor: 'white' }} />
            </View>
            <View>
                <SearchBar
                    placeholder="Tìm kiếm số điện thoại"
                    inputContainerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 15, width: 370, marginLeft: 10, height: 45 }} />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    ListHeaderComponent={() => <View></View>}
                    data={data}
                    renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
                />
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            <View style={{ alignItems: 'center', justifyContent: "center", flex: 0.1 }}>
                <TouchableOpacity onPress={them} style={{ backgroundColor: 'yellow', borderRadius: 15, height: 40, width: 200 }}>
                    <Text style={{ marginTop: 10, marginLeft: 50 }}>Thêm vào nhóm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


};



export default TaoNhom;

const style = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 25,
        backgroundColor: 'white'
    },
});