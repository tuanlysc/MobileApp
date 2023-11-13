import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const navigation = useNavigation();
  const handleLogin = async () => {
    // if (!username || !password) {
    //   Alert.alert("Lỗi", "Vui lòng nhập tên đăng nhập và mật khẩu");
    //   return;
    // }
    try {
      const response = await axios.get(`http://192.168.1.6:3000/users`);
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );
      console.log(typeof user);
      if (user) {
        // Đăng nhập thành công
        Alert.alert("Đăng nhập thành công", "", [
          {
            text: "Tiếp tục",
            onPress: () => {
              navigation.navigate("MainContainer");
            },
          },
        ]);
      } else {
        // Đăng nhập thất bại
        Alert.alert("Sai tên đăng nhập hoặc mật khẩu !");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      if (error.response) {
        console.error("Máy chủ phản hồi:", error.response.data);
        console.error("Mã trạng thái:", error.response.status);
      } else if (error.request) {
        console.error("Không nhận được phản hồi");
      } else {
        console.error("Lỗi khi thiết lập yêu cầu:", error.message);
      }
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Đăng nhập vào TwoRab</Text>
      <Image style={styles.image} source={require("../assets/logo3.png")} />
      <View style={styles.inputView}>
        <FontAwesome style={styles.icon} name="user" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Tên đăng nhập"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesome5 style={styles.icon} name="key" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Mật khẩu"
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
        <Text style={styles.forgot_button}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", color: "white", paddingRight: 12 }}>
          Đăng nhập
        </Text>
        <FontAwesome name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", paddingTop: 12 }}>
        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity style={styles.signUpBtn} onPress={navigateToSignUp}>
          <Text style={styles.signUpText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.orCenter}>Hoặc</Text>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity style={styles.iconNic}>
          <FontAwesome name="facebook-square" size={45} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNic}>
          <FontAwesome name="google-plus-square" size={45} color="tomato" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNic}>
          <FontAwesome name="apple" size={45} color="black" />
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
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    marginBottom: 30,
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
  orCenter: {
    paddingBottom: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
  TextInput: {
    height: 46,
    width: "65%",
    padding: 10,
  },
  forgot_button: {
    height: 30,
    fontWeight: "bold",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#FF1493",
    flexDirection: "row",
    marginBottom: 20,
  },
  signUpBtn: {
    alignItems: "center",
  },
  signUpText: {
    color: "pink",
    paddingLeft: 12,
    fontSize: 14,
    fontWeight: "bold",
  },
  iconView: {
    display: "flex",
    flexDirection: "row",
  },
  iconNic: {
    padding: 12,
  },
});

export default LoginScreen;
