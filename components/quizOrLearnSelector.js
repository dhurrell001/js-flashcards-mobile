import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import SelectorButton from "./selectorButton";
import * as Haptics from "expo-haptics";

export default function QuizOrLearnSelector({
  onPress,
  learnOrQuiz,
  setLearnOrQuiz,
  setCurrentCardIndex,
}) {
  const [isSelected, setIsSelected] = React.useState(false);
  function handleLearnSelect() {
    Haptics.selectionAsync();
    setLearnOrQuiz("learn");
    console.log(learnOrQuiz);
  }
  function handleQuizSelect() {
    Haptics.selectionAsync();
    setLearnOrQuiz("quiz");
    setCurrentCardIndex(0); // Reset to first card when switching to quiz
    console.log(learnOrQuiz);
  }
  return (
    <View style={styles.buttonContainer}>
      <SelectorButton
        text={"Learn"}
        onPress={handleLearnSelect}
        isSelected={learnOrQuiz === "learn"}
      />
      <SelectorButton
        text={"Quiz"}
        onPress={handleQuizSelect}
        isSelected={learnOrQuiz === "quiz"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
