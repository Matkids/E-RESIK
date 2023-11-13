import React, { useState } from "react";
import { Header } from "../components";
import { Heading, Button,Box,Stack, FormControl, Input, Icon,Select,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateOrder = () => {
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jenisLayanan, setJenisLayanan] = useState("");
  const [tanggalPesanan, setTanggalPesanan] = useState("");
  const [berat, setBerat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigation = useNavigation();

  const jenisLayananOptions = [
    { label: "Cuci Basah", value: "Cuci Basah" },
    { label: "Cuci Kering", value: "Cuci Kering" },
    { label: "Cuci Setrika", value: "Cuci Setrika" },
  ];

  return (
    <Box>
      <Header />
      <Heading mt={5} as="h1" size="lg" textAlign="center">
        Buat Pesanan
      </Heading>
      <Stack space={4} w="90%" mx="auto" mt={8}>
        <FormControl>
          <Input
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
            placeholder="Jenis Layanan"
            value={jenisLayanan}
            onValueChange={setJenisLayanan}
            InputLeftElement={
              <Icon margin={2} as={MaterialIcons} name="work" size={5} />
            }
          >
            {jenisLayananOptions.map((option) => (
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
            placeholder="Tanggal Pesanan"
            value={tanggalPesanan}
            onChangeText={setTanggalPesanan}
            InputLeftElement={
              <Icon margin={2} as={MaterialIcons} name="date-range" size={5} />
            }
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="Berat (kg)"
            value={berat}
            onChangeText={setBerat}
            InputLeftElement={
              <Icon margin={2} as={MaterialIcons} name="fitness-center" size={5} />
            }
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="Keterangan"
            value={keterangan}
            onChangeText={setKeterangan}
            InputLeftElement={
              <Icon margin={2} as={MaterialIcons} name="note" size={5} />
            }
          />
        </FormControl>
        <Box alignItems="center" mt={2}>
          <Button onPress={() => navigation.navigate("Confirmation")}>
            Submit Pesanan
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};


export default CreateOrder;