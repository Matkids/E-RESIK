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
  import { Header } from "../components";
  const RincianPesanan = () => {
    const navigation = useNavigation();
    return (
      <>
        <Header title={"ListPesanan"} />
        <SafeAreaView flex={1}>
          <ScrollView flex={1}>
            <VStack px={5} pt={6}>
              <Box bg={"#1a91ff"} rounded="10" pt={2} pr={4} pb={2} pl={4} mb={3}>
                <HStack>
                  <TouchableOpacity
                    p={3}
                    onPress={() => navigation.goBack("riwayat")}
                  >
                    <Ionicons
                      name="arrow-back-outline"
                      size={30}
                      color={"white"}
                    />
                  </TouchableOpacity>
                  <Text bold py="center" pl="2" fontSize="xl" color={"#FFF"}>
                    Rincian Pesanan
                  </Text>
                </HStack>
                <Divider mb={2} />
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
                      <Text color={"#FFF"}>ID Pesanan: P001</Text>
                      <Text color={"#FFF"}>Tanggal Pesanan: 2 November 2023</Text>
                      <Text color={"#FFF"}>Jenis: Laundry Express</Text>
                      <Text color={"#FFF"}>Jumlah Cucian: 15 Kg</Text>
                      <Text color={"#FFF"}>Detail Barang: 10 Kaos, 3 Flannel, 5 Jaket, 5 kaos Kaki</Text>
                      <Text color={"#FFF"}>Harga Per Kg: Rp 16.000</Text>
                      <Text color={"#FFF"}>Total Harga: Rp 240.000</Text>
                    </Box>
                  </Container>
                </HStack>
                <Divider mb={2} />
              </Box>
            </VStack>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
  
  export default RincianPesanan;