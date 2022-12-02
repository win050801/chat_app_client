import React, { useState, useRef, useEffect } from "react";
import { ScrollView ,Alert} from "react-native";
import { Api } from "../../Global/Axios/Api";
import Message from "./Message";

import { theme } from "../../Mau/theme";
import { recieveMessageRoute } from "../../util/API"
const MessagesList = ({ route ,messages,setMessages}) => {
	const scrollRef = useRef();
	const scrollView = useRef();
	
	
	useEffect(() => {
	
		scrollView.current.scrollToEnd({ animated: true })
	  }, [messages]);
	
	const from = route.params.user._id
	// console.log(route.params);
	const to = route.params.to
	const socket = route.params.socket
	
	const user = useRef(0);
	

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				
				scrollView.current.scrollToEnd({ animated: true })
			}}
		>
			{messages.map((message, index) => (
				<Message
					key={index}
					time={message.time}
					isLeft={message.fromSelf !== true}
					message={message}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;