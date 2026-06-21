import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";

type MenuCardProps = {
  title: string;
  icon: ReactNode;
  onPress: () => void;
};

const CARD_WIDTH = (Dimensions.get("window").width - 60) / 2;

export default function MenuCard({ title, icon, onPress }: MenuCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View>{icon}</View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 140,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  text: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
  },
});
