import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
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
const TuyChonBanBe = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ height: 70, backgroundColor: 'blue' }}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity >
                        <Icon2 style={{ marginTop: 25, marginLeft: 20 }}
                            name="left"
                            size={25}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 25, marginLeft: 15, fontSize: 17, fontWeight: 'bold', color: 'white' }}>Hoàng Tiến Mạnh Đức</Text>
                </View>
            </View>
            <View style={{marginTop:10,marginLeft:20}}>
                <TouchableOpacity onPress={() => navigation.navigate("ThongTinBanBe")}>
                    <Text style={{fontSize:17}}>Thông tin</Text>
                </TouchableOpacity>
                <View style={{ height: 1, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <TouchableOpacity style={{marginTop:10}}>
                    <Text style={{fontSize:17}}>Đổi tên gợi nhớ</Text>
                </TouchableOpacity>
                <View style={{ height: 1, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <TouchableOpacity style={{marginTop:10}}>
                    <Text style={{fontSize:17}}>Giới thiệu cho bạn</Text>
                </TouchableOpacity>
                <View style={{ height: 1, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <TouchableOpacity style={{marginTop:10}}>
                    <Text style={{fontSize:17}}>Báo xấu</Text>
                </TouchableOpacity>
                <View style={{ height: 2, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <TouchableOpacity style={{marginTop:10}}>
                    <Text style={{fontSize:17,color:'red'}}>Xóa Bạn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default TuyChonBanBe;