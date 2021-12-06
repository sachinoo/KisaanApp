import * as React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 58,
    marginTop: -200,
  },
  input: {
    marginTop: 80,
  },
});

export default function KisaanScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#974EB1",
      }}
    >
      <Image style={styles.logo} source={require("./logo.png")} />
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: "bold", color: "white" }}
      >
        Welcome To Kisaan
      </Text>
      <Text style={{ color: "white" }}>
        {" "}
        The new way of taking care of Farm
      </Text>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Button title="Login" />
      <Text>Already Registered? Login</Text>
    </View>
  );
}
