import React, { useState, useEffect } from "react";
import {
  Image,
  Divider,
  ScrollView,
  VStack,
  Text,
  HStack,
  Button,
  Box,
  Modal,
  Stack,
  Container,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  getDatabase,
  ref,
  onValue,
  remove,
  child,
  update,
} from "firebase/database";
import { Header } from "../components";

const RiwayatPesanan = () => {
  const navigation = useNavigation();
  const [riwayatPesanan, setRiwayatPesanan] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPesanan, setSelectedPesanan] = useState(null);

  // Menggunakan useEffect untuk melakukan fetch data ketika komponen di-mount
  useEffect(() => {
    const pesananRef = ref(getDatabase(), "Pesanan");

    // Menggunakan onValue untuk mendapatkan data secara real-time
    onValue(pesananRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Mengubah objek pesanan menjadi array
        const pesananArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setRiwayatPesanan(pesananArray);
      }
    });
  }, []);

  // Fungsi untuk menghapus pesanan
  const handleDelete = () => {
    if (!selectedPesanan) return;

    const pesananRef = ref(getDatabase(), "Pesanan");
    const pesananKey = selectedPesanan.id;

    // Menghapus pesanan dari database
    remove(child(pesananRef, pesananKey))
      .then(() => {
        console.log("Pesanan berhasil dihapus!");
        setShowModal(false);
        // Secara opsional, Anda dapat memperbarui state lokal untuk mencerminkan perubahan
        setRiwayatPesanan((prevPesanan) =>
          prevPesanan.filter((pesanan) => pesanan.id !== pesananKey)
        );
      })
      .catch((error) => {
        console.error("Gagal menghapus pesanan:", error);
      });
  };

  // Fungsi untuk menampilkan modal
  const handleShowModal = (pesanan) => {
    setSelectedPesanan(pesanan);
    setShowModal(true);
  };

  return (
    <>
      <Header title={"Riwayat"} withBack="true" />
      
        <ScrollView>
         
          {/* Mencetak setiap pesanan dari array riwayatPesanan */}
          {riwayatPesanan.map((pesanan) => (
            <Box
              key={pesanan.id}
              mx={6}
              
              my={7}
              rounded="xl"
              overflow="hidden"
              shadow={4}
              borderColor="#0878CA"
              borderWidth="1"
              backgroundColor="#FFFF"
            >
              <Stack p="2" space={3}>
                <Box>
                  <HStack
                    space={2}
                    ml={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    {/* Text bold untuk menampilkan teks dengan tebal dan memanggil properti dari database nama */}
                    <Text bold>{pesanan.nama}</Text>

                    {/* TouchableOpacity dan Button untuk menampilkan tombol hapus */}
                    <TouchableOpacity>
                      <Button
                        mx={4}
                        mt={2}
                        p={2}
                        rounded="md"
                        overflow="hidden"
                        borderColor="#0878CA"
                        borderWidth="1"
                        backgroundColor="#0878CA"
                        onPress={() => handleShowModal(pesanan)}
                      >
                        <Text
                          color={"#FFFF"}
                          fontSize={"sm"}
                          bold
                          onPress={() => handleShowModal(pesanan)}
                        >
                          Hapus
                        </Text>
                      </Button>
                    </TouchableOpacity>
                  </HStack>

                  {/* Modal untuk konfirmasi penghapusan */}
                  <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content
                      borderWidth={1}
                      borderColor={"#0878CA"}
                      maxWidth="400px"
                    >
                      <Box mx={2}>
                        <Modal.CloseButton />
                        <Modal.Header>Hapus Riwayat</Modal.Header>

                        {/* Modal.Footer dan Button untuk tombol Hapus */}
                        <Modal.Footer>
                          <Button.Group space={2}>
                            <Button
                              bg={"#0878CA"}
                              borderRadius={"xl"}
                              onPress={handleDelete}
                            >
                              <Text color={"#FFFF"}>Hapus</Text>
                            </Button>
                          </Button.Group>
                        </Modal.Footer>
                      </Box>
                    </Modal.Content>
                  </Modal>
                </Box>

                <Box>
                  <Divider />
                  <HStack mx={4}>
                    <Image
                      source={require("../assets/icon.png")}
                      alt="Alternate Text"
                      size="md"
                      borderColor={"#0878CA"}
                      borderWidth={"1"}
                      mt={4}
                      mb={2}
                      rounded={10}
                    />

                    <VStack mx={2}>
                      <Box mt={2}>
                        <Box p={3} mb={3}>
                          {/* Text untuk menampilkan teks dengan berbagai properti */}
                          <Text bold fontSize={16}>
                            Tanggal: {pesanan.tanggal}
                          </Text>
                          <Text>Berat: {pesanan.berat}</Text>
                          <Text>Harga: {pesanan.Harga}</Text>
                        </Box>
                      </Box>
                    </VStack>
                  </HStack>

                  <HStack justifyContent={"flex-end"}>
                    <Box>
                      <Button
                        p={2}
                        mr={2}
                        mb={2}
                        rounded="md"
                        overflow="hidden"
                        borderColor="#0878CA"
                        borderWidth="1"
                        backgroundColor="#0878CA"
                      >
                        <TouchableOpacity
                          onPress={() => navigation.navigate("RincianPesanan", { pesananId: pesanan.id })}
                        >
                          <Text bold color={"#FFFF"}>
                            Rincian Pesanan
                          </Text>
                        </TouchableOpacity>
                      </Button>
                    </Box>
                  </HStack>
                </Box>
              </Stack>
            </Box>
          ))}
        
        </ScrollView>
      
    </>
  );
};

export default RiwayatPesanan;
