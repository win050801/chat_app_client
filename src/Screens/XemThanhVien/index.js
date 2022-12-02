import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon2 from "@expo/vector-icons/AntDesign";
import { theme } from "../../Mau/theme";
import { Api } from "../../Global/Axios/Api";
import { allUsersRoute, getRoom, host } from "../../util/API"
const XemThanhVien = ({ route }) => {
    const navigation = useNavigation();
 
    const [data,setdata] =useState([])
    // var user = props.user
    // const id = user._id
    // console.log(route.params);

    // const data = route.params.data
    // const [dsMem,setdsMem] = useState([])
    // const [roomName , setRoomName] = useState()



    useEffect(() => {
        async function fetchData() {


            const { data } = await Api.post(allUsersRoute, {
            });
            
            const dataTam = []
            route.params.roomChat.members.forEach(element => {
                data.forEach(e => {
                    if(e._id===element)
                    {
                        dataTam.push(e)
                    }
                });
            });
            setdata(dataTam)


        }
        fetchData();
    },[]);
    // const them =async ()=>{
    //     dsTam = [...dsMem]
    //     dsTam.push(route.params.user._id)
    //     console.log(roomName);
    //     const { data } = await Api.post(`http://192.168.14.106:5000/api/room/addRoom`, { 
    //         manager:route.params.user._id,
    //         members:dsTam,
    //         roomName:roomName
    //         });
    // navigation.navigate("ChatNhom",{data:data.data})
    // }
    const RenderItem = ({ item, user }) => {
        const addMem = async (item) => {
            //    dsTam = [...dsMem]
            //    dsTam.push(item._id)
            //    setdsMem(dsTam)
        }



        const [checked, setChecked] = React.useState(false);
        return (
            <TouchableOpacity onPress={() => addMem(item)}>
                <ListItem>
                    
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: `${item.avatarImage}` }} />
                    <ListItem.Content>
                        {item._id=== route.params.roomChat.manager ? (<><ListItem.Title>{item.username}     (Nhóm trưởng)</ListItem.Title></>):(<><ListItem.Title>{item.username}</ListItem.Title></>)}
                        

                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        );
    }
    return (
        <View style={style.main}>
            <View style={{ height: 65, backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Icon2 style={{ marginTop: 30, marginLeft: 20 }}
                        name="left"
                        size={25}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
                <Text style={{ marginTop: 30, marginLeft: 15, fontSize: 17, fontWeight: 'bold', color: 'white' }}>Thành viên</Text>
                <TouchableOpacity
                    style={{ paddingHorizontal: 5, marginTop: 30, marginLeft: 160 }}
                >
                    <Icon2
                        name="addusergroup"
                        size={30}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingHorizontal: 10, marginTop: 30 }}
                >
                    <Icon2
                        name="search1"
                        size={30}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>

            <View style={{ flex: 0.06, flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Text>TẤT CẢ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20 }}>
                    <Text>ĐÃ MỜI</Text>
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>

            <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text>Thành viên ({route.params.roomChat.members.length})</Text>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList

                ListHeaderComponent={() => <View></View>}
                data={data}
                renderItem={({ item }) => <RenderItem item={item}/>}
                />
            </View>
        </View>
    );


};



export default XemThanhVien;

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
});