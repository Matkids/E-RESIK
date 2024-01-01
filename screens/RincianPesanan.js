import {
  Image,
  Divider,
  ScrollView,
  VStack,
  Text,
  HStack,
  Box,
  Container,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../component";
const RincianPesanan = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"Rincian Pesanan"} withBack="true" />
      <SafeAreaView flex={1}>
        <ScrollView flex={1}>
          <VStack px={5} pt={6}>
            <Box
              bg={"#FFFF"}
              rounded="xl"
              overflow="hidden"
              shadow={4}
              borderColor="#0878CA"
              borderWidth="1"
              backgroundColor="#FFFF"
              pt={2}
              pr={4}
              pb={2}
              pl={4}
              mb={3}
            >
              <Box ml={2} m={2}>
                <Text bold>Anggi Aulia</Text>
              </Box>
              <Divider />
              <HStack px={2} py={2}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/69/b8/0d/69b80d27d5c899b43c861e06ff53c619.jpg",
                  }}
                  alt="Alternate Text"
                  size="md"
                  pt={2}
                  rounded={10}
                />
                <Container pl={2} pb={2}>
                  <Box>
                    <Text color={"#000000"}>ID Pesanan: P001</Text>
                    <Text color={"#000000"}>
                      Tanggal Pesanan: 2 November 2023
                    </Text>
                    <Text color={"#000000"}>Jenis: Laundry Express</Text>
                    <Text color={"#000000"}>Jumlah Cucian: 15 Kg</Text>
                    <Text color={"#000000"}>
                      Detail Barang: 10 Kaos, 3 Flannel, 5 Jaket, 5 kaos Kaki
                    </Text>
                    <Text color={"#000000"}>Harga Per Kg: Rp 16.000</Text>
                    <Text color={"#000000"}>Total Harga: Rp 240.000</Text>
                  </Box>
                </Container>
              </HStack>
            </Box>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RincianPesanan;
