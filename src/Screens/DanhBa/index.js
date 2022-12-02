import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView,SafeAreaView } from "react-native";
import HeaderDanhBa from "./HeaderDanhBa";
import BanBeDanhBa from "./BanBeDanhBa";
import NhomDanhBa from "./NhomDanhBa";
import Header from "./Header"

const DanhBa = ({user}) => {
    const [banBe, setBanbe] = useState(true)
    const [nhom, setNhom] = useState(false)
    return (
        <View>
            <Header setBanbe={setBanbe} banBe={banBe} ></Header>
            <ScrollView>
                {banBe === true ? (<BanBeDanhBa user={user}></BanBeDanhBa>) : (<NhomDanhBa user={user}></NhomDanhBa>)}
            </ScrollView>
        </View>

    )
}

export default DanhBa

const style = StyleSheet.create({})