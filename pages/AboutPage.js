import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import About from "../components/about";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutPage() {
  return (
    <LinearGradient
      colors={["#FFD700", "#FFFACD"]} // dark yellow to light yellow
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.scrollBox}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={[styles.title, { color: "yellow" }]}>
            <MaterialCommunityIcons name="code-tags" size={45} color="black" />

            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              JS Flashcards
            </Text>
          </View>
        </View>
        <View>
          <About />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    alignItems: "center",
    justifyContent: "top",
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
  },
  gradientBackground: {
    flex: 1,
  },
});
