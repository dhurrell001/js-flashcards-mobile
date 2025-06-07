import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function InstructionPage() {
  return (
    <LinearGradient
      colors={["#FFD700", "#FFFACD"]} // dark yellow to light yellow
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.scrollBox}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={[styles.title]}>
            <MaterialCommunityIcons name="code-tags" size={45} color="black" />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Instructions
            </Text>
          </View>
        </View>
        <View>{/* <Instructions /> */}</View>
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFEF2",
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "top",
    width: "95%",
    marginTop: 50,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android
  },
  scrollBox: {
    // backgroundColor: "b",
    alignItems: "center",
    justifyContent: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  title: {
    fontSize: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "yellow",
    marginTop: 20,
    backgroundColor: "transparent",
  },
  gradientBackground: {
    flex: 1,
  },
});
