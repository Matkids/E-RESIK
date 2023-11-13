
import { Box, Stack, Heading, HStack, Text, ScrollView, Image, Center} from 'native-base';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';



const ListPendapatan = () => {
  const navigation = useNavigation();
  return (
    
    <>
    <Header title={"HOME"} />
      <Center flex={1}>
      </Center>
    <SafeAreaView backgroundColor={"#427D9D"}>
      <ScrollView>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('DetailPendapatan')}>
          <Box alignItems="center" mt="10">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="#164863" borderWidth="1" backgroundColor="blue.50">
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Image source={require("../assets/hari.jpg")} w="20" h="20"></Image>
                  <Heading color="#427D9D" size="md" ml="-1">
                    MINGGUAN
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Berisi tentang Laporan Pendapatan selama satu hari dimulai dari
                  jam buka 08.00 WIB sampai jam tutup 22.00 WIB.
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('DetailPendapatan')}>
          <Box alignItems="center" mt={5}>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="#164863" borderWidth="1" backgroundColor="blue.50">
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Image source={require("../assets/bulan.jpg")} w="20" h="20"></Image>
                  <Heading color="#427D9D" size="md" ml="-1">
                    BULANAN
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Berisi tentang Laporan Pendapatan selama satu bulan dimulai dari
                  awal bulan tanggal 1 sampai akhir tanggal 30.
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Box alignItems="center" mt={5}>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="#164863" borderWidth="1" backgroundColor="blue.50">
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Image source={require("../assets/tahun.jpg")} w="20" h="20"></Image>
                  <Heading color="#427D9D" size="md" ml="-1">
                    TAHUNAN
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Berisi tentang Laporan Pendapatan selama satu tahun dimulai dari
                  bulan Januari sampai bulan Desember.
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default ListPendapatan;
