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
import ModalSignUp from "../components/ModalDaftar.js";
import { Ionicons } from "@expo/vector-icons";
import Companylogo from "../components/Companylogo.js";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../src/actions/AuthAction";

const LoginScreen = () => {
  // Statehandling
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Tampilkan, setTampilkan] = useState(false);
  const navigation = useNavigation();

  const handleClick = () => setTampilkan(!Tampilkan);

  const login = () => {
    if (email && password) {
      loginUser(email, password)
        .then((user) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.replace("Beranda");
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };

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
          value={email}
          onChangeText={(text) => setEmail(text)}
          variant="outline"
          mx="3"
          py={3}
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
          value={password}
          onChangeText={(text) => setPassword(text)}
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
              py={3}
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
          onPress={() => login()}
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
};

export default LoginScreen;
