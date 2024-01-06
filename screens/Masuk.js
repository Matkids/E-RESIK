import React, { useEffect, useState } from "react";
import { Text, HStack, Button, Icon, KeyboardAvoidingView, Input, Heading, VStack, Center } from "native-base";
import ModalSignUp from "../components/ModalDaftar.js";
import { Ionicons } from '@expo/vector-icons';
import Companylogo from "../components/Companylogo.js";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from '../src/actions/AuthAction';

const LoginScreen = () => {
    // Statehandling
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const navigation = useNavigation();

    // Fungsi untuk menampilkan atau menyembunyikan password
    const handleClick = () => setShow(!show);

    // Fungsi untuk melakukan login
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
        <KeyboardAvoidingView flex={5} justifyContent= {'center'} alignItems= {'stretch'}>
            <VStack space={5} alignItems="center">
                {/* Komponen ModalSignUp */}
                <ModalSignUp showModal={showModal} setShowModal={setShowModal} />
                
                {/* Komponen Companylogo */}
                <Companylogo />

                {/* Heading dan deskripsi */}
                <Heading size="lg">E-RESIK</Heading>
                <Text>LOGIN TERLEBIH DAHULU</Text>

                {/* Input untuk email */}
                <Input
                    InputLeftElement={<Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    variant="outline"
                    mx="3"
                    placeholder="E-Mail"
                    w="300px"
                    maxWidth="300px" />
                
                {/* Input untuk password */}
                <Input
                    InputLeftElement={<Icon as={Ionicons} name="key-outline" size="sm" ml="2" />}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    variant="outline"
                    mx="3"
                    type={show ? "text" : "password"}
                    w="300px"
                    maxWidth="300px"
                    InputRightElement={
                        <Button
                            size="xs"
                            rounded="none"
                            w="1/5"
                            h="full"
                            onPress={handleClick}>{show ? "Hide" : "Show"}
                        </Button>}
                    placeholder="Password" />
                
                {/* Tombol untuk melakukan login */}
                <Button
                    w="300px"
                    maxWidth="300px"
                    colorScheme="primary"
                    onPress={() => 
                        login()
                    }
                >
                    Login
                </Button>

                {/* HStack dengan teks dan tombol untuk sign up */}
                <HStack space="3" alignItems="center">
                    <Text fontWeight="thin" fontSize="sm">Don't have an Account? </Text>
                    <Button size="lg" variant="ghost" onPress={() => setShowModal(true)}>
                        Sign Up here
                    </Button>
                </HStack>
            </VStack>
        </KeyboardAvoidingView>
    );
}

// Export default dari komponen LoginScreen.
export default LoginScreen;
