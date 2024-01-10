import { Box, Image, Center, Stack, Heading, Text, HStack, Button, VStack, Divider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView,Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { Header } from "../components";
import { Avatar } from "native-base";
import { useState,useEffect } from "react";
import { clearStorage, getData } from "../src/utils/localStorage"
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
        navigation.replace('Login');
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
      <Header title={"HOME"} />
      <Center flex={1}>
      </Center>
      {/* ScrollView untuk menggulirkan konten jika lebih panjang dari layar */}
      <ScrollView>
        <Box alignItems="center">
          <HStack py="40">
            {/* Box untuk membuat kotak dengan berbagai properti tata letak dan tampilan */}
            <Box w="80" rounded="lg" bg="muted.100" borderColor={"#0878CA"} borderWidth="2" >
              {/* Stack untuk menumpuk elemen-elemen dengan ruang di antara mereka */}
              <Stack p="5" space={10}>
                {/* Stack untuk menumpuk elemen-elemen dengan ruang di antara mereka */}
                <Stack space={2}>
                  <Stack alignItems="center">
                    {/* Icon untuk menampilkan ikon berdasarkan nama dan ukuran tertentu */}
                    <Icon as={Ionicons} name="person-circle-outline" size={200} color="black" />
                  </Stack>
                  {/* Heading untuk teks berukuran besar dengan warna tertentu */}
                  <Heading> PROFILE ADMIN </Heading>
                  {/* Divider untuk membuat garis pemisah */}
                  <Divider></Divider>
                  {/* Text untuk menampilkan teks dengan berbagai properti */}
                  <Text fontWeight="400">
                    Gmail: {profile?.email}
                  </Text>
                  <Text fontWeight="400">
                    Nama: {profile?.nama}
                  </Text>
                  <Text fontWeight="400">
                    Alamat: {profile?.alamat}
                  </Text>
                  <Text fontWeight="400">
                    Kode Pos: {profile?.kodepos}
                  </Text>
                  {/* Divider untuk membuat garis pemisah */}
                  <Divider></Divider>
                </Stack>
              </Stack>
            </Box>
          </HStack>
          {/* Stack untuk menumpuk elemen-elemen dengan ruang di antara mereka */}
          <Stack space="2"  mb="10">
            {/* HStack untuk menyusun elemen secara horizontal */}
            <HStack space="6" mx="12" >
              {/* Button untuk membuat tombol dengan berbagai properti */}
              <Button 
                onPress={EditProfile}
                bg={"#0878CA"}
                size="12" rounded="xl" 
                _text={{
                  color: "white"
                }} shadow="1">
                Edit
              </Button>
              {/* Button untuk membuat tombol dengan berbagai properti */}
              <Button 
                onPress={() => onSubmit(profile)}
                bg={"#0878CA"} 
                size="12" 
                rounded="xl" 
                _text={{
                  color: "white"
                }} shadow="1">
                Keluar
              </Button>
            </HStack>
          </Stack>
        </Box>
      </ScrollView>
    </>  
  );
};

export default ProfileUser;
