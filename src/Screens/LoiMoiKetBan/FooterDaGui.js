import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, ListItem } from 'react-native-elements';


const FooterDaGui = () => {
    const DATA = [
        {
            ten: "Đức",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Thắng",
        },
        {
            ten: "Thắng",
        },
        
    ];


    const Item = ({ item, index, onPress }) => (
        <View>
            <TouchableOpacity >
                <ListItem>
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title style={{fontSize:16,fontStyle:'normal'}}>{item.ten}</ListItem.Title>
                        <Text>Có thể bạn quen</Text>
                    </ListItem.Content>
                    <TouchableOpacity style={{width:100,backgroundColor:'#d3d3d3',height:35,alignItems:'center',justifyContent:'center',borderRadius:17}}>
                                <Text style={{fontSize:16}}>Thu hồi</Text>
                            </TouchableOpacity>
                </ListItem>
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
            />
        );
    };

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
        />
    );
};

export default FooterDaGui

const styles = StyleSheet.create({})