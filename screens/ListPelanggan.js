import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  ScrollView,
  Button,
  Modal,
  HStack,
  TouchableOpacity,
  IconButton,
} from "native-base";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FIREBASE from "../src/config/FIREBASE";

const ListPelanggan = () => {
  // Menggunakan useNavigation hook dari React Navigation untuk mendapatkan objek navigasi.
  const navigation = useNavigation();
  
  // State untuk menangani tampilan modal dan data pelanggan terpilih.
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  
  // State untuk menyimpan data pelanggan yang diambil dari Firebase.
  const [dataPelanggan, setDataPelanggan] = useState([]);

  // Menggunakan useEffect hook untuk mendapatkan data pelanggan dari Firebase.
  useEffect(() => {
    // Mendapatkan referensi ke node "TambahPelanggan" pada database Firebase.
    const pelangganRef = FIREBASE.database().ref("TambahPelanggan");

    // Listener untuk memperbarui state dataPelanggan setiap kali ada perubahan pada node Firebase.
    const onDataChangeListener = (snapshot) => {
      const data = snapshot.val();

      // Jika ada data, mengonversi objek data ke dalam bentuk array dan menyimpannya di state dataPelanggan.
      if (data) {
        const pelangganArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setDataPelanggan(pelangganArray);
      }
    };

    // Mengaktifkan listener ketika komponen di-mount dan membersihkannya saat komponen di-unmount.
    pelangganRef.on("value", onDataChangeListener);

    return () => {
      pelangganRef.off("value", onDataChangeListener);
    };
  }, []);

  // Menampilkan modal dengan detail pelanggan terpilih.
  const handleShowModal = (customer) => {
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  // Menghapus pelanggan dari Firebase dan memperbarui state lokal setelah dihapus.
  const handleDeleteCustomer = (customerId) => {
    FIREBASE.database()
      .ref(`TambahPelanggan/${customerId}`)
      .remove()
      .then(() => {
        // Hapus data dari state lokal setelah dihapus dari Firebase.
        setDataPelanggan((prevData) =>
          prevData.filter((customer) => customer.id !== customerId)
        );
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error removing customer: ", error);
      });
  };

  return (
    <>
      {/* Header komponen dengan judul "List Pelanggan" dan tombol back. */}
      <Header title={"List Pelanggan"} withBack="true" />
      
      {/* SafeAreaView untuk memastikan area tampilan aman di sekitar layar. */}
      <SafeAreaView flex={1}>
        {/* ScrollView untuk memungkinkan scrolling jika kontennya lebih panjang dari layar. */}
        <ScrollView>
          {/* Box untuk menampilkan daftar pelanggan dalam bentuk kartu. */}
          <Box p={4}>
            {dataPelanggan.map((customer, index) => (
              <Box
                key={customer.id}
                w="100%"
                rounded="lg"
                bg="#FFFF"
                borderColor="#0878CA"
                borderWidth="2"
                my={2}
                p={4}
              >
                <VStack space={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    {index + 1}. {customer.nama}
                  </Text>
                  <Text>Jenis Kelamin: {customer.jenisKelamin}</Text>
                  <Text>No. Handphone: {customer.noHp}</Text>
                  <HStack space={2} mt={2}>
                    {/* Tombol untuk menampilkan detail pelanggan dan ikon hapus. */}
                    <Button
                      variant="outline"
                      size="sm"
                      onPress={() => handleShowModal(customer)}
                    >
                      Detail Pelanggan
                    </Button>
                    <IconButton
                      icon={<Ionicons name="trash-outline" size={20} />}
                      onPress={() => handleDeleteCustomer(customer.id)}
                    />
                  </HStack>
                </VStack>
              </Box>
            ))}

            {/* Modal untuk menampilkan detail pelanggan terpilih. */}
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              size="lg"
            >
              <Modal.Content
                maxWidth="350"
                borderColor={"#0878CA"}
                borderWidth={2}
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Detail Customer</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nama</Text>
                        <Text color="blueGray.400">
                          {selectedCustomer.nama}
                        </Text>
                      </HStack>
                      {/* Langkah serupa diikuti untuk data lainnya seperti Jenis Kelamin, Alamat, dan No. Handphone. */}
                    </VStack>
                  </Modal.Body>
                </Box>
              </Modal.Content>
            </Modal>

            {/* Tombol untuk menambahkan pelanggan baru. */}
            <Button
              borderRadius={"xl"}
              bg="#0878CA"
              mt={4}
              onPress={() => navigation.navigate("BuatPelanggan")}
            >
              Tambah Pelanggan
            </Button>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// Export default dari komponen ListPelanggan.
export default ListPelanggan;
