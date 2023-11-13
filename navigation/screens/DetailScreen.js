// DetailScreen.js

import * as React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [favorites, setFavorites] = useState([]);
  const goBack = () => {
    navigation.goBack();
  };

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((item) => item !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
          <FontAwesome5 name="arrow-alt-circle-left" size={24} color="black" />
        </TouchableOpacity>
        <Image source={item.source} style={styles.image} />
        <TouchableOpacity
          onPress={() => toggleFavorite(item.name)}
          style={styles.heartIcon}
        >
          <FontAwesome
            name={favorites.includes(item.name) ? "heart" : "heart-o"}
            size={24}
            color={favorites.includes(item.name) ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.starsContainer}>
          {[...Array(5)].map((_, index) => (
            <FontAwesome
              key={index}
              name={index < 4 ? "star" : "star-o"}
              size={24}
              color="orange"
              style={styles.starIcon}
            />
          ))}
        </View>
        <Text style={styles.description}>Test mô tả chi tiết</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <FontAwesome5
            name="cart-plus"
            size={22}
            color="pink"
            style={styles.cartIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    marginBottom: 20,
    position: "absolute",
    top: 25,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  heartIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    paddingTop: 250,
  },
  price: {
    fontSize: 22,
    color: "tomato",
    fontWeight: "bold",
  },
  ratingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
  },
  starIcon: {
    marginRight: 5,
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  buyButton: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartIcon: {
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default DetailScreen;
