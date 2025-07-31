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

export default function FlashcardTextQuizMode({
  selectedQuizQuestions,
  currentCardIndex,
  setQuizScore,
  quizScore,
  quizModalVisible,
  setQuizModalVisible,
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
    <View style={styles.contentContainer}>
      <Text style={styles.questionNumber}>Question {currentCardIndex + 1}</Text>
      <View>
        <Text style={styles.cardText}>
          {selectedQuizQuestions[currentCardIndex].question}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  contentContainer: {
    // backgroundColor: "blue",

    height: 350,
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
  questionNumber: {
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  contentContainer: {
    flexGrow: 1,
    maxHeight: 500,
  },
});
