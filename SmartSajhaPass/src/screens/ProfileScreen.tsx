import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";

import { signOut } from "firebase/auth";
import { auth, db } from "../services/firebase";

import { ref, get, update } from "firebase/database";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const user = auth.currentUser;

    if (!user) return;

    try {
      const snapshot = await get(ref(db, `users/${user.uid}`));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setName(data.name || "");
        setEditedName(data.name || "");
        setEmail(data.email || "");
        setCardNumber(data.cardNumber || "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveProfile = async () => {
    const user = auth.currentUser;

    if (!user) return;

    try {
      await update(ref(db, `users/${user.uid}`), {
        name: editedName,
      });

      setName(editedName);
      setEditing(false);

      Alert.alert("Success", "Profile updated successfully.");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to update profile.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to logout.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {name ? name.charAt(0).toUpperCase() : "U"}
        </Text>
      </View>

      {editing ? (
        <TextInput
          style={styles.input}
          value={editedName}
          onChangeText={setEditedName}
          placeholder="Enter Name"
        />
      ) : (
        <Text style={styles.name}>{name || "User"}</Text>
      )}

      <Text style={styles.email}>{email || "No Email"}</Text>

      <View style={styles.infoCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Card Number</Text>
          <Text style={styles.value}>{cardNumber || "Not Available"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Card Type</Text>
          <Text style={styles.value}>Student</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Member Since</Text>
          <Text style={styles.value}>2025</Text>
        </View>
      </View>

      {editing ? (
        <TouchableOpacity style={styles.editButton} onPress={saveProfile}>
          <Text style={styles.editText}>Save Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setEditing(true)}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  avatarText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: 20,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    fontSize: 18,
  },

  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    marginTop: 10,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  row: {
    marginBottom: 20,
  },

  label: {
    color: "#777",
    fontSize: 15,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
    marginTop: 5,
  },

  editButton: {
    marginTop: 30,
    width: "100%",
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  editText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  logoutButton: {
    marginTop: 15,
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.error,
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  logoutText: {
    color: Colors.error,
    fontSize: 18,
    fontWeight: "bold",
  },
});
