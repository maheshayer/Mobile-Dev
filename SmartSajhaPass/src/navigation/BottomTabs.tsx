import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CardScreen from "../screens/CardScreen";
import RechargeScreen from "../screens/RechargeScreen";
import QRScreen from "../screens/QRScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RoutesScreen from "../screens/RoutesScreen";

import Colors from "../constants/Colors";

export type BottomTabParamList = {
  Home: undefined;
  Card: undefined;
  Recharge: undefined;
  QR: undefined;
  Routes: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#999",

        tabBarStyle: {
          height: 100,
          paddingBottom: 50,
          paddingTop: 0,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName:
            | "home"
            | "credit-card"
            | "cash-plus"
            | "qrcode-scan"
            | "account-circle" = "home";

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;

            case "Card":
              iconName = "credit-card";
              break;

            case "Recharge":
              iconName = "cash-plus";
              break;

            case "QR":
              iconName = "qrcode-scan";
              break;

            case "Profile":
              iconName = "account-circle";
              break;
          }

          return (
            <MaterialCommunityIcons name={iconName} size={24} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Card" component={CardScreen} />
      <Tab.Screen name="Recharge" component={RechargeScreen} />
      <Tab.Screen name="QR" component={QRScreen} />
      <Tab.Screen name="Routes" component={RoutesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
