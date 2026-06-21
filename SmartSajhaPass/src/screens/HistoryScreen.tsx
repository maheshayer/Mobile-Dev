import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, db } from "../services/firebase";
import { ref, get } from "firebase/database";

import Colors from "../constants/Colors";

type Transaction = {
  type: string;
  amount: number;
  date: string;
};

export default function HistoryScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const snapshot = await get(ref(db, `transactions/${user.uid}`));

      if (snapshot.exists()) {
        const data = snapshot.val();

        const list = Object.values(data) as Transaction[];

        setTransactions(list.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {transactions.length === 0 ? (
          <Text style={styles.empty}>No transactions found.</Text>
        ) : (
          transactions.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.type}>{item.type}</Text>

              <Text style={styles.info}>Amount: Rs. {item.amount}</Text>

              <Text style={styles.info}>{item.date}</Text>
            </View>
          ))
        )}
      </ScrollView>
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
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  type: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },

  info: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#777",
  },
});
