import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../Global/Axios/Api";
import { allUsersRoute, getRoom, host, getnewMessages, getnewMessagesRoom,getCurrentFriend } from "../../util/API"
import { io } from "socket.io-client";
const Recent = (props) => {
    const navigation = useNavigation()
    const socket = useRef();
    var user = props.user
    // console.log(user);
    const id = user._id
    const [data, setdata] = useState([])
    useEffect(() => {
        async function fetchData() {

            if (user) {
                const id = user._id
                socket.current = io(host);

                socket.current.emit("add-user", id);
                if (allUsersRoute !== "" && getRoom !== "") {
                    const response = await Api.post(getCurrentFriend, {
                        currentUserId: user._id
                    });
                    const dataNhom = await Api.post(getRoom, {
                        id: id
                    });
                    const data =response.data.data2
                    const dataMess = []
                    for (let i = 0; i < data.length; i++) {
                        const respon = await Api.post(getnewMessages, {
                            from: user._id,
                            to: data[i]._id
                        });
                        if (respon.data) {
                            data[i].newmess = respon.data.message
                            data[i].createdAt = respon.data.createdAt
                            data[i].fromSelf = respon.data.fromSelf
                            // console.log(respon.data);
                        }
                        else {
                            data[i].createdAt = ""
                        }

                    }

                    const dataTam = [...response.data.data2]

                    for (let i = 0; i < dataNhom.data.length; i++) {
                        const respon = await Api.post(getnewMessagesRoom, {
                            from: user._id,
                            id: dataNhom.data[i].id
                        });
                        if (respon.data) {
                            dataNhom.data[i].newmess = respon.data.message
                            dataNhom.data[i].createdAt = respon.data.createdAt
                            dataNhom.data[i].fromSelf = respon.data.fromSelf
                            dataNhom.data[i].namesend = respon.data.namesend
                           
                        }
                        else {
                            dataNhom.data[i].createdAt = ""
                        }
                        dataTam.push(dataNhom.data[i])
                    }

                    var tg;
                    for (let i = 0; i < dataTam.length - 1; i++) {
                        for (let j = i + 1; j < dataTam.length; j++) {
                            if (dataTam[i].createdAt < dataTam[j].createdAt) {
                                // Hoan vi 2 so a[i] va a[j]
                                tg = dataTam[i];
                                dataTam[i] = dataTam[j];
                                dataTam[j] = tg;
                            }
                        }
                    }
                    setdata(dataTam)
                }


            }

        }
        fetchData();
    }, [props]);
    const RenderItem = ({ item, user }) => {
        const navigation = useNavigation()
        return (
            <View>

                {item.roomName === undefined ? (<View>
                    <TouchableOpacity onPress={() => navigation.navigate("MessageScreen", { user: user, to: item._id, socket: socket, currenChat: item })}>
                        <ListItem>
                            {item.avatarImage !== "" ? (<Avatar
                                size="medium"
                                rounded

                                source={{ uri: `${item.avatarImage}` }}
                            />) : (<Avatar
                                size="medium"
                                rounded

                                source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdGAFZS8P9rXmHkXMDp_vgYHzKMsrO5xSww&usqp=CAU` }}
                            />)}

                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: 18, fontWeight: "bold" }}>{item.username}</ListItem.Title>
                                {item.fromSelf === true ? (<Text style={{ fontSize: 15, color: "gray" }}>Bạn :{item.newmess}</Text>) : (<Text style={{ fontSize: 15, color: "gray" }}>{item.newmess}</Text>)}
                            </ListItem.Content>
                            <Text>{item.createdAt}</Text>
                        </ListItem>
                    </TouchableOpacity>

                </View>) : (<View>
                    <TouchableOpacity onPress={() => navigation.navigate("ChatNhom", { item, user, socket })}>
                        <ListItem>
                            {item.avatarImage!=="" ? (<Avatar
                                size="medium"
                                rounded
                                source={{ uri: `https://e7.pngegg.com/pngimages/901/452/png-clipart-computer-icons-users-group-avatar-computer-icons-users-group.png` }}>

                            </Avatar>):(<Avatar
                                size="medium"
                                rounded
                                source={{ uri: `https://e7.pngegg.com/pngimages/901/452/png-clipart-computer-icons-users-group-avatar-computer-icons-users-group.png` }}>
                            </Avatar>)}
                            
                            
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: 18, fontWeight: "bold" }}>{item.roomName}</ListItem.Title>
                                {item.fromSelf === true ? (<>{item.newmess !== "" ? (<Text style={{ fontSize: 15, color: "gray" }}>Bạn : {item.newmess}</Text>):(<Text style={{ fontSize: 15, color: "gray" }}>Hình ảnh</Text>)}</>) : (
                                <>{item.newmess !== "" ? (<Text style={{ fontSize: 15, color: "gray" }}>{item.newmess}</Text>):(<Text style={{ fontSize: 15, color: "gray" }}>Hình ảnh</Text>)}</>)}

                            </ListItem.Content>
                            <Text>{item.createdAt}</Text>
                        </ListItem>
                    </TouchableOpacity>

                </View>)}

            </View>
        );
    }
    return (

        <FlatList
            ListHeaderComponent={() => <View></View>}
            data={data}
            renderItem={({ item }) => <RenderItem item={item} user={user} />}
        />



    );
};


export default Recent

const style = StyleSheet.create({})

