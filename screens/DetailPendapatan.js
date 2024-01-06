// berisi penjelasan kode nya
import { Header } from "../components/";
import {
  Box,
  HStack,
  Text,
  FlatList,
  Image,
  VStack,
  Spacer,
  Button,
  Center,
  Badge
} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FIREBASE from "../src/config/FIREBASE"; // Pastikan  mengimpor modul FIREBASE

const DetailPendapatan = () => {
  const navigation = useNavigation();
  const [pendapatanList, setPendapatanList] = useState([]);
  const [totalPemasukan, setTotalPemasukan] = useState(0);

  // Mengambil data dari Firebase dan menghitung total pemasukan
  const fetchData = async () => {
    try {
      const db = FIREBASE.database();
      const snapshot = await db.ref("TambahPendapatan").once("value");

      if (snapshot.exists()) {
        const data = snapshot.val();
        const pendapatanArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setPendapatanList(pendapatanArray);

        // Menghitung totalPemasukan
        const total = pendapatanArray.reduce((acc, item) => {
          return acc + parseFloat(item.totalpemasukan);
        }, 0);
        setTotalPemasukan(total);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error.message);
    }
  };

  // Mengambil data saat komponen pertama kali dimount
  useEffect(() => {
    fetchData();
  }, []);

  // Menghapus data dari Firebase berdasarkan ID
  const handleDelete = async (id) => {
    try {
      const db = FIREBASE.database();
      await db.ref(`TambahPendapatan/${id}`).remove();

      // Mengambil data terbaru setelah penghapusan
      fetchData();
    } catch (error) {
      console.error("Error deleting data from Firebase:", error.message);
    }
  };

  return (
    <>
      {/* Header */}
      <Header title={"Detail Pedapatan"} withBack="true" />

      {/* Konten Utama */}
      <Center flex={1}></Center>
      <Box mx={4} my={4} mb="500">
        {/* Enhanced UI for Total Pemasukan */}
        <Box
          p="4"
          mb="4"
          borderRadius="xl"
          bg="#0878CA"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="lg" color="white" fontWeight="bold">
            Total Pemasukan
          </Text>
          <Badge
            variant="outline"
            colorScheme="white"
            p="2"
            mt="2"
            borderRadius="md"
          >
            <Text color="white">Rp. {totalPemasukan.toFixed(2)},-</Text>
          </Badge>
        </Box>

        {/* List Data Pendapatan */}
        <FlatList
          data={pendapatanList}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="2"
              borderStyle="dotted"
              borderColor="#0878CA"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack space={[4, 4]} justifyContent="space-between">
                <VStack alignItems="center">
                  <Text color="#0878CA" mt="2" bold>
                    {item.tanggal}
                  </Text>
                  <Image source={require("../assets/hari.jpg")} w="10" h="10" />
                </VStack>
                <VStack>
                  <Text color="#0878CA" mt="2" bold>
                    {item.hari}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" color="#0878CA" alignSelf="flex-start" mt="2">
                  {`Rp. ${item.totalpemasukan},-`}
                </Text>
                <Button
                  variant="outline"
                  size="xs"
                  onPress={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Tombol Tambah */}
        <Box alignItems="center">
          <Button
            mt="7"
            bg={"#0878CA"}
            onPress={() => navigation.replace("TambahPendapatan")}
          >
            Tambah
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DetailPendapatan;
