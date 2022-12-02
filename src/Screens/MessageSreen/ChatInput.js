import React, { useState, useEffect, useRef, memo } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity,
} from "react-native";

import { Api } from "../../Global/Axios/Api";
import { loginRoute, sendMessageRoute } from "../../util/API"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../Mau/theme";

const ChatInput = ({ route ,messages,setMessages}) => {
	const from = route.params.user._id
	const to = route.params.to
	const socket = route.params.socket
	const [mess, setmess] = useState("");
	
	const send = async () => {
		console.log("send");
		const { data } = await Api.post(sendMessageRoute, {
			from,
			to,
			message: mess,
			avatarImage:route.params.user.avatarImage
		});
		
		socket.current.emit("send-msg", {
			to: to,
			from: from,
			msg: mess,
			avatarImage:route.params.user.avatarImage
		});
		const msgs = [...messages];
		msgs.push({ fromSelf: true, message: mess, reaction: "" });
		setMessages(msgs);
		setmess("")
	}

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<View style={styles.inputAndMicrophone}>
					<TouchableOpacity style={styles.emoticonButton}>
						<Icon name="emoticon-outline" size={23} color={theme.colors.description} />
					</TouchableOpacity>
					<TextInput
						multiline
						value={mess}
						placeholder="Type something..."
						style={styles.input}
						onChangeText={newText => setmess(newText)}
					/>
					<TouchableOpacity>
						<Icon name="paperclip" size={23} color={theme.colors.description} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon name="camera" size={23} color={theme.colors.description} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon name="image" size={23} color={theme.colors.description} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.sendButton} onPress={send}>
						<Icon name={mess ? "send" : "microphone"} size={23} color={theme.colors.white} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		backgroundColor: theme.colors.white,
	},
	replyContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	title: {
		marginTop: 5,
		fontWeight: "bold",
	},
	closeReply: {
		position: "absolute",
		right: 10,
		top: 5,
	},
	reply: {
		marginTop: 5,
	},
	innerContainer: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 10,
	},
	inputAndMicrophone: {
		flexDirection: "row",
		backgroundColor: theme.colors.inputBackground,
		flex: 3,
		marginRight: 10,
		paddingVertical: Platform.OS === "ios" ? 10 : 0,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "space-between",
	},
	input: {
		backgroundColor: "transparent",
		paddingLeft: 20,
		color: theme.colors.inputText,
		flex: 3,
		fontSize: 15,
		height: 50,
		alignSelf: "center",
	},
	rightIconButtonStyle: {
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 15,
		paddingLeft: 10,
		borderLeftWidth: 1,
		borderLeftColor: "#fff",
	},
	swipeToCancelView: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 30,
	},
	swipeText: {
		color: theme.colors.description,
		fontSize: 15,
	},
	emoticonButton: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 10,
	},
	recordingActive: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 10,
	},
	recordingTime: {
		color: theme.colors.description,
		fontSize: 20,
		marginLeft: 5,
	},
	microphoneAndLock: {
		alignItems: "center",
		justifyContent: "flex-end",
	},
	lockView: {
		backgroundColor: "#eee",
		width: 60,
		alignItems: "center",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		height: 130,
		paddingTop: 20,
	},
	sendButton: {
		backgroundColor: theme.colors.primary,
		borderRadius: 50,
		height: 50,
		width: 50,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ChatInput;