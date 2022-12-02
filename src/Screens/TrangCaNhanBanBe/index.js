import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Icon2 from "@expo/vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Input } from 'react-native-elements';
import { theme } from "../../Mau/theme";
import { Api } from "../../Global/Axios/Api";
const TrangCaNhanBanBe = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/bg.png')} resizeMode="cover" style={{ height: 200, with: "100%" }}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
                    <View>
                        <TouchableOpacity>
                            <Icon2 style={{ marginLeft: 15,color:'white' }} name="left" size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginRight:15}}>
                        <TouchableOpacity style={{ marginRight: 25 }}>
                        <Feather color={'white'} name="phone" size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 25 }}>
                        <FontAwesome5 color={'white'} name="user-cog" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("TuyChonBanBe")}>
                        <Feather color={'white'} name="more-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginVertical: 10, flexDirection: 'row', alignItems: 'center', position: 'absolute', marginTop: 140 }}>
                    <Avatar
                        size={130}
                        borderRadius={100}
                        source={{}}
                        backgroundColor={'red'}
                        activeOpacity={0.7}
                    />
                </View>
            </ImageBackground>
            <View style={{ alignItems: 'center', marginTop: 80, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Hoàng Tiến Mạnh Đức</Text>
                <Feather style={{ marginLeft: 10 }} name="edit-3" size={25} />
            </View>
            <View style={{marginTop:20,width:"100%",alignItems:'center'}}>
                <View style={{width:"90%",alignItems:'center'}}>
                <Text style={{fontSize:18,color:'gray'}}>Chưa có hoặt động nào. Hãy trò chuyện để</Text>
                <Text style={{fontSize:18,color:'gray'}}>hiểu nhau hơn</Text>
                </View>
            </View>
            <View style={{ marginTop: 300,marginLeft:200, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#f0f8ff', height: 40, width: 130, justifyContent: 'center', borderRadius: 50, alignItems: 'center', flexDirection: 'row' }}>
                        <Icon2 name="message1" size={25} color={'blue'} />
                        <Text style={{ fontSize: 17,  marginLeft: 10 }}>Nhắn tin</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default TrangCaNhanBanBe;