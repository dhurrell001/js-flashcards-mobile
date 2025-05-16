import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { use, useEffect, useState } from "react";
import Flashcard from "./components/flashcard";
import SelectorButton from "./components/selectorButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import jsQuiz from "./data/cardData";
import jsIntermediate from "./data/cardDataIntermediate";
import jsHard from "./data/cardDataHard";
import About from "./components/about";
import DifficutySelector from "./components/difficultySelector";

export default function App() {
  const [selectedCardDeck, setSelectedCardDeck] = useState(jsQuiz);
  const [currentCard, setCurrentCard] = useState(0);
  // const question = selectedCardDeck[currentCard].question;
  // const answer = selectedCardDeck[currentCard].answer;
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  useEffect(() => {
    if (selectedDifficulty === "easy") {
      setSelectedCardDeck(jsQuiz);
    } else if (selectedDifficulty === "medium") {
      setSelectedCardDeck(jsIntermediate);
    } else if (selectedDifficulty === "hard") {
      setSelectedCardDeck(jsHard);
    }
    setCurrentCard(0); // reset to first card on difficulty change
  }, [selectedDifficulty]);
  return (
    <ScrollView contentContainerStyle={styles.scrollBox}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>JS Flashcards</Text>

        <View style={styles.buttonContainer}>
          <SelectorButton text={"Learn"} />
          <SelectorButton text={"Quiz"} />
        </View>
        <DifficutySelector
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <Flashcard
          // question={question}
          // answer={answer}
          selectedCardDeck={selectedCardDeck}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
          onFlip={() => {}}
        />
        <About />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "top",
    width: "95%",
    marginTop: 50,
    borderRadius: 20,
  },
  scrollBox: {
    backgroundColor: "gold",
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
    marginBottom: 20,
    paddingTop: 50,
    fontWeight: "bold",
  },
});
