import React, { useEffect, useState, } from "react";
import { Text, HStack, Button, Icon, KeyboardAvoidingView, Input, Heading, VStack, Center } from "native-base";
import ModalSignUp from "../components/ModalSignUp.js"
import { Ionicons } from '@expo/vector-icons';
import Companylogo from "../components/Companylogo.js";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {

    // Statehandling    
    const [showModal, setShowModal] = useState(false);
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    


    const handleClick = () => setShow(!show);
    const handleEmailChange = text => setEmail(text);
    const handlePWChange = text => setPassword(text);

    const email = emailInput;
    const password = passwordInput;
    return (
        <KeyboardAvoidingView flex={5} justifyContent= {'center'} alignItems= {'stretch'}>
            <VStack space={5} alignItems="center">
                <ModalSignUp showModal={showModal} setShowModal={setShowModal} />
                <Companylogo />
                <Heading size="lg">E-RESIK</Heading>
                <Text>LOGIN TERLEBIH DAHULU</Text>
                <Input
                    InputLeftElement={<Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />}
                    value={emailInput}
                    onChangeText={handleEmailChange}
                    variant="outline"
                    mx="3"
                    placeholder="E-Mail"
                    w="300px"
                    maxWidth="300px" />
                <Input
                    InputLeftElement={<Icon as={Ionicons} name="key-outline" size="sm" ml="2" />}
                    value={passwordInput}
                    onChangeText={handlePWChange}
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
                <Button
                    w="300px"
                    maxWidth="300px"
                    colorScheme="primary"
                    onPress={() => 
                        navigation.navigate('Home')
                    }
                >
                    Login
                </Button>
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
