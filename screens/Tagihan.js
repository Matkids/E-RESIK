import React, { useState, useEffect } from "react";
import { Header } from "../components";
import {
  Button,
  Box,
  Stack,
  Text,
  Divider,
  HStack,
  Heading,
  Image,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import FIREBASE from "../src/config/FIREBASE";

const Invoice = () => {
  // Menggunakan useNavigation untuk mendapatkan objek navigasi
  const navigation = useNavigation();

  // State untuk menyimpan data pesanan terbaru
  const [latestPesanan, setLatestPesanan] = useState(null);

  // Menggunakan useEffect untuk melakukan fetch data pesanan terbaru saat komponen di-mount
  useEffect(() => {
    // Fungsi untuk mengambil data pesanan terbaru
    const fetchLatestPesanan = async () => {
      try {
        // Mendapatkan referensi ke Firebase database untuk "Pesanan"
        const pesananRef = FIREBASE.database().ref("Pesanan");

        // Menggunakan orderByKey dan limitToLast untuk mendapatkan pesanan terakhir
        pesananRef
          .orderByKey()
          .limitToLast(1)
          .on("value", (snapshot) => {
            // Mendapatkan data snapshot dari Firebase
            const data = snapshot.val();

            // Memeriksa apakah data pesanan tersedia
            if (data) {
              // Mendapatkan kunci (key) pesanan terakhir
              const pesananKey = Object.keys(data)[0];

              // Mendapatkan data pesanan terakhir
              const latestPesananData = data[pesananKey];
              
              // Menambahkan ID ke dalam data pesanan
              latestPesananData.Id = pesananKey;

              // Menampilkan data pesanan terbaru ke console (opsional)
              console.log("latestPesananData:", latestPesananData);

              // Menyimpan data pesanan terbaru ke dalam state
              setLatestPesanan(latestPesananData);
            }
          });
      } catch (error) {
        // Menangani error jika terjadi kesalahan dalam pengambilan data
        console.error("Error fetching latest pesanan:", error);
      }
    };

    // Memanggil fungsi untuk mengambil data pesanan terbaru
    fetchLatestPesanan();
  }, []); // Dependensi kosong, sehingga useEffect hanya dijalankan sekali saat komponen di-mount

  // Render komponen
  return (
    <>
      <Header title={"Layanan"} withBack="true" />
      <ScrollView>
        <Box>
          <Box
            p={2}
            mx={5}
            my={5}
            bg="#FFFF"
            borderRadius="3xl"
            borderColor="#0878CA"
            borderWidth={"2"}
          >
            <Image
              source={require("../assets/icon.png")}
              alt="Icon"
              width={75}
              height={75}
              alignSelf="center"
              mt={3}
            />
            <Heading
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
              mt={2}
              className="invoice-heading"
            >
              Struk Transaksi
            </Heading>
            <Divider mt={5} />
            <Stack space={3} w="90%" mx="auto" mt={4}>
              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "center" }}>
                  ID : {latestPesanan?.Id}
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Nama
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.nama}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Nomor HP
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.noHp}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Alamat
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.alamat}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Jenis Layanan
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.layanan}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Tanggal Pesanan
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.tanggal}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Berat
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.berat}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Harga
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {latestPesanan?.Harga}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "center" }}>
                  Keterangan
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {latestPesanan?.keterangan}
                </Text>
              </HStack>
              <Divider />
              <HStack alignItems="center">
                <Text style={{ flex: 1, textAlign: "center" }}>
                  SIMPAN STRUK TRANSAKSI INI
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text style={{ flex: 1, textAlign: "center" }}>
                  STRUK INI MERUPAKAN BUKTI PEMBAYARAN SAH
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text style={{ flex: 1, textAlign: "center" }}>
                  TANGGAL TERBIT 12/11/2023 07.28
                </Text>
              </HStack>
              <Button
                p={2}
                mx={20}
                mb={2}
                bg={"#0878CA"}
                rounded={15}
                onPress={() => navigation.navigate("Profil")}
              >
                OKE
              </Button>
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Invoice;
