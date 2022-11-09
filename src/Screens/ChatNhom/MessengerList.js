import React, { useState, useRef, useEffect } from "react";
import { ScrollView } from "react-native";
import { Api } from "../../Global/Axios/Api";
import MessageChatNhom from "./MessageChatNhom";

import { theme } from "../../theme";

const MessagesList = ({route}) => {
	const [messages, setMessages] = useState([
		{
			user: 0,
			time: "12:00",
			content: "Hey",
		},
		{
			user: 1,
			time: "12:05",
			content: "What's up",
		},
		{
			user: 1,
			time: "12:07",
			content: "How is it going?",
		},
		{
			user: 0,
			time: "12:09",
			content: "things are going great",
		},
		{
			user: 0,
			time: "12:00",
			content: "Good :)",
		},
		{
			user: 1,
			time: "12:05",
			content: "Should we hang out tomorrow? I was thinking of going somewhere which has drinks",
		},
		{
			user: 0,
			time: "12:07",
			content: "Sure",
		},
	]);
   

	const user = useRef(0);
	const scrollView = useRef();

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
					isLeft={message.user !== user.current}
					message={message.content}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;