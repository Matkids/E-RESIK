import {
  Image,
  Divider,
  ScrollView,
  VStack,
  Text,
  HStack,
  Button,
  Box,
  FormControl,
  Modal,
  Input,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../component";
import { useState } from "react";

const data = [
  {
    id: 1,
    tanggal: "02 November 2023",
    jam: "09:00",
    berat: "15 kg",
    harga: "Rp 75.000",
  },
];

const Riwayat = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header title={"Riwayat"} />
      <ScrollView>
        <VStack px={4} my={2}>
          <VStack>
            <Box bg={"#1a91ff"} rounded="10" pt={2} pb={2} pl={4} my={4}>
              <HStack justifyContent={"space-between"}>
                <Text bold py={2} fontSize="xl" color={"#FFF"}>
                  Laundry
                </Text>

                <Button
                  mx={2}
                  my={2}
                  ml={20}
                  mr={2}
                  rounded={10}
                  bg={"#FFF"}
                  onPress={() => setShowModal(true)}
                >
                  <Text color={"#1a91ff"}>Hapus</Text>
                </Button>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header >Hapus Riwayat</Modal.Header>
                    <Modal.Body>
                      <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input />
                      </FormControl>
                      <FormControl mt="3">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                      </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button.Group space={2}>
                        <Button
                          variant="ghost"
                          colorScheme="blueGray"
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          Save
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              </HStack>
              <Divider />
              <HStack pt={2}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/69/b8/0d/69b80d27d5c899b43c861e06ff53c619.jpg",
                  }}
                  alt="Alternate Text"
                  size="md"
                  mt={4}
                  mb={2}
                  rounded={10}
                />
                <HStack>
                  {data.map((item) => (
                    <Box key={item.id} p={3} mb={3}>
                      <Text bold fontSize={16}>
                        Tanggal: {item.tanggal}
                      </Text>
                      <Text>Jam: {item.jam}</Text>
                      <Text>Berat: {item.berat}</Text>
                      <Text>Harga: {item.harga}</Text>
                    </Box>
                  ))}
                </HStack>
              </HStack>
              <Divider mb={2} />
              <HStack justifyContent={"flex-end"}>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("ListPesanan")}
                    px={2}
                    mx={1}
                    my={2}
                    rounded={10}
                    bg={"#FFF"}
                  >
                    <Text bold color={"#1a91ff"}>
                      Rincian Pesanan
                    </Text>
                  </Button>
                </TouchableOpacity>
                <Button px={2} mr={4} mx={1} my={2} rounded={10} bg={"#FFF"}>
                  <Text color={"green.500"}>Telah Selesai</Text>
                </Button>
              </HStack>
            </Box>

            <Box bg={"#1a91ff"} rounded="10" pt={2} pr={4} pb={2} pl={4}>
              <Text bold py={2} fontSize="xl" color={"#FFF"}>
                Laundry
              </Text>
              <Divider />
              <HStack pt={2}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/69/b8/0d/69b80d27d5c899b43c861e06ff53c619.jpg",
                  }}
                  alt="Alternate Text"
                  size="md"
                  mt={4}
                  mb={2}
                  rounded={10}
                />
                <HStack>
                  {data.map((item) => (
                    <Box key={item.id} p={3} mb={3}>
                      <Text bold fontSize={16}>
                        Tanggal: {item.tanggal}
                      </Text>
                      <Text>Jam: {item.jam}</Text>
                      <Text>Berat: {item.berat}</Text>
                      <Text>Harga: {item.harga}</Text>
                    </Box>
                  ))}
                </HStack>
              </HStack>
              <Divider mb={2} />
              <HStack justifyContent={"flex-end"}>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("ListPesanan")}
                    px={2}
                    mx={1}
                    my={2}
                    rounded={10}
                    bg={"#FFF"}
                  >
                    <Text bold color={"#1a91ff"}>
                      Rincian Pesanan
                    </Text>
                  </Button>
                </TouchableOpacity>
                <Button px={2} mx={1} my={2} rounded={10} bg={"#FFF"}>
                  <Text color={"green.500"}>Telah Selesai</Text>
                </Button>
              </HStack>
            </Box>

            <Box bg={"#1a91ff"} rounded="10" pt={2} pr={4} pb={2} pl={4} mt={4}>
              <Text bold py={2} fontSize="xl" color={"#FFF"}>
                Laundry
              </Text>
              <Divider />
              <HStack pt={2}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/69/b8/0d/69b80d27d5c899b43c861e06ff53c619.jpg",
                  }}
                  alt="Alternate Text"
                  size="md"
                  mt={4}
                  mb={2}
                  rounded={10}
                />
                <HStack>
                  {data.map((item) => (
                    <Box key={item.id} p={3} mb={3}>
                      <Text bold fontSize={16}>
                        Tanggal: {item.tanggal}
                      </Text>
                      <Text>Jam: {item.jam}</Text>
                      <Text>Berat: {item.berat}</Text>
                      <Text>Harga: {item.harga}</Text>
                    </Box>
                  ))}
                </HStack>
              </HStack>
              <Divider mb={2} />
              <HStack justifyContent={"flex-end"}>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("ListPesanan")}
                    px={2}
                    mx={1}
                    my={2}
                    rounded={10}
                    bg={"#FFF"}
                  >
                    <Text bold color={"#1a91ff"}>
                      Rincian Pesanan
                    </Text>
                  </Button>
                </TouchableOpacity>
                <Button px={2} mx={1} my={2} rounded={10} bg={"#FFF"}>
                  <Text color={"green.500"}>Telah Selesai</Text>
                </Button>
              </HStack>
            </Box>

            <Box bg={"#1a91ff"} rounded="10" pt={2} pr={4} pb={2} pl={4} mt={4}>
              <Text bold py={2} fontSize="xl" color={"#FFF"}>
                Laundry
              </Text>
              <Divider />
              <HStack pt={2}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/69/b8/0d/69b80d27d5c899b43c861e06ff53c619.jpg",
                  }}
                  alt="Alternate Text"
                  size="md"
                  mt={4}
                  mb={2}
                  rounded={10}
                />
                <HStack>
                  {data.map((item) => (
                    <Box key={item.id} p={3} mb={3}>
                      <Text bold fontSize={16}>
                        Tanggal: {item.tanggal}
                      </Text>
                      <Text>Jam: {item.jam}</Text>
                      <Text>Berat: {item.berat}</Text>
                      <Text>Harga: {item.harga}</Text>
                    </Box>
                  ))}
                </HStack>
              </HStack>
              <Divider mb={2} />
              <HStack justifyContent={"flex-end"}>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("ListPesanan")}
                    px={2}
                    mx={1}
                    my={2}
                    rounded={10}
                    bg={"#FFF"}
                  >
                    <Text bold color={"#1a91ff"}>
                      Rincian Pesanan
                    </Text>
                  </Button>
                </TouchableOpacity>
                <Button px={2} mx={1} my={2} rounded={10} bg={"#FFF"}>
                  <Text color={"green.500"}>Telah Selesai</Text>
                </Button>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default Riwayat;
