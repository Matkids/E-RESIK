import React, { useState } from "react";
import { Header } from "../component";
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

const BuatPesanan = () => {
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [layanan, setLayanan] = useState(""); // changed label to layanan
  const [tanggal, setTanggal] = useState(""); // changed label to tanggal
  const [berat, setBerat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigation = useNavigation();

  const layananOptions = [
    // changed label to layanan
    { label: "Laundry Express", value: "Laundry Express" }, // changed options
    { label: "Laundry Regular", value: "Laundry Regular" }, // changed options
    { label: "Cuci + Kering + Setrika", value: "Cuci + Kering + Setrika" },
    { label: "Setrika", value: "Setrika" },
  ];

  return (
    <>
      <Header title={"Buat Pesanan"} withBack="true" />

      <ScrollView>
        <Box>
          <Stack space={4} w="90%" mx="auto" mt={8}>
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
            <FormControl>
              <Select
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Layanan" // changed label to layanan
                value={layanan} // changed label to layanan
                onValueChange={setLayanan} // changed label to layanan
                InputLeftElement={
                  <Icon margin={2} as={MaterialIcons} name="work" size={5} />
                }
              >
                {layananOptions.map((option) => (
                  <Select.Item
                    label={option.label}
                    value={option.value}
                    key={option.value}
                  />
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Input
                bg={"#FFFF"}
                borderColor={"#0878CA"}
                mx={4}
                borderRadius={"lg"}
                placeholder="Tanggal" // changed label to tanggal
                value={tanggal} // changed label to tanggal
                onChangeText={setTanggal} // changed label to tanggal
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
                  <Icon margin={2} as={MaterialIcons} name="note" size={5} />
                }
              />
            </FormControl>
            <Box alignItems="center" mt={2}>
              <Button
                rounded={"xl"}
                bg={"#0878CA"}
                onPress={() => navigation.navigate("KonfirmasiPesanan")}
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
