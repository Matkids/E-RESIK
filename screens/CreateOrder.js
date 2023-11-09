import React, { useState } from 'react';
import { Header } from '../components';
import { Button, Box, Stack, Text, Divider, TextArea, Input, Icon, Image } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import logo from '../assets/icon.png';

const CreateOrder = () => {
    const [nama, setNama] = useState("");
    const [noHp, setNoHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const [jenisLayanan, setJenisLayanan] = useState("");
    const [tanggalPesanan, setTanggalPesanan] = useState("");
    const [berat, setBerat] = useState("");
    const navigation = useNavigation();

    const submitPesanan = () => {
        console.log("Pesanan sudah disubmit");
    };

    return (
        <Box>
            <Header title={"Buat Pesanan"}>
                <Image
                    source={logo}
                    alt="Logo"
                    size={8}
                    mx="auto"
                />
            </Header>

            <Stack space={4} w="90%" mx="auto">
                <Input
                    placeholder="Nama"
                    value={nama}
                    onChangeText={setNama}
                    InputLeftElement={<Icon as={MaterialIcons} name="person" size={5} />}
                />
                <Input
                    placeholder="No HP"
                    value={noHp}
                    onChangeText={setNoHp}
                    InputLeftElement={<Icon as={MaterialIcons} name="phone" size={5} />}
                />
                <TextArea
                    placeholder="Alamat"
                    value={alamat}
                    onChangeText={setAlamat}
                    InputLeftElement={<Icon as={MaterialIcons} name="home" size={5} />}
                />
                <Input
                    placeholder="Jenis Layanan"
                    value={jenisLayanan}
                    onChangeText={setJenisLayanan}
                    InputLeftElement={<Icon as={MaterialIcons} name="work" size={5} />}
                />
                <Input
                    placeholder="Tanggal Pesanan"
                    value={tanggalPesanan}
                    onChangeText={setTanggalPesanan}
                    InputLeftElement={<Icon as={MaterialIcons} name="date-range" size={5} />}
                />
                <Input
                    placeholder="Berat (kg)"
                    value={berat}
                    onChangeText={setBerat}
                    InputLeftElement={<Icon as={MaterialIcons} name="fitness-center" size={5} />}
                />
                <Box alignItems="center">
                    <Button
                        onPress={() =>
                            navigation.navigate('Confirmation')
                        }
                    >
                        Buat Pesanan
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default CreateOrder;