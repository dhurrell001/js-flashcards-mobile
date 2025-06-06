import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Flashcard from "../components/flashcard";
import jsQuiz from "../data/cardData";
import jsIntermediate from "../data/cardDataIntermediate";
import jsHard from "../data/cardDataHard";
import DifficutySelector from "../components/difficultySelector";
import QuizOrLearnSelector from "../components/quizOrLearnSelector";
import MultipleChoiceQuestions from "../data/multipleChoiceQuestions";
import multipleChoiceQuestionIntermediate from "../data/multipleChoiceQuestionIntermediate";
import multipleChoiceQuestionsHard from "../data/multipleChoiceQuestionsHard";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomePage() {
  const [selectedCardDeck, setSelectedCardDeck] = useState(jsQuiz);
  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState(
    MultipleChoiceQuestions
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardReversed, setIsCardReversed] = React.useState(false);
  const [learnOrQuiz, setLearnOrQuiz] = useState("learn");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [quizScore, setQuizScore] = useState(1);

  let AmountOfCards =
    learnOrQuiz === "learn"
      ? selectedCardDeck.length
      : selectedQuizQuestions.length;

  useEffect(() => {
    if (selectedDifficulty === "easy") {
      setSelectedCardDeck(jsQuiz);
      setSelectedQuizQuestions(MultipleChoiceQuestions);
    } else if (selectedDifficulty === "medium") {
      setSelectedCardDeck(jsIntermediate);
      setSelectedQuizQuestions(multipleChoiceQuestionIntermediate);
    } else if (selectedDifficulty === "hard") {
      setSelectedQuizQuestions(multipleChoiceQuestionsHard);
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
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={[styles.title, { color: "yellow" }]}>
            <MaterialCommunityIcons name="code-tags" size={45} color="black" />

            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              JS Flashcards
            </Text>
          </View>

          <QuizOrLearnSelector
            learnOrQuiz={learnOrQuiz}
            setLearnOrQuiz={setLearnOrQuiz}
            setCurrentCardIndex={setCurrentCardIndex}
          />

          <DifficutySelector
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            isCardReversed={isCardReversed}
            setIsCardReversed={setIsCardReversed}
            setCurrentCardIndex={setCurrentCardIndex}
          />
          <Flashcard
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

  title: {
    fontSize: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "yellow",
    marginTop: 20,
  },
  gradientBackground: {
    flex: 1,
  },
});
