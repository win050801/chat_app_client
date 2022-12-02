import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
import ChatHeader from "../MessageSreen/ChatHeader";
import ChatInput from "../MessageSreen/ChatInput";
import MessengerList from "../MessageSreen/MessengerList";
import { LogBox } from "react-native";
import { recieveMessageRoute } from "../../util/API"
LogBox.ignoreLogs(["Non-serializable"]);
export function MessageScreen({ route }) {
  // console.log(route.params);
  const from = route.params.user._id
  // console.log(route.params);
  const to = route.params.to
  const socket = route.params.socket
  const [messages, setMessages] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState("");
  useEffect(() => {
    async function fetchData() {

      const { data } = await Api.post(recieveMessageRoute, {
        from, to
      });

      setMessages(data)
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      if (socket.current) {
        await socket.current.on("msg-recieve", ({
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
  return (
    <View style={{ flex: 1 }}>
      <ChatHeader route={route} />
      <MessengerList route={route} messages={messages} setMessages={setMessages} />
      <ChatInput route={route} messages={messages} setMessages={setMessages} />
    </View>
  )
}

export default MessageScreen