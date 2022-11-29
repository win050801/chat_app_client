import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import { Avatar, ListItem } from 'react-native-elements';
import { Api } from "../../Global/Axios/Api";
import Ionicons from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { allUsersRoute, getRoom } from "../../util/API"
const ActiveUser = (props) => {
    const navigation = useNavigation();
    var user = props.user
    // console.log(user);
    const id = user._id
    const [data, setdata] = useState([])
    useEffect(() => {
        async function fetchData() {
            const { data } = await Api.post(allUsersRoute, {
                id: id
            });
            setdata(data)
            // console.log(setdata(data));
        }
        fetchData();
    },[]);

    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={{ backgroundColor: '#00bfff' }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                <View style={{width:"85%"}}>
                    <SearchBar
                        placeholder="Search People"
                        inputContainerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 15, width: "100%", marginLeft: 10 }}
                    />
                </View>
                <Provider>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<Ionicons onPress={openMenu} title="tạo nhóm" size={35} name="plus" />}>
                            {/* <Button onPress={() => { }} icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747376.png' }}>
                                Thêm bạn
                            </Button> */}
                            {/* <Divider /> */}
                            <TouchableOpacity onPress={() => navigation.navigate("TaoNhom", { data, user })}>
                                <Button icon={{ uri: 'https://cdn-icons-png.flaticon.com/512/694/694642.png' }}>
                                    Tạo nhóm
                                </Button>
                            </TouchableOpacity>
                        </Menu>
                    </View>
                </Provider>
            </View>
            <FlatList style={{ marginTop: 5 }}
                data={data}
                renderItem={({ item }) => <RenderItem item={item} user={user} />}
                horizontal={true}
            />
        </View>

    );
};
const RenderItem = ({ item, user }) => {
    return (
        <View style={{ margin: 5 }}>
            <Avatar
                size="medium"
                rounded
                source={{ uri: `${item.avatarImage}` }} />
        </View>
    );
}



export default ActiveUser

const style = StyleSheet.create({})

