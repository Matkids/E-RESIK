import React, { useState } from "react";
import { Button, Modal, Icon, Input, Heading, VStack, } from "native-base";
import { Ionicons } from '@expo/vector-icons';


export default function ModalSignUp(props) {

    const { showModal, setShowModal } = props
    const handleClickToggleFirstPw = () => setShowFirstPw(!showFirstPw);
    const handlEmailChange = text => setEmail(text);
    const handlPWChange = text => setPassword(text);


    const [showFirstPw, setShowFirstPw] = useState(false);
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');

    return (
        <Modal size="xl" isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Create an account</Modal.Header>
                <Modal.Body>
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up and join us.
                    </Heading>
                    <VStack space={3} mt="5">
                        <Input value={emailInput} onChangeText={handlEmailChange} InputLeftElement={
                            <Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="E-Mail"
                        />
                        <Input value={emailInput} onChangeText={handlEmailChange} InputLeftElement={
                            <Icon as={Ionicons} name="body-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Nama"
                        />
                        <Input value={emailInput} onChangeText={handlEmailChange} InputLeftElement={
                            <Icon as={Ionicons} name="happy-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Umur"
                        />
                        <Input value={emailInput} onChangeText={handlEmailChange} InputLeftElement={
                            <Icon as={Ionicons} name="home-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Alamat"
                        />
                        <Input value={emailInput} onChangeText={handlEmailChange} InputLeftElement={
                            <Icon as={Ionicons} name="flag-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Kode Pos"
                        />
                        <Input value={passwordInput} onChangeText={handlPWChange} InputLeftElement={
                            <Icon as={Ionicons} name="key-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            type={showFirstPw ? "text" : "password"}
                            InputRightElement={
                                <Button
                                    size="xs"
                                    rounded="none"
                                    w="1/5"
                                    h="full"
                                    onPress={handleClickToggleFirstPw}>
                                    {showFirstPw ? "Hide" : "Show"}
                                </Button>
                            }
                            placeholder="Password" />                 
                        <Button
                            mt="2"
                            colorScheme="primary"
                            onPress={() => {
                            }}>
                            Sign up
                        </Button>
                    </VStack>
                </Modal.Body>
            </Modal.Content>
        </Modal >
    );
}