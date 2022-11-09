import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList    
} from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const TaoNhom = (props) => {
    const navigation = useNavigation();

    // var user = props.user
    // const id = user._id
    const[data,setdata] = useState([
        {
            id: 1,
            name: 'Đức',
        },
        {
            id: 2,
            name: 'Thắng',
        },
        {
            id: 3,
            name: 'Trọng',
        },
        {
            id: 3,
            name: 'Trọng',
        },
        {
            id: 3,
            name: 'Trọng',
        },
        {
            id: 3,
            name: 'Trọng',
        },
        {
            id: 3,
            name: 'Trọng',
        },

        

    ]) 
    // useEffect(() => {
    //     async function fetchData() {
           
            
    //         const { data } = await Api.post(`http://192.168.14.106:5000/api/auth/allusers`, { 
    //         id:id
    //         });
    //         setdata(data)
        
            
    //     }
    //     fetchData();
    //   });
    return (
        <View style={style.main}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <View>
                    <TouchableOpacity>
                        <Ionicons title="Hủy tạo nhóm" size={25} name="close" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Nhóm mới
                    </Text>
                    <Text>
                        Đã chọn: 0
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#d3d3d3', width: 50, alignItems: 'center', height: 50, borderRadius: 50 }}>
                    <Ionicons style={{ marginTop: 10 }} title="Tạo ảnh nhóm" size={25} name="camera" />
                </TouchableOpacity>
                <TextInput size={20} placeholder="Đặt tên nhóm" style={{ height: 44, margin: 10, borderWidth: 1, padding: 10, width: 300, borderColor: 'white' }} />
            </View>
            <View>
                <SearchBar
                    placeholder="Tìm kiếm số điện thoại"
                    inputContainerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 15, width: 370, marginLeft: 10, height: 45 }} />
            </View>
            <View style={{flex:1}}>
                <FlatList
                    ListHeaderComponent={() => <View></View>}
                    data={data}
                    renderItem={({ item }) => <RenderItem item={item}/>}
                />
            </View>
            <View style={{ backgroundColor: '#c0c0c0', flex: 0.002 }}></View>
            <View style={{alignItems:'center',justifyContent: "center",flex:0.1}}>
                <TouchableOpacity onPress={()=>navigation.navigate("ChatNhom")} style={{backgroundColor:'yellow',borderRadius:15,height:40,width:200}}>
                    <Text style={{marginTop:10,marginLeft:50}}>Thêm vào nhóm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const RenderItem = ({ item,user }) => {
    const [checked, setChecked] = React.useState(false);
        return (
            <TouchableOpacity>
                    <ListItem>
                        <Checkbox style={{borderRadius:15}}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Avatar
                            size="medium"
                            rounded
                            source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                        <ListItem.Content>
                            <ListItem.Title>hihi</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
        );
}

export default TaoNhom;

const style = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 25,
        backgroundColor: 'white'
    },
});