import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState, useEffect } from "react";

export default function FlashcardTextLearnMode({
  selectedQuizQuestions,
  currentCardIndex,
  setQuizScore,
  quizScore,
}) {
  const currentQuestion = selectedQuizQuestions[currentCardIndex];
  const [selectedValue, setSelectedValue] = useState(null);
  // console.log(
  //   "Selected value: ",
  //   currentQuestion.answers[selectedValue].isCorrect
  // );
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
  return (
    <View>
      <View>
        <Text style={styles.cardText}>
          {selectedQuizQuestions[currentCardIndex].question}
        </Text>
      </View>
      <View style={styles.answerContainer}>
        <RadioButton.Group
          onValueChange={(newValue) => handleAnswerCheck(parseInt(newValue))}
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
    </View>
  );
}

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
    fontSize: 17,
    textAlign: "center",
    marginBottom: 20,
  },
  answerContainer: {
    // marginTop: 20,
    // padding: 10,
    // backgroundColor: "#f0f0f0",
    borderRadius: 5,
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  radioItem: {
    flexWrap: "wrap", // allows items to not overflow
    justifyContent: "space-evenly",
  },
  radioLabel: {
    fontSize: 16,
    flexShrink: 1, // allows label to shrink if needed
    flexWrap: "wrap",
    // padding: 5,
  },
});
