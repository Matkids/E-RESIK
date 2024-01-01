import {
  Image,
  Divider,
  ScrollView,
  VStack,
  Text,
  HStack,
  Button,
  Box,
  Modal,
  Stack,
  Container,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";

import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Header } from "../component";

const data = [
  {
    id: 1,
    tanggal: "02 November 2023",
    berat: "15 kg",
    harga: "Rp 75.000",
  },
];

const Riwayat = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header title={"Riwayat"} withBack="true" />
      <SafeAreaView flex={1}>
        {/* <ScrollView> */}
        <Box
          mx={6}
          mt={7}
          rounded="xl"
          overflow="hidden"
          shadow={4}
          borderColor="#0878CA"
          borderWidth="1"
          backgroundColor="#FFFF"
        >
          <Stack p="2" space={3}>
            <Box>
              <HStack
                space={2}
                ml={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text bold>Anggi Aulia</Text>

                <TouchableOpacity>
                  <Button
                    mx={4}
                    mt={2}
                    p={2}
                    rounded="md"
                    overflow="hidden"
                    borderColor="#0878CA"
                    borderWidth="1"
                    backgroundColor="#0878CA"
                    onPress={() => setShowModal(true)}
                  >
                    <Text
                      color={"#FFFF"}
                      fontSize={"sm"}
                      bold
                      onPress={() => setShowModal(true)}
                    >
                      Hapus
                    </Text>
                  </Button>
                </TouchableOpacity>
              </HStack>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content
                  borderWidth={1}
                  borderColor={"#0878CA"}
                  maxWidth="400px"
                >
                  <Box mx={2}>
                    <Modal.CloseButton />
                    <Modal.Header>Hapus Riwayat</Modal.Header>

                    <Modal.Footer>
                      <Button.Group space={2}>
                        <Button
                          bg={"#0878CA"}
                          borderRadius={"xl"}
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          <Text color={"#FFFF"}>Hapus</Text>
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Box>
                </Modal.Content>
              </Modal>
            </Box>
            <Box>
              <Divider />
              <HStack mx={4}>
                <Image
                  source={require("../assets/icon.png")}
                  alt="Alternate Text"
                  size="md"
                  borderColor={"#0878CA"}
                  borderWidth={"1"}
                  mt={4}
                  mb={2}
                  rounded={10}
                />

                <VStack mx={2}>
                  <Box mt={2}>
                    {data.map((item) => (
                      <Box key={item.id} p={3} mb={3}>
                        <Text bold fontSize={16}>
                          Tanggal: {item.tanggal}
                        </Text>
                        <Text>Berat: {item.berat}</Text>
                        <Text>Harga: {item.harga}</Text>
                      </Box>
                    ))}
                  </Box>
                </VStack>
              </HStack>
              <HStack justifyContent={"flex-end"}>
                <Box>
                  <Button
                    p={2}
                    mr={2}
                    mb={2}
                    rounded="md"
                    overflow="hidden"
                    borderColor="#0878CA"
                    borderWidth="1"
                    backgroundColor="#0878CA"
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("RincianPesanan")}
                    >
                      <Text bold color={"#FFFF"}>
                        Rincian Pesanan
                      </Text>
                    </TouchableOpacity>
                  </Button>
                </Box>
              </HStack>
            </Box>
          </Stack>
        </Box>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

export default Riwayat;
