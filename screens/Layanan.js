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
import { Header } from "../component";

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
];

const Layanan = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header title={"Layanan"} withBack="true" />
      <Box>
        <HStack
          space={2}
          mt={2}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Box>
            <Button
              mx={4}
              mt={2}
              px={4}
              rounded="xl"
              overflow="hidden"
              borderColor="#0878CA"
              borderWidth="1"
              backgroundColor="#0878CA"
              onPress={() => setShowModal(true)}
            >
              <Text color={"#FFFF"} bold>
                Tambahkan
              </Text>
            </Button>
          </Box>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content
              borderRadius={"2xl"}
              borderColor={"#0878CA"}
              borderWidth={"1"}
              maxWidth="400px"
            >
              <Box mx={2}>
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
                      bg={"#0878CA"}
                      borderRadius={"xl"}
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      Tambah
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Box>
            </Modal.Content>
          </Modal>
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

export default Layanan;
