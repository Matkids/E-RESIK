import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Beranda from "./screens/beranda";
import Profile from "./screens/profile";
import Informasi from "./screens/informasi";
import Riwayat from "./screens/riwayat";
import ListPesanan from "./screens/rincian_pesanan";
import Pelanggan from "./screens/pelanggan";

// Navigator Declaration
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
              iconName = "people-circle-outline";
              break;
            case "Informasi":
              iconName = "newspaper-outline";
              break;
            case "Riwayat":
              iconName = "albums-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "#1a91ff" : color}
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
      <Tab.Screen name="Beranda" component={Beranda} options={noHead} />
      <Tab.Screen name="Pelanggan" component={Pelanggan} options={noHead} />
      <Tab.Screen name="Informasi" component={Informasi} options={noHead} />
      <Tab.Screen name="Riwayat" component={Riwayat} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen
            name="ListPesanan"
            component={ListPesanan}
            options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
