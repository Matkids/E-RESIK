import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Text,
  Spacer,
  Button,
  Modal,
  FormControl,
  Input,
  Image,
  ScrollView,
} from "native-base";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { Header } from "../components";

const Layanan = () => {
  // State untuk menangani modal
  const [showModal, setShowModal] = useState(false);

  // State untuk jenis laundry dan harga laundry
  const [jenisLaundry, setJenisLaundry] = useState("");
  const [hargaLaundry, setHargaLaundry] = useState("");

  // State untuk menyimpan daftar layanan dari Firebase
  const [layananList, setLayananList] = useState([]);

  // Menggunakan useEffect untuk mendapatkan data layanan dari Firebase
  useEffect(() => {
    const database = getDatabase();
    const layananRef = ref(database, "Layanan");

    const unsubscribe = onValue(layananRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const layananArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setLayananList(layananArray);
      }
    });

    // Membersihkan langganan saat komponen dilepas
    return () => unsubscribe();
  }, []);

  // Fungsi untuk menambahkan layanan ke Firebase
  const tambahkanLayanan = async () => {
    try {
      const database = getDatabase();
      const layananRef = ref(database, "Layanan");

      const layananData = {
        jenisLaundry,
        hargaLaundry,
      };

      await push(layananRef, layananData);

      // Mereset input dan menutup modal setelah menambahkan layanan
      setJenisLaundry("");
      setHargaLaundry("");
      setShowModal(false);
    } catch (error) {
      console.error("Gagal menambahkan layanan:", error);
    }
  };

  return (
    <>
      {/* Header */}
      <Header title={"Layanan"} withBack="true" />
      <ScrollView>
        {/* Konten utama */}
        <Box>
          {/* Tombol Tambahkan */}
          <HStack
            space={2}
            mt={2}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Box>
              <Button
                mx={4}
                mt={2}
                px={4}
                rounded="xl"
                overflow="hidden"
                borderColor="#0878CA"
                borderWidth="1"
                backgroundColor="#0878CA"
                onPress={() => setShowModal(true)}
              >
                <Text color={"#FFFF"} bold>
                  Tambahkan
                </Text>
              </Button>
            </Box>

            {/* Modal untuk menambahkan layanan */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content
                borderRadius={"2xl"}
                borderColor={"#0878CA"}
                borderWidth={"1"}
                maxWidth="400px"
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Edit Informasi Laundry</Modal.Header>
                  <Modal.Body>
                    {/* Form untuk menginputkan jenis dan harga laundry */}
                    <FormControl>
                      <FormControl.Label>Jenis Laundry</FormControl.Label>
                      <Input
                        value={jenisLaundry}
                        onChangeText={(text) => setJenisLaundry(text)}
                      />
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Harga Laundry</FormControl.Label>
                      <Input
                        value={hargaLaundry}
                        onChangeText={(text) => setHargaLaundry(text)}
                      />
                    </FormControl>
                  </Modal.Body>

                  {/* Tombol untuk membatalkan atau menambahkan layanan */}
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setShowModal(false);
                        }}
                      >
                        Batal
                      </Button>
                      <Button
                        bg={"#0878CA"}
                        borderRadius={"xl"}
                        onPress={tambahkanLayanan}
                      >
                        Tambah
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Box>
              </Modal.Content>
            </Modal>
          </HStack>

          {/* Daftar layanan yang diambil dari Firebase */}
          <FlatList
            mx={3}
            my={2}
            data={layananList}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  {/* Avatar (icon) untuk setiap jenis laundry */}
                  <Avatar size="48px" source={require("../assets/icon.png")} />

                  {/* Informasi jenis dan harga laundry */}
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.jenisLaundry}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.hargaLaundry}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </ScrollView>
    </>
  );
};

export default Layanan;
