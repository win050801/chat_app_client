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
const ThongTinBanBe = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/bg.png')} resizeMode="cover" style={{ height: 200, with: "100%" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                    <View>
                        <TouchableOpacity>
                            <Icon2 style={{ marginLeft: 15, color: 'white' }} name="left" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', position: 'absolute', marginTop: 120, marginLeft: 25 }}>
                    <Avatar
                        size={60}
                        borderRadius={100}
                        source={{}}
                        backgroundColor={'red'}
                        activeOpacity={0.7}
                    />
                    <Text style={{fontSize:17, fontWeight:'bold',color:'white',marginLeft:20}}>Hoàng Tiến Mạnh Đức</Text>
                    <TouchableOpacity style={{width:30,height:30,borderRadius:50,backgroundColor:'white',justifyContent:'center',alignItems:'center',marginLeft:20}}>
                        <Feather name="edit-3" size={20} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={{marginTop:20,marginLeft:20}}>
                <View>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Thông tin cá nhân</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <Text style={{fontSize:16,color:'gray'}}>Giới tính</Text>
                    <Text style={{marginLeft:70,fontSize:16}}>Nữ</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <Text style={{fontSize:16,color:'gray'}}>Ngày sinh</Text>
                    <Text style={{marginLeft:58,fontSize:16}}>08/04</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <Text style={{fontSize:16,color:'gray'}}>Điện thoại</Text>
                    <View style={{marginLeft:58,width:240}}>
                    <Text style={{fontSize:16}}>..............</Text>
                    <Text style={{color:'gray'}}>Số điện thoại chỉ hiển thị khi bạn có lưu số người này trong danh bạ</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }
});

export default ThongTinBanBe;