import * as React from "react";
import { View, Text } from "react-native";

export default function DistributorScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold", color: "white" }}
      >
        THIS IS A DISTRIBUTOR PAGE
      </Text>
    </View>
  );
}
