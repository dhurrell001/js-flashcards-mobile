import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import SmallSelectorButton from "./smallSelectorButton"; // Unused in this file, can remove
import AntDesign from "@expo/vector-icons/AntDesign"; // Also unused here
import FlashcardTextLearnMode from "./flashcardTextLearnMode";
import FlashcardTextQuizMode from "./flashcardTextQuizMode";
import FlashcardNavButtons from "./flashcardNavButtons";
import FlashcardQuizNavButtons from "./flashcardQuizNavButtons";
import QuizResults from "./quizResults";
import * as Haptics from "expo-haptics";

import { Button } from "react-native-paper"; // Unused, can remove

// Main flashcard component used in both "learn" and "quiz" modes
function Flashcard({
  setCurrentCardIndex,
  selectedCardDeck,
  currentCardIndex,
  AmountOfCards,
  isCardReversed,
  setIsCardReversed,
  learnOrQuiz,
  selectedQuizQuestions,
  quizScore,
  setQuizScore,
}) {
  // Get current question and answer
  const question = selectedCardDeck[currentCardIndex].question;
  const answer = selectedCardDeck[currentCardIndex].answer;

  // Track whether the quiz has been submitted
  const [isQuizsumbitted, setIsQuizubmitted] = useState(false);

  // Debug log
  console.log(
    "amount of cards ",
    AmountOfCards,
    " current card ",
    currentCardIndex
  );

  // Go to the next card
  function handleNext() {
    Haptics.selectionAsync();

    if (currentCardIndex < AmountOfCards - 1) {
      setCurrentCardIndex((current) => current + 1);
      setIsCardReversed(false);
      console.log("Next card");
    }
  }

  // Go to the previous card
  function handlePrev() {
    Haptics.selectionAsync();

    if (currentCardIndex <= 0) return;
    setCurrentCardIndex((current) => current - 1);
    setIsCardReversed(false);
    console.log("Prev card");
  }

  // Flip the card in learn mode
  function handleFlipLearnMode() {
    Haptics.selectionAsync();

    setIsCardReversed((prev) => !prev);
    console.log("Flip card");
  }

  // Submit the quiz
  function handleFlipQuizMode() {
    Haptics.selectionAsync();

    console.log("display score");
    setIsQuizubmitted(true);
  }

  // Reset the quiz state
  function resetQuiz() {
    Haptics.selectionAsync();

    setIsQuizubmitted(false);
    setQuizScore(0);
    setCurrentCardIndex(0);
    setIsCardReversed(false);
  }

  return (
    <View style={styles.flashcard}>
      <View style={styles.flashcardFront}>
        {/* LEARN MODE */}
        {learnOrQuiz === "learn" ? (
          <>
            {/* Show question/answer text */}
            <FlashcardTextLearnMode
              isCardReversed={isCardReversed}
              question={question}
              answer={answer}
            />

            {/* Learn mode buttons: Prev, Flip, Next */}
            <FlashcardNavButtons
              labelArray={["Prev", "Flip", "Next"]}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleFlip={handleFlipLearnMode}
              isCardReversed={isCardReversed}
            />
          </>
        ) : !isQuizsumbitted ? (
          <>
            {/* QUIZ MODE */}
            <FlashcardTextQuizMode
              currentCardIndex={currentCardIndex}
              selectedQuizQuestions={selectedQuizQuestions}
              quizScore={quizScore}
              setQuizScore={setQuizScore}
            />

            {/* Quiz mode buttons: Prev, Submit, Next */}
            <FlashcardQuizNavButtons
              labelArray={["Prev", "Submit", "Next"]}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleFlip={handleFlipQuizMode}
              isCardReversed={isCardReversed}
              selectedQuizQuestions={selectedQuizQuestions}
              currentCardIndex={currentCardIndex}
            />
          </>
        ) : (
          <>
            {/* QUIZ RESULTS SCREEN */}

            <QuizResults
              quizScore={quizScore}
              currentCardIndex={currentCardIndex}
            />
            {/* Reset quiz button */}
            {/* <TouchableOpacity
              onPress={resetQuiz}
              style={{
                backgroundColor: "blue",
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Reset</Text>
            </TouchableOpacity> */}
            <SmallSelectorButton text={"Reset"} onPress={resetQuiz} />
          </>
        )}
      </View>
    </View>
  );
}

export default Flashcard;

// Styling
const styles = StyleSheet.create({
  flashcard: {
    width: "90%",
    minHeight: 400,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,

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
    minHeight: 400,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gold",
    padding: 5,
    paddingBottom: 20,
    fontSize: 25,
    borderRadius: 10,
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
  quizTextContainer: {
    height: 600,
  },
});
