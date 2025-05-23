import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import SelectorButton from "./selectorButton";

export default function QuizOrLearnSelector({
  onPress,
  learnOrQuiz,
  setLearnOrQuiz,
}) {
  function handleLearnSelect() {
    setLearnOrQuiz("learn");
    console.log(learnOrQuiz);
  }
  function handleQuizSelect() {
    setLearnOrQuiz("quiz");
    console.log(learnOrQuiz);
  }
  return (
    <View style={styles.buttonContainer}>
      <SelectorButton text={"Learn"} onPress={handleLearnSelect} />
      <SelectorButton text={"Quiz"} onPress={handleQuizSelect} />
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
