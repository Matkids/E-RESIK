import React from 'react';
import { Header } from '../components';
import { Box, Text, Button, HStack, VStack, Spacer, Divider } from 'native-base';

const Invoice = ({ nama, noHp, alamat, jenisLayanan, tanggalPesanan, berat, harga, onCancel }) => {
  return (
    <Box flex={1} bg="white">
      <Header title="Invoice" />
      <VStack space={4} p={4} flex={1}>
        <Text fontSize="xl" fontWeight="bold">Invoice Details</Text>
        <Divider />
        <VStack space={2}>
          <Text>Nama: {nama}</Text>
          <Text>No HP: {noHp}</Text>
          <Text>Alamat: {alamat}</Text>
          <Text>Jenis Layanan: {jenisLayanan}</Text>
          <Text>Tanggal Pesanan: {tanggalPesanan}</Text>
          <Text>Berat (kg): {berat}</Text>
          <Text>Harga: {harga}</Text>
        </VStack>
        <Spacer />
        <HStack justifyContent="space-between">
          <Button onPress={onCancel} colorScheme="danger" size="lg" flex={1}>
            Kembali
          </Button>
          <Button colorScheme="teal" size="lg" flex={1}>
            Bayar
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Invoice;
