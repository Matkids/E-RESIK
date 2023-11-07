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
import Home from "./screens/Home"
import LoginScreen from "./screens/LoginScreen";
import CreateOrder from "./screens/CreateOrder";
import ConfirmationOrder from "./screens/ConfirmationOrder";

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
            case "Profile":
              iconName = "home-outline";
              break;
            case "Video":
              iconName = "videocam-outline";
              break;
            case "Home":
              iconName = "person-circle-outline";
              break;
            case "laund":
              iconName = "person-circle-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
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
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="List" component={Home} options={noHead} />
      <Tab.Screen name="Order" component={CreateOrder} options={noHead} />
      <Tab.Screen name="History" component={Home} options={noHead} />
      <Tab.Screen name="Login" component={Home} options={noHead} />
      <Tab.Screen name="Profile" component={LoginScreen} options={noHead} />
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
      <Stack.Screen name="LoginScreen" component={Tabs} options={noHead} />
      <Stack.Screen name="ProfileScreen" component={Tabs} options={noHead} />
      <Stack.Screen name="CreateOrder" component={Tabs} options={noHead} />
      <Stack.Screen name="Confirmation" component={ConfirmationOrder} options={noHead} />
    </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
);
}

export default App;