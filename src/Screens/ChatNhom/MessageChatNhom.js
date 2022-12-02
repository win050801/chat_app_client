import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { ListItem, Avatar, Button, Image } from 'react-native-elements';
import { theme } from "../../Mau/theme";
import ImageView from "react-native-image-viewing";

const MessageChatNhom = ({ time, isLeft, message }) => {
	const images = [
		{
			uri: "https://appchat-picture-profile.s3.us-west-1.amazonaws.com/image-1669896334146%2B1.jpg",
		},
	];

	const [img, setimg] = useState([])
	const clickImage = (img) => {

		const imgTam = []
		imgTam.push({ uri: `${img[0]}` })
		setimg(imgTam)
	}
	const [visible, setIsVisible] = useState(false);
	const isOnLeft = (type) => {
		if (isLeft && type === "messageContainer") {
			return {
				alignSelf: "flex-start",
				backgroundColor: "#f0f0f0",
				borderTopLeftRadius: 0,
			};
		} else if (isLeft && type === "message") {
			return {
				color: "#000",
			};
		} else if (isLeft && type === "time") {
			return {
				color: "darkgray",
			};
		} else {
			return {
				borderTopRightRadius: 0,
			};
		}
	};
	return (
		<View style={styles.container}>
			{message.fromSelf===false && message.avatarImage!=="" ? (<Avatar
					size="small"
					rounded
					source={{ uri: `${message.avatarImage}` }}
				/>):(<></>) }
			
			<View style={[styles.messageContainer, isOnLeft('messageContainer')]}>
				
				<View style={styles.messageView}>
					{message.message !== "" && message.message !== undefined ? (<Text style={[styles.message, isOnLeft('message')]}>{message.message}</Text>) : (
						<View>
							<Avatar
								size="xlarge"
								source={{ uri: `${message.image}` }}
								onPress={() => { clickImage(message.image); setIsVisible(true) }}
							/>
							<ImageView
								images={img}
								imageIndex={0}
								visible={visible}
								onRequestClose={() => setIsVisible(false)}
							/>
						</View>
					)}
				</View>
				<View style={styles.timeView}>
					<Text style={[styles.time, isOnLeft('time')]}>{time}</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		marginVertical: 5,
	},
	messageContainer: {
		backgroundColor: theme.colors.messageBackground,
		maxWidth: "80%",
		alignSelf: "flex-end",
		flexDirection: "row",
		borderRadius: 15,
		paddingHorizontal: 10,
		marginHorizontal: 10,
		paddingTop: 5,
		paddingBottom: 15,
	},
	messageView: {
		backgroundColor: "transparent",
		maxWidth: "80%",
	},
	timeView: {
		backgroundColor: "transparent",
		justifyContent: "flex-end",
		paddingLeft: 10,
	},
	message: {
		color: "white",
		alignSelf: "flex-start",
		fontSize: 15,
	},
	time: {
		color: "lightgray",
		alignSelf: "flex-end",
		fontSize: 11,
	},
});

export default MessageChatNhom;