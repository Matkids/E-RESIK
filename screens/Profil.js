import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
  Button,
  ScrollView,
  Modal,
  FormControl,
  Input,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Header } from "../component";

const Profil = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header title={"Profil"} />

      <ScrollView>
        <Box
          mx={20}
          rounded="2xl"
          bg={"#FFFF"}
          borderColor="#0878CA"
          borderWidth="2"
          shadow={2}
          alignItems="center"
        >
          <Stack p="4" space={3}>
            <Text fontWeight="400">E-Mail : ridho@gmail.com</Text>
            <Text fontWeight="400">Nomor Telepon : 0812345678910</Text>
            <Text fontWeight="400">Alamat : JL. Semolowaru</Text>

            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center"></HStack>
            </HStack>
          </Stack>
        </Box>
        <Center>
          <Button
            bg={"#0878CA"}
            rounded={"2xl"}
            mt={5}
            px={10}
            py={2}
            onPress={() => setShowModal(true)}
          >
            <Text color={"#FFFF"} fontSize={"lg"} bold>
              Edit
            </Text>
          </Button>
          <Button
            bg={"#0878CA"}
            rounded={"2xl"}
            mt={5}
            px={8}
            py={2}
            onPress={() => navigation.navigate("Masuk")}
          >
            <Text color={"#FFFF"} fontSize={"lg"} bold>
              Keluar
            </Text>
          </Button>
        </Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content
            borderRadius={"2xl"}
            borderColor={"#0878CA"}
            borderWidth={"1"}
            maxWidth="400px"
          >
            <Box px={2}>
              <Modal.CloseButton />
              <Modal.Header>Edit Profil</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Nama</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Nomor Telepon</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Alamat</FormControl.Label>
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
      </ScrollView>
    </>
  );
};

export default Profil;
