import React from 'react';
import { Heading, Center, Image } from "native-base";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity,ScrollView } from 'react-native';
import { Header } from '../components';
const LaundryScreen = () => {
  const myRef = React.useRef(null);
  const myRef2 = React.useRef(null);
  const myRef3 = React.useRef(null);
  React.useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps) {
      const styleObj = {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: "#a3a3a3"
      };
      myRef.current.setNativeProps({
        style: styleObj
      });
    }
  }, [myRef2]);
  React.useEffect(() => {
    if (myRef2.current && myRef2.current.setNativeProps) {
      const styleObj = {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: "#a3a3a3"
      };
      myRef2.current.setNativeProps({
        style: styleObj
      });
    }
  }, [myRef3]);
  if (myRef3.current && myRef3.current.setNativeProps) {
    const styleObj = {
      borderWidth: 4,
      borderRadius: 4,
      borderColor: "#a3a3a3"
    };
    myRef3.current.setNativeProps({
      style: styleObj
    });
  }
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
        <Image ref={myRef3} source={require("../assets/mesincuci.jpg")}alt="Fallback Text" size="xl"></Image>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Laundry yang baik adalah laundry yang menggunakan bahan dan metode yang ramah lingkungan. Dengan begitu, laundry yang baik akan mengurangi dampak negatif yang dihasilkan oleh proses laundry pada lingkungan.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Sabun Yang Baik
        </Text>
        <Image ref={myRef2} source={require("../assets/soap.jpg")}alt="Fallback Text" size="xl"></Image>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Sabun yang baik adalah sabun yang dibuat dari bahan-bahan alami dan ramah lingkungan. Contohnya, sabun alami, sabun air mineral, atau sabun menggunakan pewangi buatan ramah lingkungan. Sabun yang baik juga biasanya tidak mengandung bahan yang berbahaya bagi kesehatan dan lingkungan.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Jenis Laundry
        </Text>
        <Image ref={myRef} source={require("../assets/jenisL.png")}alt="Fallback Text" size="xl"></Image>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Laundry biasa adalah proses mencuci pakaian, peluwakan, dan mengeringkan pakaian agar tetap bersih dan segar.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Jenis Sabun
        </Text>
        <Image ref={myRef} source={require("../assets/jenis.png")}alt="Fallback Text" size="xl"></Image>
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