import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import { useState } from "react";
import * as Haptics from "expo-haptics";

export default function DifficutySelector({
  selectedDifficulty,
  setSelectedDifficulty,
  isCardReversed,
  setIsCardReversed,
  setCurrentCardIndex,
}) {
  const [isSelected, setIsSelected] = React.useState(false);
  //   const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  function handleEasyDifficultySelect() {
    // setIsSelected((prev) => !prev);
    Haptics.selectionAsync();

    setSelectedDifficulty("easy");
    setIsCardReversed(false);
    setCurrentCardIndex(0); // reset to first card on difficulty change
    console.log(selectedDifficulty);
  }
  function handleMediumDifficultySelect() {
    // setIsSelected((prev) => !prev);
    Haptics.selectionAsync();

    setSelectedDifficulty("medium");
    setIsCardReversed(false);
    setCurrentCardIndex(0); // reset to first card on difficulty change
    console.log(selectedDifficulty);
  }
  function handleHardDifficultySelect() {
    Haptics.selectionAsync();

    setSelectedDifficulty("hard");
    setIsCardReversed(false);
    setCurrentCardIndex(0); // reset to first card on difficulty change
    console.log(selectedDifficulty);
  }

  return (
    <View style={styles.selectorContainer}>
      <SmallSelectorButton
        text={"Easy"}
        onPress={handleEasyDifficultySelect}
        isSelected={selectedDifficulty === "easy"}
      />
      <SmallSelectorButton
        text={"Med"}
        onPress={handleMediumDifficultySelect}
        isSelected={selectedDifficulty === "medium"}
      />
      <SmallSelectorButton
        text={"Hard"}
        onPress={handleHardDifficultySelect}
        isSelected={selectedDifficulty === "hard"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectorContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
});
