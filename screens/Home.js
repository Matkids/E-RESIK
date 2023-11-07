import React from 'react';
import { Heading, Center } from "native-base";
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Header } from '../components';
const LaundryScreen = () => {
 return (
<>
  <Header title={"HOME"} />
      <Center flex={1}>
      </Center>
  
  <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Laundry Yang Baik
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Laundry yang baik adalah laundry yang menggunakan bahan dan metode yang ramah lingkungan. Dengan begitu, laundry yang baik akan mengurangi dampak negatif yang dihasilkan oleh proses laundry pada lingkungan.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Sabun Yang Baik
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Sabun yang baik adalah sabun yang dibuat dari bahan-bahan alami dan ramah lingkungan. Contohnya, sabun alami, sabun air mineral, atau sabun menggunakan pewangi buatan ramah lingkungan. Sabun yang baik juga biasanya tidak mengandung bahan yang berbahaya bagi kesehatan dan lingkungan.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Jenis Laundry
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Laundry biasa adalah proses mencuci pakaian, peluwakan, dan mengeringkan pakaian agar tetap bersih dan segar.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Jenis Sabun
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Sabun adalah bahan kimia yang digunakan untuk membersihkan dan mengeluarkan kutu dari pakaian. Sabun yang baik tidak hanya ramah lingkungan, tetapi juga dapat membersihkan pakaian dengan efisien.
        </Text>
      </View>
    </SafeAreaView>
  </ScrollView>
</>
 );
};

export default LaundryScreen;