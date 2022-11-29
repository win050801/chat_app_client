import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Alert, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Api } from "../../Global/Axios/Api";
import { TouchableOpacity } from "react-native-gesture-handler";
import { allUsersRoute } from "../../util/API"
const ThemThanhVien = ({ props, route }) => {
    const navigation = useNavigation();

    // var user = props.user
    // const id = user._id
    // console.log(route.params);

    // const data = route.params.data
    const [dsMem, setdsMem] = useState([])
    const [roomName, setRoomName] = useState()
    const [dsTV, setDS] = useState([])

    // const [data, setData] = useState([

    // ])


    useEffect(() => {
        async function fetchData() {


            const { data } = await Api.post(allUsersRoute, {
                id: route.params.user._id
            });
            const dsBan = []
            const dsTam = [...route.params.roomChat.members]

            data.forEach(element => {
                if (dsTam.indexOf(element._id) < 0) {
                    dsBan.push(element)
                }
            });

            // dsBan.splice(dsBan.indexOf(route.params.user._id), 1)
            // console.log(route.params.roomChat);
            // console.log(dsBan);
            setDS(dsBan)
        }
        fetchData();
    },[]);
    const them = async () => {
        dsTam = [...dsMem]
        dsTam.push(route.params.user._id)
        console.log(roomName);
        const respon = await Api.post(`http://192.168.14.106:5000/api/room/addTT`, {
            id: route.params.roomChat.id,
            mems: members
        })
        navigation.navigate("ChatNhom", { data: data.data })
    }
    const RenderItem = ({ item, user }) => {
        // const addMem = async (item) => {
        //     dsTam = [...dsMem]
        //     dsTam.push(item._id)
        //     setdsMem(dsTam)
        // }

        // const [checked, setChecked] = React.useState(false);
        return (
            <TouchableOpacity >
                <ListItem>
                    {/* <Checkbox style={{ borderRadius: 15 }}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    /> */}
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.username}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        );
    }
    const Item = ({ item, click, onPress, backgroundColor, textColor, index }) => (
        <TouchableOpacity >
                <ListItem>
                    {/* <Checkbox style={{ borderRadius: 15 }}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    /> */}
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.username}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
    );
    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
                index={index}
               
            // onPress={() => {
            //        setcick(DATA.indexOf(item))
            //     }
            // }  
            />
        );
    };
    return (
        <View style={style.main}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <View>
                    <TouchableOpacity>
                        <Ionicons title="Hủy tạo nhóm" size={25} name="close" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Thêm vào nhóm
                    </Text>
                    <Text>
                        Đã chọn: 0
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            <View>
                <SearchBar
                    placeholder="Tìm kiếm số điện thoại"
                    inputContainerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 15, width: 370, marginLeft: 10, height: 45 }} />
            </View>
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#d3d3d3', width: 50, alignItems: 'center', height: 50, borderRadius: 50 }}>
                        <EvilIcons style={{ marginTop: 10 }} name="link" size={30} color='blue' />
                    </TouchableOpacity>
                    <Text fontSize={17} style={{ height: 44, margin: 10, borderWidth: 1, padding: 10, width: 270, borderColor: 'white' }}>Mời vào nhóm bằng link</Text>
                    <EvilIcons name="chevron-right" size={25} />
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={dsTV}
                    renderItem={renderItem}
                    // horizontal
                 
                />
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            <View style={{ alignItems: 'center', justifyContent: "center", flex: 0.1 }}>
                <TouchableOpacity style={{ backgroundColor: 'yellow', borderRadius: 15, height: 40, width: 200 }}>
                    <Text style={{ marginTop: 10, marginLeft: 50 }}>Thêm vào nhóm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


};



export default ThemThanhVien;

const style = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 25,
        backgroundColor: 'white'
    },
});