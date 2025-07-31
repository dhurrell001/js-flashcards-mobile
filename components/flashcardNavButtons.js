import React from "react";
import { View, StyleSheet } from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function FlashcardNavButtons({
  labelArray,
  handleNext,
  handlePrev,
  handleFlip,
  isCardReversed,
  setCurrentCardIndex,
  setIsCardReversed,
  currentCardIndex,
  selectedQuizQuestions,
  AmountOfCards,
}) {
  function handleReset() {
    setCurrentCardIndex(0);
    setIsCardReversed(false);
  }
  const isLastCard = currentCardIndex === AmountOfCards - 1;

  return (
    <View style={styles.buttonContainer}>
      <SmallSelectorButton
        text={labelArray[0]}
        icon={<AntDesign name="banckward" size={20} color="black" />}
        onPress={handlePrev}
      />
      <SmallSelectorButton text={labelArray[1]} onPress={handleFlip} />
      {!isLastCard ? (
        <>
          <SmallSelectorButton
            text={labelArray[2]}
            icon={<AntDesign name="forward" size={20} color="black" />}
            onPress={handleNext}
          />
        </>
      ) : (
        <>
          <SmallSelectorButton text="Reset" onPress={handleReset} />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
});
