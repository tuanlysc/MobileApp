import * as React from "react";
import { View, Text } from "react-native";

export default function CartScreen({ navigator }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigator.navigator("home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        CartScreen
      </Text>
    </View>
  );
}
