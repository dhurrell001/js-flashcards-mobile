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
  cardText: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    width: "100%",
    height: 200,
  },
});
