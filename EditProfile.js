import React, { useState, useEffect } from "react";
import { Header } from "../components";
import {
  Box,
  Center,
  Icon,
  ScrollView,
  Text,
  VStack,
  Stack,
  Button,
  HStack,
  Heading,
  Divider,
  Input,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getData } from "../src/utils/localStorage";
import { editProfile } from "../src/actions/AuthAction";

const EditProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    nama: "",
    alamat: "",
    email: "",
    password: "",
    kodepos: "",
  });

  // KODE UNTUK MENDAPATKAN DATA USER
  useEffect(() => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        setProfile(data);
      }
    });
  }, []);

  return (
    <>
      <Header title={"Edit Profil"} withBack="True" />
      <Box
        bg={"#FFFF"}
        mx={6}
        py={4}
        borderColor={"#0878CA"}
        borderWidth={"2"}
        borderRadius={"xl"}
      >
        <Box alignItems="center">
          <Icon
            as={Ionicons}
            name="person-circle-outline"
            size={100}
            color="black"
          />
        </Box>
        <Box px={4}>
          <Divider />
          <VStack>
            <Box>
              <HStack mr={5} ml={5} mt={7} justifyContent="space-between">
                <Text mt={2} bold>
                  Nama
                </Text>
                <Input
                  variant="outline"
                  h={10}
                  w={220}
                  placeholder="Masukan Nama Baru"
                  value={profile.nama}
                  onChangeText={(text) =>
                    setProfile({ ...profile, nama: text })
                  }
                ></Input>
              </HStack>
            </Box>
            <HStack mr={5} ml={5} mt={5} justifyContent="space-between">
              <Text mt={2} bold>
                Alamat
              </Text>
              <Input
                variant="outline"
                h={10}
                w={220}
                placeholder="Masukan No Telepon Baru"
                value={profile.alamat}
                onChangeText={(text) =>
                  setProfile({ ...profile, alamat: text })
                }
              ></Input>
            </HStack>
            <HStack mr={5} ml={5} mt={5} mb={3} justifyContent="space-between">
              <Text mt={2} bold>
                Kode Pos
              </Text>
              <Input
                variant="outline"
                h={10}
                w={220}
                placeholder="Masukan Alamat Baru"
                value={profile.kodepos}
                onChangeText={(text) =>
                  setProfile({ ...profile, kodepos: text })
                }
              ></Input>
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Center>
        <Box pt={5}>
          <Button
            onPress={() => {
              editProfile(profile, navigation);
            }}
            bg={"#0878CA"}
            px={5}
            py={3}
            borderRadius={"2xl"}
          >
            <Text color={"white"} fontSize={"sm"}>
              Edit
            </Text>
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default EditProfile;
