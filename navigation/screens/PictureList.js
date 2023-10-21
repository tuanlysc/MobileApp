import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { Component, useState, useEffect } from "react";

const { width: screenWidth } = Dimensions.get("window");

export default function PictureList() {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    //1. Load data
    const data = [
      {
        image: (
          <Image
            source={require("../img/fig417-super-saiyan-son-goku-yardrat-2.jpg")}
            resizeMode="stretch"
          />
        ),
        type: "jpg",
      },
      {
        image: (
          <Image
            source={require("../img/luffy-gear5.jpg")}
            resizeMode="stretch"
          />
        ),
        type: "jpg",
      },
      {
        image: (
          <Image
            source={require("../img/naruto-hiennhan.jpg")}
            resizeMode="stretch"
          />
        ),
        type: "jpg",
      },
      {
        image: (
          <Image source={require("../img/rengoku.jpg")} resizeMode="stretch" />
        ),
        type: "jpg",
      },
    ];

    //2. Cap nhat len state de screen
    setImageList(data);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>PictureList</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            width: screenWidth * imageList.length,
            height: 200,
          }}
        >
          {imageList.map((e, index) => (
            <View key={index.toString()}>{e.image}</View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
