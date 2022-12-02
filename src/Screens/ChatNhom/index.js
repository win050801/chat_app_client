import React, { useState, useCallback, useEffect } from 'react'
import { View,Text,TextInput, Button ,Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
import HeaderChatNhom from "../ChatNhom/HeaderChatNhom";
import InputChatNhom from "../ChatNhom/InputChatNhom";
import MessengerListChatNhom from "../ChatNhom/MessengerListChatNhom";

export function ChatNhom({route,props,data}) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      if (route.params.socket.current) {
        await route.params.socket.current.on("msg-recieve", ({
          id,
          msg,
          namesend,
          avatarImage,
          files,
          image,
          deleteFromSelf,
          deletedToAll, }) => {
          
          setArrivalMessage({
            fromSelf: false,
            message: msg,
            image: image,
            files: "",
            id: id,
            avatarImage: avatarImage,
            namesend: namesend
        });
        });

      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    const msgs = [...messages];
          msgs.push(arrivalMessage);
          setMessages(msgs);
  }, [arrivalMessage]);
  
  return(
    <View style={{flex:1}}>
      <HeaderChatNhom roomChat={route.params.item} route={route}  user ={route.params.user}/>
      <MessengerListChatNhom roomChat={route.params.item} user ={route.params.user} messages={messages} setMessages={setMessages} />
      <InputChatNhom setMessages={setMessages}  messages={messages} socket={route.params.socket} roomChat={route.params.item} user ={route.params.user}/>
    </View>
  )
}

export default ChatNhom