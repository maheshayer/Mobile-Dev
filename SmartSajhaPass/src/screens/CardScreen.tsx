import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { auth, db } from "../services/firebase";
import { ref, get } from "firebase/database";

import Colors from "../constants/Colors";
import { BottomTabParamList } from "../navigation/BottomTabs";

type NavigationProp = BottomTabNavigationProp<BottomTabParamList>;

export default function CardScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [cardNumber, setCardNumber] = useState("");
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const loadCardData = async () => {
      const user = auth.currentUser;

      if (!user) return;

      try {
        const snapshot = await get(ref(db, `users/${user.uid}`));

        if (snapshot.exists()) {
          const data = snapshot.val();

          setName(data.name || "");
          setCardNumber(data.cardNumber || "");
          setBalance(data.balance || 0);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadCardData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Smart Card</Text>

      <View style={styles.card}>
        <Text style={styles.company}>🚌 Smart Sajha Pass</Text>

        <Text style={styles.cardNumber}>{cardNumber || "Loading..."}</Text>

        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Balance</Text>
            <Text style={styles.value}>Rs. {balance}</Text>
          </View>

          <View>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>Active</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Holder</Text>
            <Text style={styles.value}>{name || "User"}</Text>
          </View>

          <View>
            <Text style={styles.label}>Card Type</Text>
            <Text style={styles.value}>Student</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Recharge")}
      >
        <Text style={styles.buttonText}>Recharge Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 25,
  },

  card: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    padding: 25,
    height: 230,
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  company: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardNumber: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 1,
    marginVertical: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "#EAEAEA",
    fontSize: 14,
  },

  value: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },

  button: {
    marginTop: 40,
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
