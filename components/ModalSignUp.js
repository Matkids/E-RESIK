import React, { useState } from "react";
import { Button, Modal, Icon, Input, Heading, VStack, } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { registerUser } from '../src/actions/AuthAction';
import { useNavigation } from "@react-navigation/native";


const ModalSignUp = (props) => {
    const navigation = useNavigation();

    const { showModal, setShowModal } = props
    const handleClickToggleFirstPw = () => setShowFirstPw(!showFirstPw);
    const handlEmailChange = text => setEmail(text);
    const handlPWChange = text => setPassword(text);
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [password, setPassword] = useState("");
    const [kodepos, setKodepos] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showFirstPw, setShowFirstPw] = useState(false);

    const onRegister = async () => {
        if (nama && email && password && alamat && kodepos) {
            const data = {
                nama: nama,
                email: email,
                password: password,
                alamat: alamat,
                kodepos: kodepos,
                status: "user",
            };

            console.log(data);

            try {
                const user = await registerUser(data, password);
                navigation.replace("Home");
            } catch (error) {
                console.log("Error", error.message);
                toggleAlert(error.message);
            }
        } else {
            console.log("Error", "Data tidak lengkap");
            toggleAlert("Data tidak lengkap");
        }
    };


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
                        <Input value={email} onChangeText={(email) => setEmail(email)} InputLeftElement={
                            <Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="E-Mail"
                        />
                        <Input value={nama} onChangeText={(nama) => setNama(nama)} InputLeftElement={
                            <Icon as={Ionicons} name="body-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Nama"
                        />
                        <Input value={alamat} onChangeText={(alamat) => setAlamat(alamat)} InputLeftElement={
                            <Icon as={Ionicons} name="home-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Alamat"
                        />
                        <Input value={kodepos} onChangeText={(kodepos) => setKodepos(kodepos)} InputLeftElement={
                            <Icon as={Ionicons} name="flag-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="Kode Pos"
                        />
                        <Input value={password} onChangeText={(password) => setPassword(password)} InputLeftElement={
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
                                onRegister();
                            }}>
                            Sign up
                        </Button>
                    </VStack>
                </Modal.Body>
            </Modal.Content>
        </Modal >
    );
}

export default ModalSignUp;