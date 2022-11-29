import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler";


const Header = () => {
    const [click, setclick] = useState()


    const DATA = [
        {
            title: "ĐÃ NHẬN",
            soluong: 5
        },
        {
            title: "ĐÃ GỬI",
            soluong: 10
        },
    ];


    const Item = ({ item, index, onPress }) => (
        <View>
            {click === index ? (<View><TouchableOpacity style={{  marginLeft: 75, alignItems: 'center',flexDirection:'row' }} onPress={onPress}  >
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", textDecorationLine: "underline"}}>
                    {item.title}
                </Text><Text style={{ fontSize: 17, fontWeight: "bold", color: "black", textDecorationLine: "underline", marginLeft:5 }}>
                    {item.soluong}
                </Text>
            </TouchableOpacity></View>) : (<View>
                <TouchableOpacity style={{  marginLeft: 75, alignItems: 'center',flexDirection:'row' }} onPress={onPress}  >
                    <Text style={{ fontSize: 17, color: "gray" }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 17, color: "gray",marginLeft:5 }}>
                        {item.soluong}
                    </Text>
                </TouchableOpacity>
            </View>)}

        </View>
    );

    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
                index={index}
                click={click}
                onPress={() => {
                    setclick()
                }
                }
            />
        );
    };

    return (
        <View>
            <View style={{ backgroundColor: '#00bfff' }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30, height: 50 }}>
                    <TouchableOpacity>
                        <AntDesign style={{ marginLeft: 20 }} title="back" size={25} name="left" color={"white"} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'white', marginRight: 150 }}>Lời mời kết bạn</Text>
                    <TouchableOpacity>
                        <AntDesign style={{ marginRight: 10 }} title="cài đặt" size={25} name="setting" color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
            <View style={{ backgroundColor: '#d3d3d3', height: 1, marginTop: 10 }}></View>
        </View>

    );
};

export default Header

const styles = StyleSheet.create({})