import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { db } from "../services/firebase";
import { ref, get } from "firebase/database";

import Colors from "../constants/Colors";

type Bus = {
  busNo: string;
  route: string;
  currentLocation: string;
  nextStop: string;
  arrivalTime: string;
};

export default function RoutesScreen() {
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    loadBuses();
  }, []);

  const loadBuses = async () => {
    try {
      const snapshot = await get(ref(db, "buses"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        const list = Object.values(data) as Bus[];

        setBuses(list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Live Bus Status</Text>

      <Text style={styles.subtitle}>Ratnapark → Koteshwor</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {buses.map((bus, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.busNo}>🚌 {bus.busNo}</Text>

            <Text style={styles.info}>Route: {bus.route}</Text>

            <Text style={styles.info}>
              Current Location: {bus.currentLocation}
            </Text>

            <Text style={styles.info}>Next Stop: {bus.nextStop}</Text>

            <Text style={styles.arrival}>Arriving in {bus.arrivalTime}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    elevation: 4,
  },

  busNo: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10,
  },

  info: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 6,
  },

  arrival: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});
