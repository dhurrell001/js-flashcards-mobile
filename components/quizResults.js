import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function QuizResults({ quizScore, currentCardIndex }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Score</Text>
      <Text style={styles.scorePercentage}>
        {(quizScore / (currentCardIndex + 1)) * 100}%
      </Text>
      <Text style={styles.quizResult}>
        {quizScore} out of {currentCardIndex + 1}
      </Text>
      {quizScore >= 7 ? (
        <Text style={styles.congratulations}>Well done!</Text>
      ) : (
        <Text style={styles.congratulations}>Better luck next time!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  quizResult: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },
  congratulations: {
    fontSize: 22,
    color: "#28a745",
    marginTop: 10,
  },
  scorePercentage: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 10,
  },
});
