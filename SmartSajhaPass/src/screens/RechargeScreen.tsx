import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { BottomTabParamList } from "../navigation/BottomTabs";

import { auth, db } from "../services/firebase";
import { ref, get, update, push } from "firebase/database";

import Colors from "../constants/Colors";

type NavigationProp = BottomTabNavigationProp<BottomTabParamList>;

export default function RechargeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [amount, setAmount] = useState("");

  const handleRecharge = async () => {
    const rechargeAmount = Number(amount);

    if (!amount) {
      Alert.alert("Error", "Please enter an amount.");
      return;
    }

    if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount.");
      return;
    }

    try {
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User not found.");
        return;
      }

      const userRef = ref(db, `users/${user.uid}`);

      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        Alert.alert("Error", "User data not found.");
        return;
      }

      const userData = snapshot.val();

      const currentBalance = userData.balance || 0;
      const newBalance = currentBalance + rechargeAmount;

      await update(userRef, {
        balance: newBalance,
      });

      await push(ref(db, `transactions/${user.uid}`), {
        type: "Recharge",
        amount: rechargeAmount,
        date: new Date().toLocaleString(),
      });

      Alert.alert("Success", `Rs. ${rechargeAmount} added successfully.`, [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ]);

      setAmount("");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Recharge failed.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recharge Card</Text>

      <Text style={styles.label}>Enter Amount</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 500"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.button} onPress={handleRecharge}>
        <Text style={styles.buttonText}>Recharge Now</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.back}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 30,
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.text,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 25,
  },

  button: {
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

  back: {
    marginTop: 20,
    textAlign: "center",
    color: Colors.primary,
    fontSize: 17,
    fontWeight: "600",
  },
});
