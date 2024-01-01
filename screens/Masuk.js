import React, { useEffect, useState } from "react";
import {
  Text,
  HStack,
  Button,
  Icon,
  KeyboardAvoidingView,
  Input,
  Heading,
  VStack,
  Center,
} from "native-base";
import ModalSignUp from "../component/ModalDaftar.js";
import { Ionicons } from "@expo/vector-icons";
import Companylogo from "../component/Companylogo.js";
import { useNavigation } from "@react-navigation/native";
export default function Masuk() {
  // Statehandling
  const [showModal, setShowModal] = useState(false);
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [Tampilkan, setTampilkan] = useState(false);
  const navigation = useNavigation();

  const handleClick = () => setTampilkan(!Tampilkan);
  const handleEmailChange = (text) => setEmail(text);
  const handlePWChange = (text) => setPassword(text);

  const email = emailInput;
  const password = passwordInput;
  return (
    <KeyboardAvoidingView
      flex={5}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <VStack space={5} alignItems="center">
        <ModalSignUp showModal={showModal} setShowModal={setShowModal} />
        <Companylogo />
        <Heading size="lg">E-RESIK</Heading>
        <Text>LOGIN TERLEBIH DAHULU</Text>
        <Input
          InputLeftElement={
            <Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />
          }
          value={emailInput}
          onChangeText={handleEmailChange}
          variant="outline"
          mx="3"
          borderColor={"#0878CA"}
          borderRadius={"lg"}
          placeholder="E-Mail"
          w="300px"
          maxWidth="300px"
        />
        <Input
          InputLeftElement={
            <Icon as={Ionicons} name="key-outline" size="sm" ml="2" />
          }
          value={passwordInput}
          onChangeText={handlePWChange}
          variant="outline"
          mx="3"
          borderColor={"#0878CA"}
          borderRadius={"lg"}
          type={Tampilkan ? "text" : "password"}
          w="300px"
          maxWidth="300px"
          InputRightElement={
            <Button
              size="xs"
              roundedLeft="5"
              px={2}
              py={4}
              bg={"#0878CA"}
              onPress={handleClick}
            >
              {Tampilkan ? "Sembunyikan" : "Tampilkan"}
            </Button>
          }
          placeholder="Kata Sandi"
        />
        <Button
          p={2}
          px={10}
          bg={"#0878CA"}
          rounded={15}
          onPress={() => navigation.navigate("Beranda")}
        >
          Masuk
        </Button>
        <HStack space="3" alignItems="center">
          <Text fontWeight="thin" fontSize="sm">
            Apakah Belum Punya Akun ?
          </Text>
          <Button size="lg" variant="ghost" onPress={() => setShowModal(true)}>
            <Text color={"#0878CA"}>Daftar</Text>
          </Button>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
  );
}
