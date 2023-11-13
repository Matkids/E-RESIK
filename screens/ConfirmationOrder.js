import React from "react";
import { Button, Box, Stack, Text, Divider, HStack, Icon, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ConfirmationOrder = () => {
  const navigation = useNavigation();

  return (
    <Box>
      <Box
        p={2}
        shadow={2}
        borderRadius="md"
        margin={10}
        mb={3}
        ml={3}
        mr={3}
        mt={3}
      >
        <HStack space={2} alignItems="center" mt={3} shadow={1}>
          <Icon
            margin={5}
            as={<Ionicons name="arrow-back" />}
            onPress={() => navigation.goBack('')}
          />
          <Heading fontSize="lg" fontWeight="bold">
            Ayo cek pesananmu!
          </Heading>
        </HStack>
        <Stack space={4} w="90%" mx="auto" mt={4}>
          <HStack alignItems="center">
            <Icon as={<Ionicons name="person" />} />
            <Text bold> Nama</Text>
          </HStack>
          <Text>Muhammad Zhahnur Arif</Text>
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
          <Divider my={4} />
          <HStack alignItems="center">
            <Icon as={<Ionicons name="list" />} />
            <Text bold> Jenis Layanan</Text>
          </HStack>
          <Text>Cuci Setrika</Text>
          <HStack alignItems="center">
            <Icon as={<Ionicons name="calendar" />} />
            <Text bold> Tanggal Pesanan</Text>
          </HStack>
          <Text>15 November 2023</Text>
          <HStack alignItems="center">
            <Icon as={<Ionicons name="barbell" />} />
            <Text bold> Berat</Text>
          </HStack>
          <Text>10 kg</Text>
          <HStack alignItems="center">
            <Icon as={<Ionicons name="information-circle" />} />
            <Text bold> Keterangan</Text>
          </HStack>
          <Text mb={3}>Baju Batik, Baju Sekolah, Baju Pramuka</Text>
        </Stack>
      </Box>
      <Box bg="white" p={2}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          Harga: Rp35.000
        </Text>
        <Button onPress={() => navigation.navigate("Invoice")} mt={2} mr={10} ml={10}>
          Konfirmasi Pesanan
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationOrder;