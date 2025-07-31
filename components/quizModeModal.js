import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { useState, useEffect } from "react";
import FlashcardQuizNavButtons from "./flashcardQuizNavButtons";
import QuizResults from "./quizResults";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar"; // or from 'react-native' if not using Expo

export default function QuizModeModel({
  selectedQuizQuestions,
  currentCardIndex,
  setCurrentCardIndex,
  setQuizScore,
  quizScore,
  quizModalVisible,
  setQuizModalVisible,
  AmountOfCards,
  setIsQuizubmitted,
  isQuizsumbitted,
  learnorQuiz,
  setLearnOrQuiz,
}) {
  const currentQuestion = selectedQuizQuestions[currentCardIndex];
  const [selectedValue, setSelectedValue] = useState(null);

  const handleAnswerCheck = (index) => {
    setSelectedValue(index.toString());

    const isCorrect = currentQuestion.answers[index]?.isCorrect;
    if (isCorrect) {
      setQuizScore((prevScore) => prevScore + 1);
    }
    console.log(quizScore);
  };
  useEffect(() => {
    setSelectedValue(null); // reset radio buttons
  }, [currentCardIndex]);
  // Go to the next card
  function handleNext() {
    // Haptics.selectionAsync();

    if (currentCardIndex < AmountOfCards - 1) {
      setCurrentCardIndex((current) => current + 1);
      console.log("Next card");
    }
  }

  // Go to the previous card
  function handlePrev() {
    // Haptics.selectionAsync();

    if (currentCardIndex <= 0) return;
    setCurrentCardIndex((current) => current - 1);

    console.log("Prev card");
  }

  // Submit the quiz
  function handleFlipQuizMode() {
    // Haptics.selectionAsync();

    console.log("display score");

    setIsQuizubmitted(true);
  }
  function handleCloseModal() {
    setQuizModalVisible(false);
    setLearnOrQuiz("learn"); // Reset to learn mode when closing the modal
  }
  return (
    <Modal
      visible={quizModalVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={handleCloseModal}
    >
      {!isQuizsumbitted ? (
        <>
          <LinearGradient
            colors={["#FFD700", "#FFFACD"]} // dark yellow to light yellow
            style={styles.gradientBackground}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.questionNumber}>
                Question {currentCardIndex + 1}
              </Text>
              <View style={styles.questionContainer}>
                <Text style={styles.cardText}>
                  {selectedQuizQuestions[currentCardIndex].question}
                </Text>
              </View>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.answerContainer}>
                  <RadioButton.Group
                    onValueChange={(newValue) =>
                      handleAnswerCheck(parseInt(newValue))
                    }
                    value={selectedValue}
                  >
                    {currentQuestion.answers.map((answer, index) => (
                      <RadioButton.Item
                        key={index}
                        label={answer.text}
                        value={index.toString()}
                        mode="android"
                        position="trailing"
                        labelStyle={styles.radioLabel}
                        style={styles.radioItem}
                      />
                    ))}
                  </RadioButton.Group>
                </View>
                <View style={styles.navButtonContainer}>
                  <FlashcardQuizNavButtons
                    labelArray={["Prev", "Submit", "Next"]}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    handleFlip={handleFlipQuizMode}
                    // isCardReversed={isCardReversed}
                    selectedQuizQuestions={selectedQuizQuestions}
                    currentCardIndex={currentCardIndex}
                  />
                </View>

                <View style={styles.closeModalButton}>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text style={{ color: "blue", fontSize: 20 }}>X Close</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </LinearGradient>
        </>
      ) : (
        <>
          <QuizResults
            quizScore={quizScore}
            currentCardIndex={currentCardIndex}
          />
        </>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
    height: 100,

    backgroundColor: "#fff",
  },
  answerContainer: {
    borderRadius: 5,

    width: "100%",
    height: "60%",
  },

  radioItem: {
    flexWrap: "wrap", // allows items to not overflow
    justifyContent: "space-evenly",
  },
  radioLabel: {
    fontSize: 18,
    flexShrink: 1, // allows label to shrink if needed
    flexWrap: "wrap",
    // padding: 5,
  },
  questionNumber: {
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  contentContainer: {
    // flexGrow: 1,
    minHeight: "70%",
    // maxHeight: 700,
    width: "95%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "gold",

    alignItems: "center",
  },
  navButtonContainer: {
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
    borderRadius: 8,
    width: "80%",
  },
  closeModalButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  gradientBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
