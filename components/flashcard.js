import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import SmallSelectorButton from "./smallSelectorButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import FlashcardTextLearnMode from "./flashcardTextLearnMode";
import FlashcardTextQuizMode from "./flashcardTextQuizMode";
import FlashcardNavButtons from "./flashcardNavButtons";

function Flashcard({
  // question,
  // answer,
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
  const question = selectedCardDeck[currentCardIndex].question;
  const answer = selectedCardDeck[currentCardIndex].answer;
  // const [isCardReversed, setIsCardReversed] = React.useState(false);
  console.log(
    "amount of cards ",
    AmountOfCards,
    " current card ",
    currentCardIndex
  );
  function handleNext() {
    if (currentCardIndex < AmountOfCards - 1) {
      setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
      setIsCardReversed(false);
      console.log("Next card");
      return;
    }
  }
  function handlePrev() {
    if (currentCardIndex <= 0) {
      return;
    }
    setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
    setIsCardReversed(false);
    console.log("Prev card");
  }
  function handleFlipLearnMode() {
    setIsCardReversed((prev) => !prev);
    console.log("Flip card");
  }
  function handleFlipQuizMode() {
    // setIsCardReversed((prev) => !prev);
    console.log("display score");
  }

  return (
    <View style={styles.flashcard}>
      <View style={styles.flashcardFront}>
        {learnOrQuiz === "learn" ? (
          <>
            <FlashcardTextLearnMode
              isCardReversed={isCardReversed}
              question={question}
              answer={answer}
            />
            <FlashcardNavButtons
              labelArray={["Prev", "Flip", "Next"]}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleFlip={handleFlipLearnMode}
              isCardReversed={isCardReversed}
            />
          </>
        ) : (
          <>
            <FlashcardTextQuizMode
              currentCardIndex={currentCardIndex}
              selectedQuizQuestions={selectedQuizQuestions}
              quizScore={quizScore}
              setQuizScore={setQuizScore}
            />
            <FlashcardNavButtons
              labelArray={["Prev", "Answer", "Next"]}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleFlip={handleFlipQuizMode}
              isCardReversed={isCardReversed}
            />
          </>
        )}
      </View>
    </View>
  );
}

export default Flashcard;

const styles = StyleSheet.create({
  flashcard: {
    width: "85%",
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
    // flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gold",
    padding: 5,
    paddingBottom: 20,
    fontSize: 25,
    borderRadius: 10,
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
  quizTextContainer: {
    height: 600,
  },
});
