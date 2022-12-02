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
const TrangCaNhan = ({route}) => {
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
                    <View style={{ flexDirection: 'row', marginRight: 15 }}>
                        <TouchableOpacity style={{ marginRight: 25 }}>
                            <MaterialCommunityIcons color={'white'} name="clock-time-nine-outline" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("TuyChonTrangCaNhan",{user:route.params.user})}>
                            <Feather color={'white'} name="more-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginVertical: 10, flexDirection: 'row', alignItems: 'center', position: 'absolute', marginTop: 140 }}>
                    <Avatar
                        size={130}
                        rounded
                        source={{uri: `${route.params.user.avatarImage}`}}
                        backgroundColor={'red'}
         
                    />
                </View>
            </ImageBackground>
            <View style={{ alignItems: 'center', marginTop: 80 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{route.params.user.username}</Text>
            </View>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <Feather style={{ marginLeft: 10,color:'blue' }} name="edit-3" size={15} />
                <Text style={{ fontSize: 14,color:'blue' }}>Cập nhật giới thiệu bản thân</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default TrangCaNhan;