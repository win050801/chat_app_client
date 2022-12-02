import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";
import Icon2 from "@expo/vector-icons/AntDesign";

import { theme } from "../../Mau/theme";

const ChatHeader = ({route}) => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate("BottomTabNavigator",{user: route.params.user})} >
				<Icon name="angle-left" size={30} color={theme.colors.white} />
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					{route.params.currenChat.avatarImage!=="" ?(<Image style={styles.hinh} source={{ uri: `${route.params.currenChat.avatarImage}` }}  />):(<Image style={styles.hinh} source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdGAFZS8P9rXmHkXMDp_vgYHzKMsrO5xSww&usqp=CAU` }}  />)}
					
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{route.params.currenChat.username}</Text>
						<Text style={styles.onlineStatus}>Online</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.options}>
					<TouchableOpacity
						style={{ paddingHorizontal: 5 }}
					>
						<Icon
							name="phone"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ paddingHorizontal: 10 }}
					>
						<Icon
							name="video-camera"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => navigation.navigate("TuyChonChatDon")}>
						<Icon2
							name="bars"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor:'#00bfff',
		paddingTop: 40,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	hinh: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
		backgroundColor:'blue'
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
		
	},
	username: {
		color: theme.colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: theme.colors.white,
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;