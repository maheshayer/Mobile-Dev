import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 8,
  },
  rechargeButton: {
    marginTop: 12,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 16,
  },
  infoBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionBox: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  actionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  updateBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  footer: {
    textAlign: "center",
    color: "#999",
    marginBottom: 24,
  },

  safeArea: {
    flex: 1,
  },
});

export default function HomeScreen() {
  const showAlert = (message: string) => {
    Alert.alert(message, "Feature Coming Soon");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>Sajha Smart Pass</Text>
          <Text style={styles.location}>Kathmandu, Nepal</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>DIGITAL SMART CARD</Text>

          <Text style={styles.cardText}>Card Holder : Mahesh Ayer</Text>

          <Text style={styles.cardText}>Balance : Rs. 6700</Text>

          <Text style={styles.cardText}>Card ID : MESH-2227</Text>

          <TouchableOpacity
            style={styles.rechargeButton}
            onPress={() => showAlert("Recharge Card")}
          >
            <Text style={styles.buttonText}>Recharge Card</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Today's Journey</Text>

        <View style={styles.infoBox}>
          <Text>🚌 Bus No. 25</Text>
          <Text>📍 Kalanki → Ratnapark</Text>
          <Text>🕒 Next Bus: 8 min</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Access</Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.actionBox}
            onPress={() => showAlert("Buy Ticket")}
          >
            <Text style={styles.actionText}>🎫 Buy Ticket</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBox}
            onPress={() => showAlert("Bus Routes")}
          >
            <Text style={styles.actionText}>🚌 Bus Routes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBox}
            onPress={() => showAlert("Travel History")}
          >
            <Text style={styles.actionText}>📜 Travel History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBox}
            onPress={() => showAlert("Support")}
          >
            <Text style={styles.actionText}>☎️ Support</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recent Updates</Text>

        <View style={styles.updateBox}>
          <Text>• Smart Card users receive 10% discount</Text>

          <Text>• Route 14 temporarily diverted</Text>

          <Text>• New buses added on Ring Road route</Text>
        </View>

        <Text style={styles.footer}>Version 1.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
