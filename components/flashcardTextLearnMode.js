import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

export default function FlashcardTextLearnMode({
  isCardReversed,
  question,
  answer,
}) {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        {!isCardReversed ? (
          <Text style={styles.cardText}>{question}</Text>
        ) : (
          <Text style={styles.cardText}>{answer}</Text>
        )}
      </ScrollView>
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
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    width: "100%",
    height: 400,
  },
});
