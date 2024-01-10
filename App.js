import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Beranda from "./screens/Beranda";
import Masuk from "./screens/Masuk";
import BuatPesanan from "./screens/BuatPesanan";
import KonfirmasiPesanan from "./screens/KonfirmasiPesanan";
// import ProfileUser from "./screens/Profile";
import Tagihan from "./screens/Tagihan";
import Riwayat from "./screens/Riwayat";
import RincianPesanan from "./screens/RincianPesanan";
import Layanan from "./screens/Layanan";
import CatatanSelesai from "./screens/CatatanSelesai";
import Pendapatan from "./screens/Pendapatan";
import DetailPendapatan from "./screens/DetailPendapatan";
import TambahPendapatan from "./screens/TambahPendapatan";
import ListPelanggan from "./screens/ListPelanggan";
// import BuatPelanggan from "./screens/BuatPelanggan";
// import Pelanggan from "./screens/Pelanggan";
import Profil from "./screens/Profil";
import Tips from "./screens/Tips";
// import ListPelanggan from "./screens/ListPelanggan";
import BuatPelanggan from "./screens/BuatPelanggan";
import EditProfile from "./screens/EditProfile";
import Splash from "./screens/splash";
import Catatan from "./screens/Catatan";


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
            case "Buat Pesanan":
              iconName = "cart-outline";
              break;
            case "Profil":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "#0878CA" : color}
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
            <Text color={focused ? "#0878CA" : color} mb={2} fontSize={10}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Beranda} options={noHead} />
      <Tab.Screen
        name="Buat Pesanan"
        component={BuatPesanan}
        options={noHead}
      />
      <Tab.Screen name="Profil" component={Profil} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Beranda">
          <Stack.Screen
            name="Masuk"
            component={Masuk}
            options={noHead}
          />
          <Stack.Screen name="Beranda" component={Tabs} options={noHead} />
          <Stack.Screen name="Profil" component={Tabs} options={noHead} />
          <Stack.Screen name="BuatPesanan" component={Tabs} options={noHead} />
          <Stack.Screen
            name="KonfirmasiPesanan"
            component={KonfirmasiPesanan}
            options={noHead}
          />
          <Stack.Screen name="Tagihan" component={Tagihan} options={noHead} />
          <Stack.Screen name="Riwayat" component={Riwayat} options={noHead} />
          <Stack.Screen
            name="RincianPesanan"
            component={RincianPesanan}
            options={noHead}
          />
          <Stack.Screen name="Catatan" component={Catatan} options={noHead} />
          <Stack.Screen name="CatatanSelesai" component={CatatanSelesai} options={noHead} />
          <Stack.Screen name="Layanan" component={Layanan} options={noHead} />
          <Stack.Screen
            name="Pendapatan"
            component={Pendapatan}
            options={noHead}
          />
          <Stack.Screen
            name="DetailPendapatan"
            component={DetailPendapatan}
            options={noHead}
          />
          <Stack.Screen
            name="TambahPendapatan"
            component={TambahPendapatan}
            options={noHead}
          />
          <Stack.Screen name="Tips" component={Tips} options={noHead} />
          <Stack.Screen
            name="ListPelanggan"
            component={ListPelanggan}
            options={noHead}
          />
          <Stack.Screen
            name="BuatPelanggan"
            component={BuatPelanggan}
            options={noHead}
          />
          <Stack.Screen 
          name="Splash" 
          component={Splash} 
          options={noHead} />
          
          <Stack.Screen 
          name="EditProfile" 
          component={EditProfile} 
          options={noHead} />


        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
