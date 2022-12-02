import React ,{useState,useEffect,useRef}from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import ActiveUser from "./ActiveUser";
import Recent from "./Recent";
import Footer from "./Footer";
import HeaderDanhBa from "../DanhBa/HeaderDanhBa"
import NhomDanhBa from "../DanhBa/NhomDanhBa"
import BanBeDanhBa from "../DanhBa/BanBeDanhBa"
import DanhBa from "../DanhBa/index"
import { useNavigation } from '@react-navigation/native';
import { allUsersRoute,getCurrentFriend, getRoom, host } from "../../util/API"
import { Api } from "../../Global/Axios/Api";
import { LogBox } from "react-native";
import { io } from "socket.io-client";
import Profile from "../Profile"
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const HomeScreen = (props) => {
   
    const socket = useRef();
    socket.current = io(host);
    const navigation = useNavigation()
    var user = props.user
    // console.log(user);
    const id = user._id
    const [data, setdata] = useState([])
   
    useEffect(() => {
        async function fetchData() {
         
            const response = await Api.post(getCurrentFriend, {
                currentUserId: id
            });
          
            setdata(response.data.data2)
            // console.log(setdata(data));
        }
        fetchData();
    },[]);
    const [tinNhan,setTinNhan] = useState(true)
    const [danhBa,setDanhBa] = useState(false)
    const [visible, setVisible] = React.useState(false);
    
    return (
        <View style={{flex:1}}>
            <View style={{flex:0.1 ,height:"100%",minHeight:50,backgroundColor:"white"}}>
                <HeaderDanhBa navigation={navigation} socket={socket} user={user} data={data} tinNhan={tinNhan} setVisible={setVisible}></HeaderDanhBa>
            </View>
            <View style={{flex:0.83,height:"100%",backgroundColor:"white"}}>
                {tinNhan===true ? (<View><Recent user={user} /></View>):(<>{danhBa === true ? (<View><DanhBa user={user}></DanhBa></View>):(<View><Profile user={user}></Profile></View>)}</>)}
            </View>
            <View style={{flex:0.07,height:"100%"}}>
                <Footer setTinNhan={setTinNhan} setDanhBa={setDanhBa}></Footer>
            </View>

        </View>


    )
}

export default HomeScreen

const style = StyleSheet.create({})