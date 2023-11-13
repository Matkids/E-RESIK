import {
    Heading,
    Box,
    FlatList,
    HStack,
    Avatar,
    VStack,
    Text,
    Spacer,
    Button,
    Modal,
    FormControl,
    Input,
  } from "native-base";
  import { useState } from "react";
import { Header } from "../components";
import Riwayat from "./riwayat";
import { useNavigation } from "@react-navigation/native";

  
  const data = [
    {
      id: "1",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"), // Menggunakan require untuk gambar lokal
    },
    {
      id: "2",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "3",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "4",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "5",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "6",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "7",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "8",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "9",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "10",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "11",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "12",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "13",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "14",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "15",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "16",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "17",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "18",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "19",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "20",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
  ];
  
  const Informasi = () => {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();
    return (
      <>
        <Header />
        <Box>
          <HStack justifyContent={"space-between"}>
            <Heading fontSize="xl" p="4" pb="3">
              Informasi Harga
            </Heading>
            <Button
            m={2}
            ml={2}
            mr={2}
            rounded={10}
            bg={"#1a91ff"}
            onPress={() => setShowModal(true)}
          >
            <Text color={"#FFF"}>Edit</Text>
          </Button>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Edit Informasi Laundry</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Jenis Laundry</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Harga Laundry</FormControl.Label>
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
                    Batal
                  </Button>
                  <Button
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    Tambah
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
            <Button 
              mx={2}
              my={2}
              ml={2}
              pr={2}
              rounded={10}
              bg={"#1a91ff"}
              onPress={() => navigation.navigate (Riwayat)}
            >
              <Text color={"#FFF"}>Riwayat</Text>
            </Button >
          </HStack>
          <FlatList
            mx={3}
            my={2}
            data={data}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={item.avatarUrl} />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </>
    );
  };
  
  export default Informasi;