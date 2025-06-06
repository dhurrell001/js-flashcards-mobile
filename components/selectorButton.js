import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function SelectorButton({ text, size, onPress, isSelected }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, isSelected && styles.selectedButton]}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gold",

    borderRadius: 50,
    width: 65,
    height: 65,

    justifyContent: "center",
    alignItems: "center",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Android shadow
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
