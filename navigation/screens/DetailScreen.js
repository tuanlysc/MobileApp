// DetailScreen.js

import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <FontAwesome5 name="arrow-alt-circle-left" size={24} color="black" />
      </TouchableOpacity>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: "tomato",
  },
});

export default DetailScreen;
