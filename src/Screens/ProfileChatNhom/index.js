import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";
import Icon2 from "@expo/vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Input } from 'react-native-elements';
import { theme } from "../../Mau/theme";
import { Api } from "../../Global/Axios/Api";
import {addTT} from "../../util/API"
const ProfileChatNhom = ({route}) => {
	const navigation = useNavigation()
	const roiNhom =async ()=>{
		const members = [...route.params.roomChat.members]
		members.splice(members.indexOf(route.params.user._id),1)
		console.log("test");
		const respon = await Api.post(addTT, { 
            id:route.params.roomChat.id,
			mems:members
        });
		console.log(respon);
		// route.params.setdata([])
		navigation.navigate("BottomTabNavigator",{user:route.params.user})
	}
	return (
		<ScrollView style={styles.container}>
			<View style={{ height: 60, backgroundColor: 'blue', flexDirection: 'row' }}>
				<TouchableOpacity onPress={()=>navigation.navigate("ChatNhom")}>
					<Icon2 style={{ marginTop: 25, marginLeft: 20 }}
						name="left"
						size={25}
						color={theme.colors.white}
					/>
				</TouchableOpacity>
				<Text style={{ marginTop: 25, marginLeft: 15, fontSize: 17, fontWeight: 'bold', color: 'white' }}>Tùy chọn</Text>
			</View>
			<View style={{ alignSelf: 'center', marginVertical: 10, flexDirection: 'row' }}>
				<Avatar
					size={100}
					borderRadius={100}
					source={{}}
					backgroundColor={'red'}
					activeOpacity={0.7}
				/>
				<TouchableOpacity style={{ alignSelf: 'flex-end' }}>
					{<Feather name="camera" size={20} />}
				</TouchableOpacity>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }} >
				<TextInput textAlign="center" fontSize={20} value={route.params.roomChat.roomName} style={{ height: 44, margin: 10, borderWidth: 1, padding: 10, width: 300, borderColor: 'white' }} />
				<TouchableOpacity style={{ marginTop: 25 }}>
					<Feather name="edit-3" size={25} />
				</TouchableOpacity>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
				<TouchableOpacity>
					<View style={{ marginLeft: 5, backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50 }}>
						<Feather style={{ marginLeft: 5 }} name="search" size={20} />
					</View>
					<View >
						<Text>{`  Tìm`}</Text>
						<Text>{`tin nhắn`}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("ThemThanhVien")}>
					<View style={{ marginLeft: 13, backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50 }}>
						<Feather style={{ marginLeft: 5 }} name="user-plus" size={20} />
					</View>
					<View>
						<Text>{`   Thêm`}</Text>
						<Text>{`thành viên`}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{ marginLeft: 5, backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50 }}>
						<Entypo style={{ marginLeft: 5 }} name="round-brush" size={20} />
					</View>
					<View >
						<Text>{`   Đổi`}</Text>
						<Text>{`hình nền`}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{ marginLeft: 10, backgroundColor: '#e6e6fa', height: 30, width: 30, justifyContent: 'center', borderRadius: 50 }}>
						<Feather style={{ marginLeft: 5 }} name="bell" size={20} />
					</View>
					<View>
						<Text>{`    Tắt`}</Text>
						<Text>{`thông báo`}</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10 }}></View>
			<View>
				
				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<EvilIcons name="image" size={30} />
					<Text style={{ marginLeft: 20 }}>Ảnh, file, link đã gửi</Text>
					<EvilIcons style={{ marginLeft: 180 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 50 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<EvilIcons name="calendar" size={30} />
					<Text style={{ marginLeft: 20 }}>Lịch nhóm</Text>
					<EvilIcons style={{ marginLeft: 235 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Icon2 name="pushpino" size={25} />
					<Text style={{ marginLeft: 20 }}>Tin nhắn đã ghim</Text>
					<EvilIcons style={{ marginLeft: 195 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Feather name="bar-chart" size={25} />
					<Text style={{ marginLeft: 20 }}>Bình chọn</Text>
					<EvilIcons style={{ marginLeft: 240 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10, marginTop: 20 }}></View>

				<TouchableOpacity onPress={() => navigation.navigate("XemThanhVien")} style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Feather style={{ marginLeft: 5 }} name="users" size={20} />
					<Text style={{ marginLeft: 20 }}>Xem thành viên</Text>
					<EvilIcons style={{ marginLeft: 207 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<EvilIcons name="link" size={30} />
					<Text style={{ marginLeft: 20 }}>Link tham gia nhóm</Text>
					<EvilIcons style={{ marginLeft: 177 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Icon2 name="pushpino" size={25} />
					<Text style={{ marginLeft: 20 }}>Ghim trò chuyện</Text>
					<EvilIcons style={{ marginLeft: 202 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Feather style={{ marginLeft: 5 }} name="eye-off" size={20} />
					<Text style={{ marginLeft: 20 }}>Ẩn trò chuyện</Text>
					<EvilIcons style={{ marginLeft: 218 }} name="chevron-right" size={25} />
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>
				
				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<FontAwesome5 name="user-cog" size={20} />
					<Text style={{ marginLeft: 20 }}>Cài đặt cá nhân</Text>
					<EvilIcons style={{ marginLeft: 207 }} name="chevron-right" size={25} />
				</TouchableOpacity>
				
				<View style={{ height: 10, backgroundColor: '#e6e6fa', marginTop: 10, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Feather style={{ marginLeft: 5 }} name="alert-triangle" size={20
					} />
					<Text style={{ marginLeft: 20 }}>Báo Xấu</Text>
				</TouchableOpacity>
				
				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>
				
				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Icon2 name="piechart" size={25} />
					<Text style={{ marginLeft: 20 }}>Dung lượng trò chuyện</Text>
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>

				<TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<EvilIcons name="trash" size={30} />
					<Text style={{ marginLeft: 20 }}>Xóa lịch sử trò chuyện</Text>
				</TouchableOpacity>

				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>
				
				<TouchableOpacity onPress={roiNhom} style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
					<Ionicons style={{ marginLeft: 5 }} name="ios-log-out-outline" size={20} />
					<Text style={{ marginLeft: 20 }}>Rời nhóm</Text>
				</TouchableOpacity>
				<View style={{ height: 1.5, backgroundColor: '#e6e6fa', marginTop: 10, width: 340, marginLeft: 55, marginTop: 20 }}></View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

export default ProfileChatNhom;