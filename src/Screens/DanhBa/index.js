import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import HeaderDanhBa from "./HeaderDanhBa";
// import BanBeDanhBa from "./BanBeDanhBa";
import NhomDanhBa from "./NhomDanhBa";


const DanhBa = () => {
    return (
        <View>
            <HeaderDanhBa></HeaderDanhBa>
            <ScrollView>
                {/* <BanBeDanhBa></BanBeDanhBa> */}
                <NhomDanhBa></NhomDanhBa>
            </ScrollView>
        </View>

    )
}

export default DanhBa

const style = StyleSheet.create({})