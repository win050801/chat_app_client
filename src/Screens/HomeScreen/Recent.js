import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../Global/Axios/Api";
import { allUsersRoute, getRoom, host } from "../../util/API"
import { io } from "socket.io-client";
const Recent = (props) => {

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
                const { data } = await Api.post(allUsersRoute, {
                    id: id
                });
                const dataNhom = await Api.post(getRoom, {
                    id: id
                });

                const dataTam = [...data]
                dataNhom.data.forEach(element => {
                    dataTam.push(element)
                });
                setdata(dataTam)

            }

        }
        fetchData();
    }, []);
    const RenderItem = ({ item, user }) => {
        const navigation = useNavigation()
        return (
            <View>
                {item.roomName === undefined ? (<View>
                    <TouchableOpacity onPress={() => navigation.navigate("MessageScreen", { user: user, to: item._id, socket: socket, currenChat: item })}>
                        <ListItem>
                            <Avatar
                                size="medium"
                                rounded
                                source={{ uri: `${item.avatarImage}` }} />
                            <ListItem.Content>
                                <ListItem.Title>{item.username}</ListItem.Title>
                                <Text>Xin chào</Text>
                            </ListItem.Content>
                            <Text>4.00 pm</Text>
                        </ListItem>
                    </TouchableOpacity>

                </View>) : (<View>
                    <TouchableOpacity onPress={() => navigation.navigate("ChatNhom", { item, user, socket })}>
                        <ListItem>
                            <Avatar
                                size="medium"
                                rounded
                                source={{ uri: `${item.avatarImage}` }}></Avatar>
                            <ListItem.Content>
                                <ListItem.Title>{item.roomName}</ListItem.Title>
                                <Text>Xin chào</Text>
                            </ListItem.Content>
                            <Text>4.00 pm</Text>
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

