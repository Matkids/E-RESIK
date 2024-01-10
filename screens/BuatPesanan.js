import React, { useState } from "react";
import { Header } from "../components";
import {
  Heading,
  Button,
  Box,
  Stack,
  FormControl,
  Input,
  Icon,
  Select,
  ScrollView,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FIREBASE from "../src/config/FIREBASE";

const BuatPesanan = () => {
  // State untuk menyimpan data input pengguna
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [layanan, setLayanan] = useState(""); 
  const [tanggal, setTanggal] = useState("");
  const [berat, setBerat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [Harga, setHarga] = useState("");

  // Navigasi untuk berpindah antar layar
  const navigation = useNavigation();

  // Opsi untuk pilihan layanan
  const layananOptions = [
    { label: "Laundry Express", value: "Laundry Express" },
    { label: "Laundry Regular", value: "Laundry Regular" },
    { label: "Cuci + Kering + Setrika", value: "Cuci + Kering + Setrika" },
    { label: "Setrika", value: "Setrika" },
  ];

  // Fungsi untuk membuat pesanan dan menyimpannya di database Firebase
  const buatPesanan = () => {
    // Membuat objek data pesanan dari input pengguna
    const pesananData = {
      nama,
      noHp,
      alamat,
      layanan,
      tanggal,
      berat,
      keterangan,
      Harga,
    };

    // Menampilkan data pesanan di console
    console.log(pesananData);

    // Mengakses referensi ke node "Pesanan" di database Firebase
    const pesananRef = FIREBASE.database().ref('Pesanan');

    // Menyimpan data pesanan ke database Firebase
    pesananRef.push(pesananData)
      .then(() => {
        console.log('Data pesanan berhasil ditambahkan!');
        navigation.navigate("KonfirmasiPesanan"); // Navigasi ke layar KonfirmasiPesanan setelah menambahkan pesanan
      })
      .catch((error) => {
        console.error('Gagal menambahkan data pesanan:', error);
      });
  };

  // Komponen yang akan ditampilkan di layar
  return (
    <>
      {/* Header aplikasi */}
      <Header title={"Buat Pesanan"} withBack="true" />

      {/* Scroll view untuk konten agar bisa di-scroll jika panjangnya melebihi layar */}
      <ScrollView>
        {/* Konten form untuk membuat pesanan */}
        <Box>
          <Stack space={4} w="90%" mx="auto" mt={8}>
            {/* Input untuk nama */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Nama"
                value={nama}
                onChangeText={setNama}
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="person" size={5} />
                }
              />
            </FormControl>
            {/* Input untuk nomor HP */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Nomor HP"
                value={noHp}
                onChangeText={setNoHp}
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="phone" size={5} />
                }
              />
            </FormControl>
            {/* Input untuk alamat */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Alamat"
                value={alamat}
                onChangeText={setAlamat}
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="home" size={5} />
                }
              />
            </FormControl>
            {/* Dropdown untuk memilih jenis layanan */}
            <FormControl>
              <Select
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Layanan"
                value={layanan}
                onValueChange={setLayanan}
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="work" size={5} />
                }
              >
                {/* Menampilkan opsi-opsi layanan */}
                {layananOptions.map((option) => (
                  <Select.Item
                    label={option.label}
                    value={option.value}
                    key={option.value}
                  />
                ))}
              </Select>
            </FormControl>
            {/* Input untuk tanggal pesanan */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Tanggal"
                value={tanggal}
                onChangeText={setTanggal}
                InputLeftElement={
                  <Icon
                    margin={2}
                    as={MaterialIcons}
                    name="date-range"
                    size={5}
                  />
                }
              />
            </FormControl>
            {/* Input untuk berat pesanan */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Berat (kg)"
                value={berat}
                onChangeText={setBerat}
                InputLeftElement={
                  <Icon
                    margin={2}
                    as={MaterialIcons}
                    name="fitness-center"
                    size={5}
                  />
                }
              />
            </FormControl>
            {/* Input untuk keterangan pesanan */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Keterangan"
                value={keterangan}
                onChangeText={setKeterangan}
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="clipboard" size={5} />
                }
              />
            </FormControl>
            {/* Input untuk harga pesanan */}
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Harga"
                value={Harga}
                onChangeText={setHarga}
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="material-symbols-outlined" size={5} />
                }
              />
            </FormControl>
            {/* Tombol untuk membuat pesanan */}
            <Box alignItems="center" mt={2}>
              <Button
                rounded={"xl"}
                bg={"#0878CA"}
                onPress={buatPesanan}
              >
                Buat Pesanan
              </Button>
            </Box>
          </Stack>
        </Box>
      </ScrollView>
    </>
  );
};

export default BuatPesanan;
