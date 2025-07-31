import React from "react";
import { View, StyleSheet } from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function FlashcardQuizNavButtons({
  labelArray,
  handleNext,
  handlePrev,
  isQuizsumbitted,
  isCardReversed,
  selectedQuizQuestions,
  currentCardIndex,
  handleFlip,
}) {
  const isLastCard = currentCardIndex === selectedQuizQuestions.length - 1;
  console.log("currentCardIndex", currentCardIndex);
  console.log("selectedQuizQuestions.length", selectedQuizQuestions.length);
  console.log("isLastCard", isLastCard);

  return (
    <View style={styles.buttonContainer}>
      <SmallSelectorButton
        text={labelArray[0]}
        icon={<AntDesign name="banckward" size={20} color="black" />}
        onPress={handlePrev}
      />
      {isLastCard && (
        <SmallSelectorButton text={labelArray[1]} onPress={handleFlip} />
      )}
      {!isLastCard && (
        <SmallSelectorButton
          text={labelArray[2]}
          icon={<AntDesign name="forward" size={20} color="black" />}
          onPress={handleNext}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    width: "80%",
    marginTop: 20,
    // paddingHorizontal: 30,
  },
});
