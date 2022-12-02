import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import Feather from "react-native-vector-icons/Feather"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = ({setBanbe,banBe}) => {
    const [click, setclick] = useState(0)
    const DATA = [
        {
            title: "BẠN BÈ",
        },
        {
            title: "NHÓM",
        },
    ];
    const handle= (item)=>{
        
        if(item.title==="BẠN BÈ")
        {
            
            setBanbe(true)
            setclick(0)
        }
        else{
            setBanbe(false)
            setclick(1)
        }
    }
    const Item = ({ item, index, onPress }) => (
        <View>
            {click === index ? (<View><TouchableOpacity style={{ marginLeft: 70, alignItems: 'center' }} onPress={()=>{handle(item)}}  >
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", textDecorationLine: "underline", marginRight: 70 }}>
                    {item.title}
                </Text>
            </TouchableOpacity></View>) : (<View>
                <TouchableOpacity style={{ marginLeft: 70, alignItems: 'center' }} onPress={()=>{handle(item)}}  >
                    <Text style={{ fontSize: 17, color: "gray", marginRight: 70 }}>
                        {item.title}
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
            
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
            <View style={{ backgroundColor: '#c0c0c0', height: 1, marginTop: 10 }}></View>
        </View>

    );
};

export default Header

const styles = StyleSheet.create({

})

