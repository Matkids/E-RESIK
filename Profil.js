import {
  Box,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
  Divider,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";
import { Avatar } from "native-base";
import { useState, useEffect } from "react";
import { clearStorage, getData } from "../src/utils/localStorage";
import FIREBASE from "../src/config/FIREBASE";

const ProfileUser = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);

  // Navigasi ke halaman EditProfile
  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };

  // Mendapatkan data pengguna saat komponen di-render
  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        setProfile(data);
      } else {
        // Navigasi ke halaman Login jika data pengguna tidak ditemukan
        navigation.replace("Login");
      }
    });
  };

  useEffect(() => {
    // Menjalankan fungsi getUserData() setiap kali fokus pada komponen
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    // Membersihkan event listener saat komponen tidak lagi ter-render
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  // Fungsi yang dipanggil saat tombol Keluar ditekan
  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Logout berhasil
          clearStorage();
          navigation.replace("Masuk");
        })
        .catch((error) => {
          // Terjadi kesalahan saat logout, tampilkan pesan kesalahan
          alert(error);
        });
    } else {
      // Navigasi ke halaman Masuk jika data pengguna tidak ditemukan
      navigation.replace("Masuk");
    }
  };

  return (
    <>
      {/* Menggunakan komponen Header untuk judul halaman */}
      <Header title={"Profil"} />

      {/* ScrollView untuk menggulirkan konten jika lebih panjang dari layar */}
      <ScrollView>
        <Box alignItems="center">
          <HStack>
            {/* Box untuk membuat kotak dengan berbagai properti tata letak dan tampilan */}
            <Box
              w="80"
              rounded="xl"
              bg="#FFFF"
              borderColor={"#0878CA"}
              borderWidth="2"
            >
              {/* Stack untuk menumpuk elemen-elemen dengan ruang di antara mereka */}
              <Stack p="5" space={10}>
                {/* Stack untuk menumpuk elemen-elemen dengan ruang di antara mereka */}
                <Stack space={2}>
                  <Stack alignItems="center">
                    {/* Icon untuk menampilkan ikon berdasarkan nama dan ukuran tertentu */}
                    <Icon
                      as={Ionicons}
                      name="person-circle-outline"
                      size={100}
                      color="black"
                    />
                  </Stack>
                  {/* Heading untuk teks berukuran besar dengan warna tertentu */}

                  {/* Divider untuk membuat garis pemisah */}
                  <Divider></Divider>
                  {/* Text untuk menampilkan teks dengan berbagai properti */}
                  <Text fontWeight="400">Gmail: {profile?.email}</Text>
                  <Text fontWeight="400">Nama: {profile?.nama}</Text>
                  <Text fontWeight="400">Alamat: {profile?.alamat}</Text>
                  <Text fontWeight="400">Kode Pos: {profile?.kodepos}</Text>
                  {/* Divider untuk membuat garis pemisah */}
                </Stack>
              </Stack>
            </Box>
          </HStack>
          {/* Stack untuk menumpuk elemen-elemen dengan ruang di antara mereka */}
          {/* <Stack space="2" mb="10"> */}
          {/* HStack untuk menyusun elemen secara horizontal */}
          <Box my={4}>
            <VStack space="6" mx="12">
              {/* Button untuk membuat tombol dengan berbagai properti */}
              <Button
                onPress={EditProfile}
                bg={"#0878CA"}
                py={3}
                px={7}
                rounded="2xl"
                _text={{
                  color: "white",
                }}
                shadow="1"
              >
                Edit Profil
              </Button>
              {/* Button untuk membuat tombol dengan berbagai properti */}
              <Button
                onPress={() => onSubmit(profile)}
                bg={"#0878CA"}
                py={3}
                px={7}
                rounded="2xl"
                _text={{
                  color: "white",
                }}
                shadow="1"
              >
                Keluar
              </Button>
            </VStack>
          </Box>
          {/* </Stack> */}
        </Box>
      </ScrollView>
    </>
  );
};

export default ProfileUser;
