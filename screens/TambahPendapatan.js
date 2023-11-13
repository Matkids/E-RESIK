
import React, { useState } from 'react';
import { Button, Box, Stack, Input, Icon, Center} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView} from 'react-native';

const TambahPendapatan = () => {
    const [hari, setHari] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [totalpemasukan, setTotalPemasukan] = useState("");

    return (
        <Center flex={1} bg="#427D9D">
        <SafeAreaView>
        <Box mx="auto" p="10" bg="muted.100" w="80" borderColor="primary.800" borderWidth="3" rounded="lg" >
        <Box>
            <Stack space={4} w="90%" mx="auto">
                <Input
                    placeholder="Hari"
                    value={hari}
                    onChangeText={setHari}
                    InputLeftElement={<Icon as={MaterialIcons} name="event" size={5}  ml="2"/>}
                />
                <Input
                    placeholder="Tanggal"
                    value={tanggal}
                    onChangeText={setTanggal}
                    InputLeftElement={<Icon as={MaterialIcons} name="dialpad" size={5} ml="2"/>}
                />
                <Input
                    placeholder="Total Pemasukan"
                    value={totalpemasukan}
                    onChangeText={setTotalPemasukan}
                    InputLeftElement={<Icon as={MaterialIcons} name="payments" size={5} ml="2"/>}
                />
                
                <Box alignItems="center">
                    <Button>Submit</Button>
                </Box>
            </Stack>
        </Box>
        </Box>
        </SafeAreaView>
        </Center>
    );
};

export default TambahPendapatan;
