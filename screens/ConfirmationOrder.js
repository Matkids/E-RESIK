import React from 'react';
import { Header } from '../components';
import { Button, Box, Stack, Text, Divider, TextArea, Icon } from "native-base";

const ConfirmationOrder = ({ nama, noHp, alamat, jenisLayanan, tanggalPesanan, berat, harga, onConfirm, onCancel }) => {
  return (
    <Box>
      <Header title="Konfirmasi Pesanan" />
      <Stack space={4} w="90%" mx="auto">
        <Text>Nama: {nama}</Text>
        <Text>No HP: {noHp}</Text>
        <Text>Alamat: {alamat}</Text>
        <Text>Jenis Layanan: {jenisLayanan}</Text>
        <Text>Tanggal Pesanan: {tanggalPesanan}</Text>
        <Text>Berat (kg): {berat}</Text>
        <Text>Harga: {harga}</Text>
        <Box flexDirection="row" justifyContent="space-around">
          <Button onPress={onConfirm}>Konfirmasi</Button>
          <Button onPress={onCancel} colorScheme="danger">Batal</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConfirmationOrder;
