import React, { useState, useCallback, useEffect } from 'react'
import { View,Text,TextInput, Button ,Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
import ChatHeader from "../ChatNhom/ChatHeader";
import ChatInput from "../ChatNhom/ChatInput";
import MessengerList from "../ChatNhom/MessengerList";

export function ChatNhom({navigation,route}) {
// console.log(route.params);
  return(
    <View style={{flex:1}}>
      <ChatHeader />
      <MessengerList />
      <ChatInput />
    </View>
  )
}

export default ChatNhom