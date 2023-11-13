import React from "react";
import {
  Button,
  Box,
  Stack,
  Text,
  Divider,
  HStack,
  Heading,
  Image,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Invoice = () => {
  const navigation = useNavigation();

  return (
    <Box>
      <Box
        py={3}
        shadow={2}
        borderRadius="md"
        margin={10}
        mb={10}
        ml={3}
        mr={3}
        mt={10}
      >
        <Image
          source={require("../assets/icon.png")}
          alt="Icon"
          width={75}
          height={75}
          alignSelf="center"
          mt={3}
        />
        <Heading
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          mt={2}
          className="invoice-heading"
        >
          Struk Transaksi
        </Heading>
        <Divider mt={5} />
        <Stack space={3} w="90%" mx="auto" mt={4}>
          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "center" }}>
              192959127501218512
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Nama
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              Muhammad Zhahnur Arif
            </Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Nomor HP
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>082140715463</Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Alamat
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              Sidoarjo - Jawa Timur
            </Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Jenis Layanan
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>Cuci Setrika</Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Tanggal Pesanan
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              15 November 2023
            </Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Berat
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>10 kg</Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "left" }}>
              Harga
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>Rp35.000</Text>
          </HStack>

          <HStack alignItems="center">
            <Text bold style={{ flex: 1, textAlign: "center" }}>
              Keterangan
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text style={{ flex: 1, textAlign: "center" }}>
              Baju Batik, Baju Sekolah, Baju Pramuka
            </Text>
          </HStack>
          <Divider />
          <HStack alignItems="center">
            <Text style={{ flex: 1, textAlign: "center" }}>
              SIMPAN STRUK TRANSAKSI INI
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text style={{ flex: 1, textAlign: "center" }}>
              STRUK INI MERUPAKAN BUKTI PEMBAYARAN SAH
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text style={{ flex: 1, textAlign: "center" }}>
              TANGGAL TERBIT 12/11/2023 07.28
            </Text>
          </HStack>
          <Box alignItems="center" mt={2}>

            <Button mb={2} onPress={() => navigation.navigate ('Home')}>OKE</Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Invoice;
