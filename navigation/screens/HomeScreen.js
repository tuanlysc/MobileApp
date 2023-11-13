import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={24} color="grey" />
      <TextInput
        style={styles.input}
        placeholder="Find your products"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
};

const Notification = () => {
  return (
    <View style={styles.notificationStyle}>
      <Feather name="bell" size={24} color="grey" />
    </View>
  );
};

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        style={styles.bannerImage}
        source={require("../img/banner_home.webp")}
      />
    </View>
  );
};

const FlatListProducts = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const navigateToDetailScreen = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((item) => item !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };
  return (
    <View style={styles.flatList}>
      <FlatList
        data={[
          {
            name: "Luffy Gear5",
            source: require("../img/onepiece/luffy-gear5.jpg"),
            price: 300000,
            rate: 4,
          },
          {
            name: "Naruto Hiền Nhân",
            source: require("../img/naruto/naruto-hiennhan.jpg"),
            price: 400000,
            rate: 4,
          },
          {
            name: "Rengoku",
            source: require("../img/kimetsunoyaiba/rengoku.jpg"),
            price: 500000,
            rate: 4,
          },
          {
            name: "SonGoku SuperSaiyan",
            source: require("../img/dragonball/fig417-super-saiyan-son-goku-yardrat-2_removepics.png"),
            price: 600000,
            rate: 4,
          },
          {
            name: "Itadori Yuji",
            source: require("../img/jujutsukaisen/fig076-yuji-itadori-1.jpg"),
            price: 600000,
            rate: 4,
          },
          {
            name: "Tomioka",
            source: require("../img/kimetsunoyaiba/fig792-tomioka-giyuu-breath-of-water.jpg"),
            price: 600000,
            rate: 4,
          },
          {
            name: "Zoro",
            source: require("../img/onepiece/fig748-roronoa-zoro-kimono-trang-3-dau-6-tay-1_removepics.png"),
            price: 700000,
            rate: 4,
          },
          {
            name: "Sabo",
            source: require("../img/onepiece/fig655-sabo-chong-tay-lua-2-1.jpg"),
            price: 680000,
            rate: 4,
          },
        ]}
        scrollEnabled={false}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigateToDetailScreen(item, navigation)}
          >
            <View style={styles.items}>
              <View style={styles.imageContainer}>
                <Image
                  source={item.source}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={styles.favoriteIcon}
                  onPress={() => toggleFavorite(item.name)}
                >
                  <FontAwesome
                    name={favorites.includes(item.name) ? "heart" : "heart-o"}
                    size={24}
                    color={favorites.includes(item.name) ? "red" : "black"}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.dess}>
                <Text numberOfLines={2} style={styles.textName}>
                  {item.name}
                </Text>
                <Text style={styles.textPrice}>
                  {item.price.toLocaleString()}
                  <Text> đ</Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 16,
    position: "absolute",
    top: 50,
    left: 10,
    width: "70%",
    backgroundColor: "#e8e8e8",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
  notificationStyle: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    position: "absolute",
    top: 50,
    right: 16,
    width: 50,
    backgroundColor: "#e8e8e8",
  },
  bannerContainer: {
    top: 120,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  flatList: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingTop: 120,
    // minWidth: 393,
  },
  items: {
    marginBottom: 10,
    flex: 1,
    // alignItems: "center",
  },

  imageStyle: {
    width: 150,
    height: 200,
    borderRadius: 20,
  },
  dess: {
    alignItems: "center",
    marginTop: 5,
  },
  textName: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "tomato",
  },
  imageContainer: {
    position: "relative",
    paddingLeft: 20,
  },

  favoriteIcon: {
    position: "absolute",
    top: 5,
    right: 20,
    zIndex: 1,
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ScrollView>
        <SearchBar></SearchBar>
        <Notification></Notification>
        <Banner></Banner>
        <FlatListProducts navigation={navigation}></FlatListProducts>
      </ScrollView>
    </View>
  );
}
