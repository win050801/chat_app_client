import React from "react";
import { StyleSheet, Text, View, FlatList,Image } from "react-native";
import Header from "./Header";
import FooterDaNhan from "./FooterDaNhan";
import FooterDaGui from "./FooterDaGui";


const LoiMoiKetBan = () => {
    return (
        <View>
            <Header></Header>
            {/* <FooterDaNhan></FooterDaNhan> */}
            <FooterDaGui></FooterDaGui>
        </View>
            

    )
}

export default LoiMoiKetBan

const style = StyleSheet.create({})

