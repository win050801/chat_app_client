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
const XemThanhVien = ({ props }) => {
    const navigation = useNavigation();

    // var user = props.user
    // const id = user._id
    // console.log(route.params);

    // const data = route.params.data
    // const [dsMem,setdsMem] = useState([])
    // const [roomName , setRoomName] = useState()



    // useEffect(() => {
    //     async function fetchData() {


    // const { data } = await Api.post(`http://192.168.14.106:5000/api/auth/allusers`, { 
    // id:id
    // });
    //         setdata(data)


    //     }
    //     fetchData();
    //   });
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
                    <Checkbox style={{ borderRadius: 15 }}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.username}</ListItem.Title>
                        <ListItem.Title>Text</ListItem.Title>
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

            <View style={{ flex: 0.06, flexDirection: 'row',marginLeft:15,alignItems:'center' }}>
                <TouchableOpacity>
                    <Text>TẤT CẢ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:20}}>
                    <Text>ĐÃ MỜI</Text>
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            
            <View style={{marginLeft:15,marginTop:10}}>
            <Text>Thành viên (1)</Text>
            </View>
            
            <View style={{ flex: 1 }}>
                <FlatList

                // ListHeaderComponent={() => <View></View>}
                // data={data}
                // renderItem={({ item }) => <RenderItem item={item}/>}
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