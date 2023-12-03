import React from "react";
import { View,Text,Button,StyleSheet, SafeAreaView } from "react-native";
import{
    Avatar,
    Title,
    Caption, 
    Text,  
    TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileScreen =(navigation)=>{
    return(
        <SafeAreaView style={style.container}>
            <View style={style.userInforSection}>
                <View style={{flexDirection:'row',marginTop:15}}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/233370648_1053059185464539_3844444988620359416_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFE786hAL06CdkTfDbQ_1zOux_pY1qiDJS7H-ljWqIMlE_0kwu9asIO5c3nzP-1oAlJw86_Qbt1hf2ULE8GrgWa&_nc_ohc=22VLXSDF1CYAX_f6N-m&_nc_ht=scontent.fhph1-3.fna&oh=00_AfD9NXDzgr3Vh8XAlCaHsptAy5652s_udVbU3qdaxvnHEg&oe=656FFE20',
                        }}
                        size={80}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[style.title,{
                            marginTop:15,
                            marginBottom:5,
                        }]}>Tuan</Title>
                        <Caption style={style.caption}>@tuancbk3</Caption>
                    </View>
                </View>
            </View>

            <View style={style.userInforSection}>
                <View style={style.row}>
                    <Icon name="map-marker-radius" color="#77777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>Ha Noi, Viet Nam</Text>
                </View>
                <View style={style.row}>
                    <Icon name="phone" color="#77777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>+84xxxxxxxx</Text>
                </View>
                <View style={style.row}>
                    <Icon name="email" color="#77777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>@gmail.com</Text>
                </View>
            </View>

            <View style={style.inforBoxWapper}>
                <View style={[style.inforBox,{
                    borderRightColor:"#dddddd",
                    borderRightWidth:1
                }]}>
                    <Title>9.000.000đ</Title>
                    <Caption>Số dư tài khoản</Caption>
                </View>
                <View style={style.inforBox}>
                    <Title>12</Title>
                    <Caption>Đặt hàng</Caption>
                </View>
            </View>

            <View style={style.menuWrapper}>
                <TouchableRipple onPress={()=>{}}>
                    <View style={style.menuItem}>
                        <Icon name="account-edit" color="#FF7465" size ={25} />
                        <Text style={style.menuItemText}>Sửa thông tin</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={style.menuItem}>
                        <Icon name="credit-card" color="#FF7465" size ={25} />
                        <Text style={style.menuItemText}>Ngân hàng</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={style.menuItem}>
                        <Icon name="share-outline" color="#FF7465" size ={25} />
                        <Text style={style.menuItemText}>Chia sẻ</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={style.menuItem}>
                        <Icon name="account-check-outline" color="#FF7465" size ={25} />
                        <Text style={style.menuItemText}>Trợ giúp</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={style.menuItem}>
                        <Icon name="setting-outline" color="#FF7465" size ={25} />
                        <Text style={style.menuItemText}>Cài đặt</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};
export default ProfileScreen;

const style = StyleSheet.create({
    container:{
        flex1,
    },
    userInforSection:{
        paddingHorizontal:30,
        marginBottom:25,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight: '500',
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    inforBoxWapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    inforBox:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper:{
        marginTop: 10,
    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText:{
        color:"#777777",
        marginLeft:20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    },
});