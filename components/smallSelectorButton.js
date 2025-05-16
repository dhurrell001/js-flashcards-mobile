import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function SmallSelectorButton({
  text,
  size,
  onPress,
  isSelected,
  icon,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, isSelected && styles.selectedButton]}>
        {icon ? <Text>{icon}</Text> : <Text>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gold",

    borderRadius: "100%",
    width: 50,
    height: 50,

    justifyContent: "center",
    alignItems: "center",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // // Android shadow
    // elevation: 5,
  },
  selectedButton: {
    borderColor: "blue",
    borderWidth: 2,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Android shadow
    elevation: 5,
  },
});
