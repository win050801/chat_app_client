import React, { useState, useCallback, useEffect } from 'react'
import { View,Text,TextInput, Button ,Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
import HeaderChatNhom from "../ChatNhom/HeaderChatNhom";
import InputChatNhom from "../ChatNhom/InputChatNhom";
import MessengerListChatNhom from "../ChatNhom/MessengerListChatNhom";

export function ChatNhom({navigation,route,props,data}) {
  const [messages, setMessages] = useState([]);
  console.log(route);
  
  return(
    <View style={{flex:1}}>
      <HeaderChatNhom roomChat={route.params.item}  user ={route.params.user}/>
      <MessengerListChatNhom roomChat={route.params.item} user ={route.params.user} messages={messages} setMessages={setMessages} />
      <InputChatNhom setMessages={setMessages}  messages={messages} roomChat={route.params.item} user ={route.params.user}/>
    </View>
  )
}

export default ChatNhom