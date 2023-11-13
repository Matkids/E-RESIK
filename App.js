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
import Profile from "./screens/Profile"
import Home from "./screens/Home"
import LoginScreen from "./screens/LoginScreen";
import CreateOrder from "./screens/CreateOrder";
import ConfirmationOrder from "./screens/ConfirmationOrder";
import ProfileUser from "./screens/Profile";
import Invoice from "./screens/Invoice";
import Riwayat from "./screens/riwayat";
import RincianPesanan from "./screens/rincian_pesanan";
import Informasi from "./screens/informasi";
import ListPendapatan from "./screens/ListPendapatan";
import DetailPendapatan from "./screens/DetailPendapatan";
import TambahPendapatan from "./screens/TambahPendapatan";
import ListCustomer from "./screens/ListCustomer";
import CreateCustomer from "./screens/CreateCustomer";
import Customer from "./screens/Customer";

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
            case "Home":
              iconName = "home-outline";
              break;
            case "List":
              iconName = "people-outline";
              break;
            case "Order":
              iconName =  "cart-outline";
              break;
            case "History":
              iconName = "time-outline";
              break;
            case "Informasi":
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
      <Tab.Screen name="list" component={ListPendapatan} options={noHead} />
      <Tab.Screen name="Order" component={CreateOrder} options={noHead} />
      <Tab.Screen name="Customer" component={Customer} options={noHead} />
      <Tab.Screen name="Info" component={Informasi} options={noHead} />
      <Tab.Screen name="Profile" component={ProfileUser} options={noHead} />

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
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={noHead} />
      <Stack.Screen name="Home" component={Tabs} options={noHead} />
      <Stack.Screen name="ProfileUser" component={ProfileUser} options={noHead} />
      <Stack.Screen name="CreateOrder" component={Tabs} options={noHead} />
      <Stack.Screen name="Confirmation" component={ConfirmationOrder} options={noHead} />
      <Stack.Screen name="Invoice" component={Invoice} options={noHead} />
      <Stack.Screen name="Riwayat" component={Riwayat} options={noHead}/>
      <Stack.Screen name="rincian" component={RincianPesanan} options={noHead}/>
      <Stack.Screen name="informasi" component={Informasi} options={noHead}/>
      <Stack.Screen name="ListPendapatan" component={Tabs} options={noHead} />
      <Stack.Screen name="DetailPendapatan" component={DetailPendapatan} options={noHead} />
      <Stack.Screen name="TambahPendapatan" component={TambahPendapatan} options={noHead} />
      <Stack.Screen name="Customer" component={Customer} options={noHead} />
      <Stack.Screen name="ListCustomer" component={ListCustomer} options={noHead} />
      <Stack.Screen name="CreateCustomer" component={CreateCustomer} options={noHead} />



      


    </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
);
}

export default App;