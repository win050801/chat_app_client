import React from "react";
import { StyleSheet, Text, View, FlatList,Image } from "react-native";
import ActiveUser from "./ActiveUser";
import Recent from "./Recent";
import Footer from "./Footer";


const HomeScreen = (props) => {
    const user = props.user
    return (
        <View>
            <ActiveUser user = {user}/>
            <Recent user = {user}  />
            <Footer></Footer>
        </View>
            

    )
}

export default HomeScreen

const style = StyleSheet.create({})