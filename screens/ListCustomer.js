
import { Box, Center, Heading, Text, Stack, ScrollView, Button, Modal, VStack, HStack, TouchableOpacity } from "native-base";
import { Header } from "../components";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


const ListCustomer = () => {
    //Deklarasi
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    return (
        <>
            <Header title={"Customer"} />
            <Center flex="1" bg="#9BBEC8">
            <Heading bg="primary.800" h="50" w="full" CC bold size="lg" color="muted.100" style={{ textAlign: 'center', textAlignVertical: 'center'}}
            >
                List Customer
            </Heading>
                <ScrollView>
                    <SafeAreaView>
                        <Box  w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
                            {/* Customer 1 */}
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            Anggi Aulia Putri
                                        </Heading>
                                        <Text fontSize="xs" _light={{
                                            color: "primary.800"
                                        }}>
                                            Customer 1
                                        </Text>
                                </Stack>
                                <Text  onPress={() => setShowModal(true)} fontWeight="400">
                                    Klik untuk detail customer.
                                </Text>
                            </Stack>
                        </Box>

                        {/* Modal 1 */}
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                            <Modal.Content maxWidth="350">
                                <Modal.CloseButton />
                                <Modal.Header>Detail Customer</Modal.Header>
                                <Modal.Body>
                                    <VStack space={3}>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text fontWeight="medium">Nama</Text>
                                            <Text color="blueGray.400">Anggi Aulia Putri</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text fontWeight="medium">Alamat</Text>
                                            <Text color="blueGray.400">Jl. Ketintang Madya</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text fontWeight="medium">No. Handphone</Text>
                                            <Text color="#0000cd">+6285732206455</Text>
                                        </HStack>
                                    </VStack>
                                </Modal.Body>
                            </Modal.Content>
                        </Modal>

                        <Box mt="5" w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
                            {/* Customer 2 */}
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Dewi Nahrisa Amelia
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "primary.800"
                                    }}>
                                        Customer 2
                                    </Text>
                                </Stack>
                                <Text onPress={() => setShowModal1(true)} fontWeight="400">
                                    Klik untuk detail customer.
                                </Text>
                            </Stack>
                        </Box>

                        {/* Modal 2 */}
                        <Modal isOpen={showModal1} onClose={() => setShowModal1(false)} size="lg">
                            <Modal.Content maxWidth="350">
                                <Modal.CloseButton />
                                <Modal.Header>Detail Customer</Modal.Header>
                                <Modal.Body>
                                    <VStack space={3}>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text fontWeight="medium">Nama</Text>
                                            <Text color="blueGray.400">Dewi Nahrisa Amelia</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text fontWeight="medium">Alamat</Text>
                                            <Text color="blueGray.400">Jl. Ketintang Baru</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text fontWeight="medium">No. Handphone</Text>
                                            <Text color="#0000cd">+6285712345678</Text>
                                        </HStack>
                                    </VStack>
                                </Modal.Body>
                            </Modal.Content>
                        </Modal>

                        <Box mt="5" w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
                            {/* Customer 3*/}
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        M. Zhahnur Arif
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "primary.800"
                                    }}>
                                        Customer 3
                                    </Text>
                                </Stack>
                                <Text fontWeight="400">
                                    Klik untuk detail customer.
                                </Text>
                            </Stack>
                        </Box>

                        <Box mt="5" w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
                            {/* Customer 4*/}
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Ridho Rahmatulloh
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "primary.800"
                                    }}>
                                        Customer 4
                                    </Text>
                                </Stack>
                                <Text fontWeight="400">
                                    Klik untuk detail customer.
                                </Text>
                            </Stack>
                        </Box>

                        <Box mt="5" w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
                            {/* Customer 5 */}
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Farrel Ardan
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "primary.800"
                                    }}>
                                        Customer 5
                                    </Text>
                                </Stack>
                                <Text fontWeight="400">
                                    Klik untuk detail customer.
                                </Text>
                            </Stack>
                        </Box>

                        <Button bg="primary.800" md="5" mt={5} onPress={() =>
                            navigation.navigate('CreateCustomer')}>Create Customer</Button>
                            <Box>
                                <Button  bg="primary.800" md="5" mt={5} onPress={() =>
                                navigation.goBack('')} > Kembali </Button> 
                            </Box>                            
                    </SafeAreaView>
                </ScrollView>
            </Center>
        </>
    );
}

export default ListCustomer;
