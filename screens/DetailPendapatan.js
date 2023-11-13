
import { Header } from "../components/";
import { Box, HStack, Text, FlatList, Image, VStack, Spacer, Button, AlertDialog,Center } from 'native-base';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const DetailPendapatan = () => {
    
  const navigation = useNavigation();
    const data = [{
        id: "1",
        hari: "Senin",
        pendapatan: "Rp. 500.000,-"
      }, {
        id: "2",
        hari: "Selasa",
        pendapatan: "Rp. 450.000,-"
      }, {
        id: "3",
        hari: "Rabu",
        pendapatan: "Rp. 1.000.000,-"
      }, {
        id: "4",
        hari: "Kamis",
        pendapatan: "Rp. 650.0000,-"
      }, {
        id: "5",
        hari: "Jumat",
        pendapatan: "Rp. 300.000,-"
      }];

      return (
    <>  
    <Header title={"HOME"} />
      <Center flex={1}>
      </Center>
      <Box mr="4" ml="4" mb="500" >
          <FlatList data={data} renderItem={({item}) =>
            <Box borderBottomWidth="2" borderStyle="dotted" borderColor="#427D9D" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[4, 4]} justifyContent="space-between">
              <Image source={require("../assets/hari.jpg")} w="10" h="10"></Image>
                  <VStack>
                    <Text color="#427D9D" mt="2" bold>
                      {item.hari}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" color="#427D9D" alignSelf="flex-start" mt="2">
                    {item.pendapatan}
                  </Text>
                </HStack>
                </Box>} keyExtractor={item => item.id} />
                <Box alignItems="center">
                <Button mt="7"
                        onPress={() => navigation.navigate('TambahPendapatan')
                        }
                    >
                        Tambah</Button>
          </Box>
              </Box>
    </>
              );
    
    }
export default DetailPendapatan