import React from "react";
import { Header } from "../components";
import { Button, Box, Stack, Text, Divider, HStack, VStack, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";

const ConfirmationOrder = ({ route }) => {
  const navigation = useNavigation();
  const { nama, noHp, alamat, jenisLayanan, tanggalPesanan, berat, keterangan } =
    route.params;

  return (
    <Box>
      <Header title="Konfirmasi Pesanan" />
      <Stack space={4} w="90%" mx="auto">
        <VStack space={2}>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Nama:</Text>
            <Text>{nama}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Nomor HP:</Text>
            <Text>{noHp}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Alamat:</Text>
            <Text>{alamat}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Jenis Layanan:</Text>
            <Text>{jenisLayanan}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Tanggal Pesanan:</Text>
            <Text>{tanggalPesanan}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Berat (kg):</Text>
            <Text>{berat}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Keterangan:</Text>
            <Text>{keterangan}</Text>
          </HStack>
        </VStack>
        <Divider />
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading size="md" fontWeight="bold">
            Harga:
          </Heading>
          <Text fontWeight="bold">Rp35.000</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-around">
          <Button
            colorScheme="danger"
            onPress={() => navigation.navigate("Home")}
          >
            Batal
          </Button>
          <Button onPress={() => navigation.navigate("Invoice")}>
            Konfirmasi
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConfirmationOrder;