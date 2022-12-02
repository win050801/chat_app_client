import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";


const Profile = ({user}) => {
    return (
        <View>
            <FooterProfile user={user}></FooterProfile>
        </View>

    )
}

export default Profile

const style = StyleSheet.create({})