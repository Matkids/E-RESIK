import React from "react";
import { Header } from "../components";
import {
  Button,
  Box,
  Stack,
  Text,
  Divider,
  HStack,
  Icon,
  Heading,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const KonfirmasiPesanan = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title={"Konfirmasi Pesanan"} withBack="true" />
      <ScrollView>
        <Box
          p={2}
          mx={10}
          my={4}
          bg="#FFFF"
          borderRadius="xl"
          borderColor="#0878CA"
          borderWidth={"2"}
        >
          <Stack space={4} mx="auto" mt={4}>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="person" />} />
              <Text bold> Nama</Text>
            </HStack>
            <Text>Anggi Cantik</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="call" />} />
              <Text bold> Nomor HP</Text>
            </HStack>
            <Text>082140715463</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="home" />} />
              <Text bold> Alamat</Text>
            </HStack>
            <Text>Sidoarjo - Jawa Timur</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="list" />} />
              <Text bold> Jenis Layanan</Text>
            </HStack>
            <Text>Laundry Express</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="calendar" />} />
              <Text bold> Tanggal Pesanan</Text>
            </HStack>
            <Text>15 November 2023</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="barbell" />} />
              <Text bold> Berat</Text>
            </HStack>
            <Text>15 kg</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="information-circle" />} />
              <Text bold> Keterangan</Text>
            </HStack>
            <Text mb={3}>10 Kaos, 3 Flannel, 5 Jaket, 5 kaos Kaki</Text>
          </Stack>
          <Box mb={4} px={5}>
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              Harga: Rp240.000
            </Text>
            <Button
              bg={"#0878CA"}
              rounded={"xl"}
              onPress={() => navigation.navigate("Tagihan")}
              mt={2}
              mx={7}
            >
              Konfirmasi Pesanan
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default KonfirmasiPesanan;