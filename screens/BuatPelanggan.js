import React, { useState } from "react";
import {
  Box,
  FormControl,
  Radio,
  Input,
  Button,
  Text,
  Center,
  ScrollView,
} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FIREBASE from "../src/config/FIREBASE"; // Pastikan Anda mengimpor modul FIREBASE

const BuatPelanggan = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");

  // State untuk menyimpan data pelanggan
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  
  const tambahPelanggan = () => {
    // Membuat objek data pelanggan
    const pelangganData = {
      nama,
      noHp,
      alamat,
      jenisKelamin: value === "one" ? "Laki-laki" : "Perempuan", // Menambahkan jenisKelamin sesuai dengan nilai value radio button
    };

    // Mengakses referensi ke node "TambahPelanggan" di Firebase
    const pelangganRef = FIREBASE.database().ref('TambahPelanggan');

    // Menyimpan data pelanggan ke database
    pelangganRef.push(pelangganData)
      .then(() => {
        console.log('Data pelanggan berhasil ditambahkan!');
        // Navigate ke list pelanggan jika data berhasil ditambahkan
        navigation.navigate("ListPelanggan");
      })
      .catch((error) => {
        console.error('Gagal menambahkan data pelanggan:', error);
      });
  };

  return (
    <>
      <Header title={"Tambah Pelanggan"} withBack="true" />
      <Center>
        <SafeAreaView>
          <Box
            mt={10}
            p="5"
            bg="#FFFF"
            w="80"
            borderColor="#0878CA"
            borderWidth="2"
            rounded="2xl"
            shadow={2}
          >
            <FormControl isRequired>
              {/* Nama */}
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                variant="rounded"
                type="text"
                placeholder="nama"
                onChangeText={(text) => setNama(text)}
              />

              {/* Jenis Kelamin */}
              <FormControl.Label>Jenis Kelamin</FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio value="one" my={1}>
                  Laki-laki
                </Radio>
                <Radio value="two" my={1}>
                  Perempuan
                </Radio>
              </Radio.Group>

              {/* Alamat */}
              <FormControl.Label>Alamat</FormControl.Label>
              <Input
                variant="rounded"
                type="text"
                placeholder="alamat"
                onChangeText={(text) => setAlamat(text)}
              />
              <FormControl.HelperText>
                {" "}
                Masukkan alamat lengkap{" "}
              </FormControl.HelperText>

              {/* No. Hp*/}
              <FormControl.Label>No. Handphone</FormControl.Label>
              <Input
                variant="rounded"
                type="number"
                placeholder="+62"
                onChangeText={(text) => setNoHp(text)}
              />

              {/* BUTTON */}
              <Center>
                <Button
                  bg="#0878CA"
                  borderRadius="xl"
                  justifyContent={"center"}
                  mt={5}
                  onPress={tambahPelanggan}
                  w={100}
                >
                  Submit
                </Button>
              </Center>
            </FormControl>
          </Box>
        </SafeAreaView>
      </Center>
    </>
  );
};

export default BuatPelanggan;
