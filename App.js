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

export default function App() {
  const [selectedCardDeck, setSelectedCardDeck] = useState(jsQuiz);
  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState(
    MultipleChoiceQuestions
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardReversed, setIsCardReversed] = React.useState(false);
  const [learnOrQuiz, setLearnOrQuiz] = useState("learn");
  // const question = selectedCardDeck[currentCard].question;
  // const answer = selectedCardDeck[currentCard].answer;
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [quizScore, setQuizScore] = useState(1);
  let AmountOfCards =
    learnOrQuiz === "learn"
      ? selectedCardDeck.length
      : selectedQuizQuestions.length;
  useEffect(() => {
    if (selectedDifficulty === "easy") {
      setSelectedCardDeck(jsQuiz);
    } else if (selectedDifficulty === "medium") {
      setSelectedCardDeck(jsIntermediate);
    } else if (selectedDifficulty === "hard") {
      setSelectedCardDeck(jsHard);
    }
    setCurrentCardIndex(0); // reset to first card on difficulty change
  }, [selectedDifficulty]);
  return (
    <LinearGradient
      colors={["#FFD700", "#FFFACD"]} // dark yellow to light yellow
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.scrollBox}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.title}>JS Flashcards</Text>

          {/* <View style={styles.buttonContainer}>
          <SelectorButton text={"Learn"} />
          <SelectorButton text={"Quiz"} />
        </View> */}
          <QuizOrLearnSelector
            learnOrQuiz={learnOrQuiz}
            setLearnOrQuiz={setLearnOrQuiz}
          />

          <DifficutySelector
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            isCardReversed={isCardReversed}
            setIsCardReversed={setIsCardReversed}
            setCurrentCardIndex={setCurrentCardIndex}
          />
          <Flashcard
            // question={question}
            // answer={answer}
            selectedCardDeck={selectedCardDeck}
            currentCardIndex={currentCardIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            AmountOfCards={AmountOfCards}
            isCardReversed={isCardReversed}
            setIsCardReversed={setIsCardReversed}
            learnOrQuiz={learnOrQuiz}
            selectedQuizQuestions={selectedQuizQuestions}
            quizScore={quizScore}
            setQuizScore={setQuizScore}
            onFlip={() => {}}
          />
        </View>
        <View>
          <About />
        </View>
      </ScrollView>
    </LinearGradient>
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
    marginTop: 50,
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
    marginBottom: 20,
    paddingTop: 30,
    fontWeight: "bold",
  },
  gradientBackground: {
    flex: 1,
  },
});
