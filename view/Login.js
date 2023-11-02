import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import connect from "../src/config/db";

// const db = require("../src/config/db");
// db.connect();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State để theo dõi trạng thái hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    // Hàm này sẽ được gọi khi click vào icon "eye"
    setShowPassword(!showPassword);
  };

  // const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      // const response = await axios.get(
      //   `mongodb://localhost:27017/user/?username=${username}&password=${password}`
      // );
      connect();
      // console.log(response.data[0]);
      // if (response.status === 200) {
      //   // Đăng nhập thành công
      //   console.log("Đăng nhập thành công");
      //   navigation.navigate("MainContainer");
      // } else {
      //   // Đăng nhập thất bại
      //   console.log("Đăng nhập thất bại");
      // }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo3.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <FontAwesome style={styles.icon} name="user" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesome5 style={styles.icon} name="key" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={!showPassword}
          onChangeText={(password) => setPassword(password)}
        />
        {/* Sự kiện khi click vào icon "eye" */}
        <FontAwesome
          style={styles.icon}
          name={showPassword ? "eye" : "eye-slash"} // Thay đổi icon dựa vào trạng thái
          size={20}
          color="black"
          onPress={toggleShowPassword}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", color: "white", paddingRight: 12 }}>
          LOGIN
        </Text>
        <FontAwesome name="arrow-right" size={20} color="white" />
      </TouchableOpacity>

      <View style={{ flexDirection: "row", paddingTop: 12 }}>
        <Text>Don't have a account?</Text>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: "50%",
    height: 100,
    resizeMode: "contain",
    margin: 30,
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    paddingLeft: 12,
  },
  TextInput: {
    height: 46,
    width: "65%",
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontWeight: "bold",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    flexDirection: "row",
  },
  signUpBtn: {
    alignItems: "center",
  },
  signUpText: {
    color: "pink",
    paddingLeft: 12,
  },
});

export default LoginScreen;
