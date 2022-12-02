import React, { useState, useRef, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { Api } from "../../Global/Axios/Api";
import MessageChatNhom from "./MessageChatNhom";

import { theme } from "../../Mau/theme";
import { imageMessageSend, getMessagesRoom } from "../../util/API"
const MessagesListChatNhom = ({ route, roomChat, user, messages, setMessages }) => {

	useEffect(() => {
		async function fetchData() {
			const { data } = await Api.post(getMessagesRoom, {
				id: roomChat.id,
				from: user._id
			});


			setMessages(data)

		}
		fetchData();
	}, [])

	const scrollView = useRef();


	useEffect(() => {

		scrollView.current.scrollToEnd({ animated: true })
	}, [messages]);


	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		>

			{messages.map((message, index) => (
				<MessageChatNhom
					key={index}
					time={message.time}
					isLeft={message.fromSelf !== true}
					message={message}
				/>

			))}
		</ScrollView>
	);
};

export default MessagesListChatNhom;