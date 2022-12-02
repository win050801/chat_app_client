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
const TuyChonChatDon = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ height: 60, backgroundColor: 'blue', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate("MessageScreen")}>
                    <Icon2 style={{ marginTop: 25, marginLeft: 20 }}
                        name="left"
                        size={25}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
                <Text style={{ marginTop: 25, marginLeft: 15, fontSize: 17, fontWeight: 'bold', color: 'white' }}>Tùy chọn</Text>
            </View>
            <ScrollView>
                <View style={{ alignSelf: 'center', marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar
                        size={100}
                        borderRadius={100}
                        source={{}}
                        backgroundColor={'red'}
                        activeOpacity={0.7}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TextInput textAlign="center" fontSize={20} value={"Hoàng Tiến Mạnh Đức"} style={{ height: 44, margin: 10, borderWidth: 1, padding: 10, width: 300, borderColor: 'white' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50, alignItems: 'center' }}>
                            <Feather name="search" size={20} />
                        </View>
                        <Text>Tìm</Text>
                        <Text>tin nhắn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("ThemThanhVien")}>
                        <View style={{ backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50, alignItems: 'center' }}>
                            <Feather name="user" size={20} />
                        </View>
                        <Text>Trang</Text>
                        <Text>cá nhân</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50, alignItems: 'center' }}>
                            <Entypo name="round-brush" size={20} />
                        </View>
                        <Text>Đổi</Text>
                        <Text>hình nền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50, alignItems: 'center' }}>
                            <Feather name="bell" size={20} />
                        </View>
                        <Text>Tắt</Text>
                        <Text>thông báo</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15, justifyContent: "space-between" }}>
                        <Icon2 name="lock" size={30} />
                        <View style={{ marginRight: 160 }}>
                            <Text style={{ fontSize: 15 }}>Mã hóa đầu cuối</Text>
                            <Text style={{ fontSize: 14, color: 'gray' }}>Chưa nâng cấp</Text>
                        </View>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>

                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start' }}>
                        <Feather name="edit-3" size={25} />
                        <Text style={{ marginLeft: 30, fontSize: 15 }}>Đổi tên gợi nhớ</Text>
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Icon2 name="staro" size={25} />
                        <Text style={{ marginRight: 145, fontSize: 15 }}>Đánh dấu bạn thân</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <EvilIcons name="clock" size={30} />
                        <Text style={{ marginRight: 185, fontSize: 15 }}>Nhật kí chung</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>

                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <EvilIcons name="image" size={30} />
                        <Text style={{ marginRight: 150, fontSize: 15 }}>Ảnh, file, link đã gửi</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 50 }}></View>

                <View style={{ marginLeft: 10 }}>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Icon2 name="addusergroup" size={25} />
                        <View style={{ width: 250, height: 25, marginRight: 25 }}>
                            <Text style={{ fontSize: 15 }}>Tạo nhóm với Đức</Text>
                        </View>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Icon2 name="adduser" size={25} />
                        <View style={{ width: 250, height: 25, marginRight: 25 }}>
                            <Text style={{ fontSize: 15 }}>Thêm Đức vào nhóm</Text>
                        </View>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>
                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Feather name="users" size={25} />
                        <View style={{ width: 250, height: 25, marginRight: 25 }}>
                            <Text style={{ fontSize: 15 }}>Xem nhóm chung</Text>
                        </View>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10, marginTop: 20 }}></View>
        
                <View style={{marginLeft:10}}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Icon2 name="pushpino" size={25} />
                        <Text style={{ marginRight: 165, fontSize: 15 }}>Ghim trò chuyện</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Feather style={{ marginLeft: 5 }} name="eye-off" size={20} />
                        <Text style={{ marginRight: 180, fontSize: 15 }}>Ẩn trò chuyện</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Feather style={{ marginLeft: 5 }} name="phone-incoming" size={20} />
                        <Text style={{ marginRight: 130, fontSize: 15 }}>Báo cáo cuộc gọi đến</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <FontAwesome5 name="user-cog" size={20} />
                        <Text style={{ marginRight: 170, fontSize: 15 }}>Cài đặt cá nhân</Text>
                        <EvilIcons name="chevron-right" size={25} />
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start' }}>
                        <MaterialCommunityIcons name="alarm" size={25} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 15 }}>Cài đặt cá nhân</Text>
                            <Text style={{ color: 'gray' }}>Không tự xóa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10, marginTop: 20 }}></View>
                
                <View style={{marginLeft:10}}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15,justifyContent:'flex-start' }}>
                        <Feather name="alert-triangle" size={20} />
                        <Text style={{ marginLeft: 35, fontSize: 15 }}>Báo Xấu</Text>
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }}>
                        <FontAwesome5 name="ban" size={20} />
                        <Text style={{ marginLeft: 35, fontSize: 15 }}>Chặn tin nhắn</Text>
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15,justifyContent:'flex-start' }}>
                        <Feather name="pie-chart" size={22} />
                        <Text style={{ marginLeft: 34, fontSize: 15 }}>Dung lượng trò chuyện</Text>
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15,justifyContent:'flex-start' }}>
                        <EvilIcons name="trash" size={30} />
                        <Text style={{ marginLeft: 25, fontSize: 15 }}>Xóa lịch sử trò chuyện</Text>
                    </TouchableOpacity>

                    <View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default TuyChonChatDon;