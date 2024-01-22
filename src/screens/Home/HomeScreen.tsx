import React from "react";
import {View, Text, StyleSheet, Platform, Image} from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import image from "./../../images/Pizza1.png";
import trolley from "./../../images/trolley.png";
import redHeart from "./../../images/redHeart.png";

const mockItemData = {
    title: 'Pizza 1',
    isNew: true,
    newPrice: 'New Price',
    priceNew: '30 uah',
    priceOld: '50 uah',
    oldPrice: 'Old Price',
    description:'Long title long title long title long title',
    imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    image: image,
    trolley: trolley,
    redHeart: redHeart,
    buy: "Buy",
    new: "NEW",
}
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image style={styles.imageMain} source={mockItemData.image}/>
                <View style={styles.roundContainer}>
                    <Text style={styles.textNew}>{mockItemData.new}</Text>
                </View>
                <View style={styles.centerContainer}>
                    <Text style={styles.textStyle}>{mockItemData.title}</Text>
                    <View style={styles.box}>
                        <Text style={styles.textAverage}>{mockItemData.newPrice}</Text>
                        <Text style={styles.textAverageRight}>{mockItemData.oldPrice}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.textAverage}>{mockItemData.priceNew}</Text>
                        <Text style={styles.textAverage}>{mockItemData.priceOld}</Text>
                    </View>
                    <Text numberOfLines={1}  elipsizeModel = "tail" style={styles.textDescription}>{mockItemData.description}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Image style={styles.imageRedHeart} source={mockItemData.redHeart}/>
                    <View style={styles.bottomBox}>
                        <Text style={styles.textAverage}>{mockItemData.buy}</Text>
                        <Image style={styles.imageTrolley} source={mockItemData.trolley}/>
                    </View>
                </View>
            </View>
            <View style ={{flex:1}}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea :{
        flex:3,
        backgroundColor: 'lightgrey',
    },
    container: {
        flex:0.25,
        flexDirection:"row",
        margin:10,
        backgroundColor: '#ccbbcc',
        borderRadius:8,
        borderStyle: "solid",
        borderWidth:1,
        borderColor:"grey",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    roundContainer: {
        marginLeft:-50,
        marginTop:6,
        height:46,
        width:46,
        borderRadius:23,
        borderStyle: "solid",
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"lightgrey",
        justifyContent:"center",
        alignItems:"center",
    },
    centerContainer: {
        flexDirection:"column",
        justifyContent:"space-evenly",
        marginLeft:8,
    },
    rightContainer: {
        flexDirection:"column",
        justifyContent:"space-evenly",
    },
    box: {
        flexDirection:"row",
        justifyContent:"space-evenly",
        maxWidth:200,
        gap:5,
    },
    bottomBox: {
        flexDirection:"row",
        alignItems:  "center",
    },
    imageMain:{
        marginTop:20,
        width:100,
        height:100,
        margin:16,
    },
    imageRedHeart: {
        width:40,
        height:40,
        marginLeft: 30,
        marginBottom:34,
    },
    imageTrolley: {
        width:40,
        height:40,
        marginLeft: 7,
    },
    textStyle: {
        textTransform:"uppercase"
    },
    textAverage: {
        fontSize:12,
        fontWeight:"bold",
    },
    textAverageRight: {
        fontSize:12,
        textDecorationLine:"line-through",
        marginBottom: -10,
    },
    textDescription: {
        marginLeft:-10,
        maxWidth:146,
        fontSize: 12,
        marginBottom:5,
    },
    textNew: {
        fontSize:10,
    },
})

export {HomeScreen};