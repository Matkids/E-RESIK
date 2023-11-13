
import React from 'react';
import { Box, FormControl, Radio, Input, Button, Text, Center, ScrollView} from "native-base";
import { Header } from "../components/";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';



const CreateCustomer = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");

  return (
    <>
      <Header title={"Customer"} />
      <Center flex={1} bg="#9BBEC8">
      <SafeAreaView> 
      <ScrollView> 
        <Box mt="50" p="10" bg="muted.100" w="80" maxWidth="350px" borderColor="primary.800" borderWidth="5" rounded="lg" >
          <FormControl isRequired >
            <Text bold fontSize="xl" color="primary.800" mb="4">
              Create Customer
            </Text>

            {/* Nama */}
            <FormControl.Label >Nama</FormControl.Label>
            <Input variant="rounded" type="text" placeholder="nama" />

            {/* Jenis Kelamin */}
            <FormControl.Label >Jenis Kelamin</FormControl.Label>
            <Radio.Group name="myRadioGroup" value={value} onChange={nextValue => {
              setValue(nextValue);
            }}>
              <Radio value="one" my={1}>
                Laki-laki
              </Radio>
              <Radio value="two" my={1}>
                Perempuan
              </Radio>
            </Radio.Group>

            {/* Alamat */}
            <FormControl.Label>Alamat</FormControl.Label>
            <Input variant="rounded" type="text" placeholder="alamat" />
            <FormControl.HelperText> Masukkan alamat lengkap </FormControl.HelperText>

            {/* No. Hp*/}
            <FormControl.Label>No. Handphone</FormControl.Label>
            <Input variant="rounded" type="number" placeholder="+62" />

            {/* BUTTON BELUM SELESAI */}
            <Button bg="primary.800" mt={5} onPress={() =>
              navigation.navigate('ListCustomer')}> Submit</Button>
          </FormControl>
        </Box>
        </ScrollView>
        </SafeAreaView>
      </Center>
    </>
  );
};

export default CreateCustomer;