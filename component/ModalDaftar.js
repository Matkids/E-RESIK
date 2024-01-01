import React, { useState } from "react";
import { Button, Modal, Icon, Input, Heading, VStack, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function ModalSignUp(props) {
  const { showModal, setShowModal } = props;
  const handleClickToggleFirstPw = () => setShowFirstPw(!showFirstPw);
  const handlEmailChange = (text) => setEmail(text);
  const handlPWChange = (text) => setPassword(text);

  const [showFirstPw, setShowFirstPw] = useState(false);
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  return (
    <Modal size="xl" isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px" rounded={"2xl"}>
        <Box mx={2}>
          <Modal.CloseButton />
          <Modal.Header>Buat Akun</Modal.Header>
          <Modal.Body>
            <Heading
              size="lg"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              fontWeight="semibold"
            >
              Selamat Datang
            </Heading>
            <VStack space={3} mt="5">
              <Input
                value={emailInput}
                onChangeText={handlEmailChange}
                InputLeftElement={
                  <Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                placeholder="E-Mail"
              />
              <Input
                value={passwordInput}
                onChangeText={handlPWChange}
                InputLeftElement={
                  <Icon as={Ionicons} name="key-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                type={showFirstPw ? "text" : "Password"}
                InputRightElement={
                  <Button
                    size="xs"
                    roundedLeft="5"
                    px={2}
                    py={4}
                    bg={"#0878CA"}
                    onPress={handleClickToggleFirstPw}
                  >
                    {showFirstPw ? "Sembunyikan" : "Tampilkan"}
                  </Button>
                }
                placeholder="Kata Sandi"
              />
              <Button
                p={2}
                mx={20}
                mt="2"
                bg={"#0878CA"}
                rounded={15}
                onPress={() => {}}
              >
                Daftar
              </Button>
            </VStack>
          </Modal.Body>
        </Box>
      </Modal.Content>
    </Modal>
  );
}
