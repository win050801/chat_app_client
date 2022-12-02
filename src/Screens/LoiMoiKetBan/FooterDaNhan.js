import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, ListItem } from 'react-native-elements';


const FooterDaNhan = () => {
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
                        <Text>18 giờ trước</Text>
                        <View style={{marginTop:5, flexDirection:'row'}}>
                            <TouchableOpacity style={{width:100,backgroundColor:'#d3d3d3',height:35,alignItems:'center',justifyContent:'center',borderRadius:17}}>
                                <Text style={{fontSize:16}}>Từ chối</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:100,backgroundColor:'#87cefa',height:35,alignItems:'center',justifyContent:'center',borderRadius:17,marginLeft:20}}>
                                <Text style={{color:'blue',fontSize:16}}>Đồng ý</Text>
                            </TouchableOpacity>
                        </View>
                    </ListItem.Content>
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

export default FooterDaNhan

const styles = StyleSheet.create({})