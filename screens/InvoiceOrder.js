import React from 'react';
import {
 Container,
 Header,
 Content,
 Button,
 Text,
} from 'native-base';

const InvoiceOrder = ({ order }) => {
 return (
    <Container>
      <Header />
      <Content>
        <Text>Invoice:</Text>
        <Text>Nama: {order.nama}</Text>
        <Text>No HP: {order.noHp}</Text>
        <Text>Alamat: {order.alamat}</Text>
        <Text>Jenis Layanan: {order.jenisLayanan}</Text>
        <Text>Tanggal Pesanan: {order.tanggalPesanan}</Text>
        <Text>Berat: {order.berat} kg</Text>
        <Text>Total Harga: Rp{order.berat * 10000}</Text>
        <Button full>
          <Text>Cetak Invoice</Text>
        </Button>
      </Content>
    </Container>
 );
};

export default InvoiceOrder;