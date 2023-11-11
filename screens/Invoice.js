import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Box, VStack, Text, Divider } from "native-base";
import { Header } from "../components";

const Invoice = () => {
  const navigation = useNavigation();

  return (
    <Box>
      <Header title="Invoice" />
      <Box borderWidth={1} borderColor="#ccc" borderRadius={5} padding={10} marginBottom={20}>
        <VStack space={2}>
          <Text bold>Nama:</Text>
          <Text>Muhammad Zhahnur Arif</Text>

          <Text bold>Nomor HP:</Text>
          <Text>082140715463</Text>

          <Text bold>Alamat:</Text>
          <Text>Sidoarjo</Text>

          <Text bold>Jenis Layanan:</Text>
          <Text>Cuci Basah</Text>

          <Text bold>Tanggal Pesanan:</Text>
          <Text>10 April 2002</Text>

          <Text bold>Berat (kg):</Text>
          <Text>10</Text>

          <Text bold>Keterangan:</Text>
          <Text>Baju Batik, Baju Sekolah, Baju Pramuka</Text>

          <Divider />

          <Text bold>Harga:</Text>
          <Text>Rp35.000</Text>
        </VStack>
        <Button onPress={() => navigation.navigate('Home')} width="auto">
        OK
      </Button>
      </Box>
    </Box>
  );
};

export default Invoice;