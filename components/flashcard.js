import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import AntDesign from "@expo/vector-icons/AntDesign";
function Flashcard({ question, answer, setCurrentCard }) {
  const [isCardReversed, setIsCardReversed] = React.useState(false);
  function handleNext() {
    setCurrentCard((prev) => prev + 1);
    setIsCardReversed(false);
    console.log("Next card");
  }
  function handlePrev() {
    setCurrentCard((prev) => prev - 1);
    setIsCardReversed(false);
    console.log("Prev card");
  }
  function handleFlip() {
    setIsCardReversed((prev) => !prev);
    console.log("Flip card");
  }

  return (
    <View style={styles.flashcard}>
      <View style={styles.flashcardFront}>
        {!isCardReversed ? (
          <Text style={styles.cardText}>{question}</Text>
        ) : (
          <Text style={styles.cardText}>{answer}</Text>
        )}
        <View style={styles.buttonContainer}>
          <SmallSelectorButton
            text={"Prev"}
            icon={<AntDesign name="banckward" size={20} color="black" />}
            onPress={handlePrev}
          />
          <SmallSelectorButton
            text={isCardReversed ? "hide" : "show"}
            onPress={handleFlip}
          />
          <SmallSelectorButton
            text={"Next"}
            icon={<AntDesign name="forward" size={20} color="black" />}
            onPress={handleNext}
          />
        </View>
      </View>
    </View>
  );
}

export default Flashcard;

const styles = StyleSheet.create({
  flashcard: {
    width: "85%",
    minHeight: 200,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Android shadow
    elevation: 5,
  },

  flashcardFront: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gold",
    padding: 5,
    fontSize: 25,
    // backgroundColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
