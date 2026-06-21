import React, { useCallback, useState } from "react";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import { View, Text, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { auth, db } from "../services/firebase";
import { ref, get } from "firebase/database";

import Colors from "../constants/Colors";
import MenuCard from "../components/MenuCard";

import { CompositeNavigationProp } from "@react-navigation/native";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { BottomTabParamList } from "../navigation/BottomTabs";
import { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  useFocusEffect(
    useCallback(() => {
      loadUserData();
    }, []),
  );

  const loadUserData = async () => {
    const user = auth.currentUser;

    if (!user) return;

    try {
      const snapshot = await get(ref(db, `users/${user.uid}`));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setName(data.name || "");
        setBalance(data.balance || 0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Smart Sajha Pass</Text>

      <Text style={styles.welcome}>Welcome back{name ? `, ${name}` : ""}!</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>

        <Text style={styles.balance}>Rs. {balance.toFixed(2)}</Text>
      </View>

      <View style={styles.gridContainer}>
        <MenuCard
          title="My Card"
          icon={
            <FontAwesome5 name="credit-card" size={30} color={Colors.primary} />
          }
          onPress={() => navigation.navigate("Card")}
        />

        <MenuCard
          title="Recharge"
          icon={
            <MaterialCommunityIcons
              name="cash-plus"
              size={30}
              color={Colors.primary}
            />
          }
          onPress={() => navigation.navigate("Recharge")}
        />

        <MenuCard
          title="QR Ticket"
          icon={
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color={Colors.primary}
            />
          }
          onPress={() => navigation.navigate("QR")}
        />

        <MenuCard
          title="History"
          icon={
            <MaterialCommunityIcons
              name="history"
              size={30}
              color={Colors.primary}
            />
          }
          onPress={() => navigation.navigate("History")}
        />

        <MenuCard
          title="Profile"
          icon={
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color={Colors.primary}
            />
          }
          onPress={() => navigation.navigate("Profile")}
        />

        <MenuCard
          title="Live Buses"
          icon={
            <MaterialCommunityIcons
              name="bus-clock"
              size={30}
              color={Colors.primary}
            />
          }
          onPress={() => navigation.navigate("Routes")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    paddingBottom: 150,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: 10,
  },

  welcome: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    marginBottom: 25,
  },

  balanceCard: {
    backgroundColor: Colors.primary,
    padding: 25,
    borderRadius: 20,
    marginBottom: 30,
  },

  balanceLabel: {
    color: "#fff",
    fontSize: 18,
  },

  balance: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
