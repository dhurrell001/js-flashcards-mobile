import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Flashcard from "./components/flashcard";
import SelectorButton from "./components/selectorButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import jsQuiz from "./data/cardData";
import jsIntermediate from "./data/cardDataIntermediate";
import jsHard from "./data/cardDataHard";
import About from "./components/about";
import DifficutySelector from "./components/difficultySelector";
import QuizOrLearnSelector from "./components/quizOrLearnSelector";
import MultipleChoiceQuestions from "./data/multipleChoiceQuestions";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/AboutPage";
import InstructionPage from "./pages/InstructionPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <LinearGradient
    //   colors={["#FFD700", "#FFFACD"]} // dark yellow to light yellow
    //   style={styles.gradientBackground}
    // >
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarStyle: { backgroundColor: "#FFFACD" },
          sceneContainerStyle: { backgroundColor: "transparent" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Instructions"
          component={InstructionPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open-page-variant"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="information"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEF2",
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "top",
    width: "95%",
    marginTop: 60,
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
  },
  gradientBackground: {
    flex: 1,
  },
});
