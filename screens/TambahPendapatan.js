import React, { useState } from "react";
import { Button, Box, Stack, Input, Icon, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { Header } from "../components";
import FIREBASE from "../src/config/FIREBASE"; // Pastikan Anda mengimpor modul FIREBASE

const TambahPendapatan = () => {
  // Menggunakan useNavigation untuk mendapatkan objek navigasi
  const navigation = useNavigation();

  // State untuk menyimpan data input (hari, tanggal, totalpemasukan)
  const [hari, setHari] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [totalpemasukan, setTotalPemasukan] = useState("");

  // Fungsi untuk menangani submit form
  const handleSubmit = async () => {
    try {
      // Mendapatkan referensi ke Firebase database
      const db = FIREBASE.database();

      // Menambahkan data baru ke node "TambahPendapatan"
      const newPendapatanRef = db.ref("TambahPendapatan").push({
        hari,
        tanggal,
        totalpemasukan,
      });

      // Mendapatkan kunci unik yang dihasilkan oleh push
      const newPendapatanKey = newPendapatanRef.key;

      // Menampilkan pesan sukses dengan mencetak kunci yang dihasilkan
      console.log("Data added successfully with key:", newPendapatanKey);

      // Navigasi ke layar "DetailPendapatan" (atau sesuaikan sesuai kebutuhan)
      navigation.replace("DetailPendapatan");
    } catch (error) {
      // Menangani error jika terjadi kesalahan dalam penambahan data ke Firebase
      console.error("Error adding data to Firebase:", error.message);
    }
  };

  // Render komponen
  return (
    <>
      <Header title={"Tambah Pendapatan"} withBack="true" />
      <Center flex={1} bg="#EAEAEA">
        <SafeAreaView>
          <Box
            mx="auto"
            p="10"
            bg="muted.100"
            w="80"
            borderColor="#0878CA"
            borderWidth="2"
            rounded="2xl"
            shadow={4}
          >
            <Box>
              <Stack space={4} w="90%" mx="auto">
                <Input
                  bg={"#D9D9D9"}
                  borderColor="#0878CA"
                  borderWidth={"1"}
                  borderRadius={"xl"}
                  placeholder="Hari"
                  value={hari}
                  onChangeText={setHari}
                  InputLeftElement={
                    <Icon as={MaterialIcons} name="event" size={5} ml="2" />
                  }
                />
                <Input
                  bg={"#D9D9D9"}
                  borderColor="#0878CA"
                  borderWidth={"1"}
                  borderRadius={"xl"}
                  placeholder="Tanggal"
                  value={tanggal}
                  onChangeText={setTanggal}
                  InputLeftElement={
                    <Icon as={MaterialIcons} name="dialpad" size={5} ml="2" />
                  }
                />
                <Input
                  bg={"#D9D9D9"}
                  borderColor="#0878CA"
                  borderWidth={"1"}
                  borderRadius={"xl"}
                  placeholder="Total Pemasukan"
                  value={totalpemasukan}
                  onChangeText={setTotalPemasukan}
                  InputLeftElement={
                    <Box ml={2}>
                      <FontAwesome5
                        name="money-check-alt"
                        size={15}
                        ml={2}
                        color="#78716c"
                      />
                    </Box>
                  }
                />

                <Box alignItems="center">
                  <Button bg={"#0878CA"} rounded={"xl"} onPress={handleSubmit}>
                    Submit
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </SafeAreaView>
      </Center>
    </>
  );
};

export default TambahPendapatan;
