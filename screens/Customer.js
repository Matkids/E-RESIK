import { Box, Center, Heading, Text, Stack, ScrollView, Button, Modal, VStack, HStack } from "native-base";
import { Header } from "../components";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Customer = () => {
    //Deklarasi
    const navigation = useNavigation();

    return (
        <>
            <Header title={"Customer"} />
            <Center flex="1" mt="5" mb="5">
                <Heading bold size="xl" color="primary.800" >
                    TIPS !
                </Heading>
                <HStack flex="1" space={3} mt="5" mb="5">
                    <Center h="200" w="180" bg="primary.300" rounded="md" shadow={3} />
                    <Center h="200" w="180" bg="primary.500" rounded="md" shadow={3} />
                </HStack>
                <HStack flex="1" space={3} mt="5" mb="5">
                    <Center h="200" w="180" bg="primary.300" rounded="md" shadow={3} />
                    <Center h="200" w="180" bg="primary.500" rounded="md" shadow={3} />
                </HStack>
                <Button onPress={() =>
                    navigation.navigate('ListCustomer')}>List Customer</Button>
            </Center>
        </>
    );
}

export default Customer;
