import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptpassword, setAcceptpassword] = useState("");

  // State để theo dõi trạng thái hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  const [showAcceptPassword, setShowAcceptPassword] = useState(false);

  const toggleShowPassword = () => {
    // Hàm này sẽ được gọi khi click vào icon "eye"
    setShowPassword(!showPassword);
  };

  const toggleShowAcceptPassword = () => {
    // Hàm này sẽ được gọi khi click vào icon "eye"
    setShowAcceptPassword(!showAcceptPassword);
  };

  //const navigation = useNavigation();
  //   const handleLogin = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://10.0.61.107:3000/users/?username=${username}&password=${password}`
  //       );
  //       console.log(response.data[0]);
  //       if (response.status === 200) {
  //         // Đăng nhập thành công
  //         Alert.alert("Login Successful", "Welcome!");
  //         navigation.navigate("Home");
  //       } else {
  //         // Đăng nhập thất bại
  //         Alert.alert("Login Failed", "Invalid credentials");
  //       }
  //     } catch (error) {
  //       console.error("Error logging in:", error);
  //     }
  //   };

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
        <FontAwesome
          style={styles.icon}
          name={showPassword ? "eye" : "eye-slash"} // Thay đổi icon dựa vào trạng thái
          size={20}
          color="black"
          onPress={toggleShowPassword}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesome5 style={styles.icon} name="key" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Accept Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={!showAcceptPassword}
          onChangeText={(acceptpassword) => setAcceptPassword(acceptpassword)}
        />
        <FontAwesome
          style={styles.icon}
          name={showAcceptPassword ? "eye" : "eye-slash"} // Thay đổi icon dựa vào trạng thái
          size={20}
          color="black"
          onPress={toggleShowAcceptPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={{ fontWeight: "bold", color: "white", paddingRight: 12 }}>
          SIGN UP
        </Text>
        <FontAwesome name="arrow-right" size={20} color="white" />
      </TouchableOpacity>

      <View style={{ display: "block" }}>
        <Text>Already have a account?</Text>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign in</Text>
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
    display: "inline-block",
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    padding: 12,
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
    display: "inline-block",
    paddingTop: 16,
  },
  signUpText: {
    color: "pink",
    paddingLeft: 12,
  },
});

export default SignUpScreen;
