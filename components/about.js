import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About JS Flashcards</Text>
      <Text style={styles.paragraph}>
        JS Flashcards is a learning tool designed to help you reinforce your
        JavaScript knowledge through quick, focused question-and-answer cards.
      </Text>
      <Text style={styles.paragraph}>
        Use the "Show" button to flip a flashcard and reveal the answer.
        Navigate between cards with "Next" and "Prev" buttons.
      </Text>
      <Text style={styles.paragraph}>
        This app is ideal for beginners and intermediate developers who want a
        convenient way to revise key JavaScript concepts on the go.
      </Text>
      <Text style={styles.paragraph}>
        Built with React Native and Expo, this app is lightweight, responsive,
        and designed for mobile learning.
      </Text>
      <Text style={styles.footer}>Made with ❤️ by David Hurrell</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    fontStyle: "italic",
    color: "#333",
  },
});
