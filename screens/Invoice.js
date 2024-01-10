import React from "react";
import { Header } from "../components";
import {
  Button,
  Box,
  Stack,
  Text,
  Divider,
  HStack,
  Heading,
  Image,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Invoice = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title={"Layanan"} withBack="true" />
      <ScrollView>
        <Box>
          <Box
            p={2}
            mx={5}
            my={5}
            bg="#FFFF"
            borderRadius="3xl"
            borderColor="#0878CA"
            borderWidth={"2"}
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
                <Text style={{ flex: 1, textAlign: "right" }}>Anggi Aulia</Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Nomor HP
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  082140715463
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Alamat
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  Jl. Ketintang, Surabaya
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Jenis Layanan
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  Laundry Express
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Tanggal Pesanan
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  02 November 2023
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Berat
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>15 kg</Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "left" }}>
                  Harga
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>Rp240.000</Text>
              </HStack>

              <HStack alignItems="center">
                <Text bold style={{ flex: 1, textAlign: "center" }}>
                  Keterangan
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text style={{ flex: 1, textAlign: "center" }}>
                  10 Kaos, 3 Flannel, 5 Jaket, 5 kaos Kaki
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
              <Button
                p={2}
                mx={20}
                mb={2}
                bg={"#0878CA"}
                rounded={15}
                onPress={() => navigation.navigate("Profil")}
              >
                OKE
              </Button>
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Invoice;
