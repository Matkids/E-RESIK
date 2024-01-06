import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Stack,
  Text,
  HStack,
  Icon,
  Heading,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FIREBASE from "../src/config/FIREBASE";
import { Header } from "../components";

const KonfirmasiPesanan = () => {
  // Menggunakan useNavigation hook dari React Navigation untuk mendapatkan objek navigasi.
  const navigation = useNavigation();
  
  // Membuat state latestPesanan dan fungsi setLatestPesanan dengan nilai awal null menggunakan useState hook.
  const [latestPesanan, setLatestPesanan] = useState(null);

  // Menggunakan useEffect hook untuk menjalankan kode setelah komponen di-mount.
  useEffect(() => {
    // Membuat fungsi asinkron fetchLatestPesanan untuk mengambil data pesanan.
    const fetchLatestPesanan = async () => {
      try {
        // Mengambil referensi ke node "Pesanan" pada database Firebase.
        const pesananRef = FIREBASE.database().ref("Pesanan");

        // Mengurutkan data berdasarkan kunci dan membatasi hanya satu item terakhir.
        // Mendengarkan perubahan nilai pada node "Pesanan".
        pesananRef
          .orderByKey()
          .limitToLast(1)
          .on("value", (snapshot) => {
            // Mengambil nilai dari snapshot.
            const data = snapshot.val();

            // Jika data pesanan tersedia, mengambil pesanan terakhir dan mengupdate state latestPesanan.
            if (data) {
              const pesananKey = Object.keys(data)[0];
              const latestPesananData = data[pesananKey];
              setLatestPesanan(latestPesananData);
            }
          });
      } catch (error) {
        // Menangani error jika terjadi kesalahan dalam pengambilan data.
        console.error("Error fetching latest pesanan:", error);
      }
    };

    // Memanggil fungsi fetchLatestPesanan.
    fetchLatestPesanan();
  }, []); // useEffect hanya dijalankan sekali setelah komponen di-mount.

  return (
    <>
      {/* Header komponen dengan judul "Konfirmasi Pesanan" dan tombol back. */}
      <Header title={"Konfirmasi Pesanan"} withBack="true" />

      {/* ScrollView untuk memungkinkan scrolling jika kontennya lebih panjang dari layar. */}
      <ScrollView>
        {/* Container Box dengan styling tertentu untuk tampilan komponen. */}
        <Box
          p={2}
          mx={10}
          my={4}
          bg="#FFFF"
          borderRadius="xl"
          borderColor="#0878CA"
          borderWidth={"2"}
        >
          {/* Stack untuk menyusun elemen-elemen secara vertikal. */}
          <Stack space={4} mx="auto" mt={4}>
            {/* HStack untuk menyusun ikon dan teks secara horizontal. */}
            <HStack alignItems="center">
              {/* Ikon person menggunakan Ionicons dari Expo. */}
              <Icon as={<Ionicons name="person" />} />
              {/* Teks bold "Nama". */}
              <Text bold> Nama</Text>
            </HStack>
            {/* Menampilkan nama dari latestPesanan. */}
            <Text>{latestPesanan?.nama}</Text>

            {/* (Langkah serupa diikuti untuk data lainnya seperti Nomor HP, Alamat, dll.) */}

            {/* Menampilkan Total Harga dengan teks berwarna biru dan berukuran lebih besar. */}
            <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={3}>
              Total Harga {latestPesanan?.Harga}
            </Text>
          </Stack>

          {/* Container Box untuk menempatkan tombol Konfirmasi Pesanan. */}
          <Box mb={4} px={5}>
            {/* Tombol Konfirmasi Pesanan dengan onPress handler yang mengarahkan ke halaman "Tagihan". */}
            <Button
              bg={"#0878CA"}
              rounded={"xl"}
              onPress={() => navigation.navigate("Tagihan")}
              mt={2}
              mx={7}
            >
              Konfirmasi Pesanan
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

// Export default dari komponen KonfirmasiPesanan.
export default KonfirmasiPesanan;

