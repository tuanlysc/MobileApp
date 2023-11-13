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

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [error, setError] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowRePassword = () => {
    setShowRePassword(!showRePassword);
  };

  const validateInputs = () => {
    if (isInputFocused) {
      if (!username || !password || !rePassword) {
        setError("Vui lòng nhập đầy đủ thông tin");
        return false;
      } else if (password !== rePassword) {
        setError("Mật khẩu và nhập lại mật khẩu không khớp");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(
        `http://192.168.1.6:3000/users/?username=${username}&password=${password}`,
        {
          username: username,
          password: password,
        }
      );
      if (response.status === 201) {
        // Đăng nhập thành công
        console.log("Đăng ký thành công");
        Alert.alert("Đăng ký thành công", "", [
          {
            text: "Tiếp tục",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ]);
      } else {
        // Đăng nhập thất bại
        console.log("Đăng ký thất bại");
        Alert.alert("Đăng ký thất bại");
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
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

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Đăng ký tài khoản TwoRab</Text>
      <Image style={styles.image} source={require("../assets/logo3.png")} />
      <View style={styles.inputView}>
        <FontAwesome style={styles.icon} name="user" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Tên đăng nhập"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
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
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
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

      {/* Nhập lại mật khẩu */}
      <View style={styles.inputView}>
        <FontAwesome5 style={styles.icon} name="key" size={20} color="black" />
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#003f5c"
          secureTextEntry={!showRePassword}
          onChangeText={(rePassword) => setRePassword(rePassword)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {/* Sự kiện khi click vào icon "eye" */}
        <FontAwesome
          style={styles.icon}
          name={showRePassword ? "eye" : "eye-slash"} // Thay đổi icon dựa vào trạng thái
          size={20}
          color="black"
          onPress={toggleShowRePassword}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={{ fontWeight: "bold", color: "white", paddingRight: 12 }}>
          Đăng ký
        </Text>
        <FontAwesome name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", paddingTop: 12 }}>
        <Text>Bạn đã có có tài khoản?</Text>
        <TouchableOpacity style={styles.signUpBtn} onPress={navigateToLogin}>
          <Text style={styles.signUpText}>Đăng nhập</Text>
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
  errorText: {
    color: "red",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SignUpScreen;
