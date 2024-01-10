import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
  Text

} from "native-base";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Native']);
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import CreateOrder from "./screens/CreateOrder";
import ConfirmationOrder from "./screens/ConfirmationOrder";
import Invoice from "./screens/Invoice";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Beranda":
              iconName = "home-outline";
              break;
            case "Pelanggan":
              iconName = "people-outline";
              break;
            case "Order":
              iconName = "cart-outline";
              break;
            case "Riwayat":
              iconName = "time-outline";
              break;
            case "Information":
              iconName = "information-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "#1a91ff" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Home} options={noHead} />
      <Tab.Screen name="Pelanggan" component={Home} options={noHead} />
      <Tab.Screen name="Order" component={CreateOrder} options={noHead} />
      <Tab.Screen name="Riwayat" component={Home} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Tabs} options={noHead} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={noHead} />
          <Stack.Screen name="CreateOrder" component={CreateOrder} options={noHead} />
          <Stack.Screen name="Confirmation" component={ConfirmationOrder} options={noHead} />
          <Stack.Screen name="Invoice" component={Invoice} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;