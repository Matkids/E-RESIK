import React, { useState } from "react";
import { Header } from "../components";
import { Heading, Button,Box,Stack, FormControl, Input, Icon,Select,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateOrder = () => {
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [layanan, setLayanan] = useState(""); // changed label to layanan
  const [tanggal, setTanggal] = useState(""); // changed label to tanggal
  const [berat, setBerat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigation = useNavigation();

  const layananOptions = [ // changed label to layanan
    { label: "Cuci Kiloan", value: "Cuci Kiloan" }, // changed options
    { label: "Cuci Satuan", value: "Cuci Satuan" }, // changed options
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
            placeholder="Tanggal" // changed label to tanggal
            value={tanggal} // changed label to tanggal
            onChangeText={setTanggal} // changed label to tanggal
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
