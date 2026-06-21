import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import QRCode from "react-native-qrcode-svg";

import { auth, db } from "../services/firebase";
import { ref, get } from "firebase/database";

import Colors from "../constants/Colors";

export default function QRScreen() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const user = auth.currentUser;

      if (!user) return;

      try {
        const snapshot = await get(ref(db, `users/${user.uid}`));

        if (snapshot.exists()) {
          const data = snapshot.val();

          setName(data.name || "");
          setCardNumber(data.cardNumber || "");
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>QR Ticket</Text>

      <View style={styles.qrBox}>
        <QRCode value={cardNumber || "SmartSajhaPass"} size={200} />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Card Holder</Text>
        <Text style={styles.value}>{name || "User"}</Text>

        <Text style={styles.label}>Card Number</Text>
        <Text style={styles.value}>{cardNumber || "Loading..."}</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.active}>● Valid</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 25,
  },

  qrBox: {
    width: 240,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 18,
    padding: 20,
  },

  label: {
    color: "#777",
    fontSize: 15,
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
  },

  active: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
});
