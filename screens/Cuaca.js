import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import {
  Box,
  Text,
  Input,
  Button,
  Center,
  VStack,
  HStack,
  Heading,
  Image,
  Spinner,
} from "native-base";
import { Header } from "../components";

const api = {
  // Properti 'key' menyimpan kunci API untuk mengakses layanan OpenWeatherMap
  key: "7cf001d41eb77fd02fea983337478fbc",

  // Properti 'base' menyimpan URL dasar untuk mengakses API OpenWeatherMap
  base: "https://api.openweathermap.org/data/2.5/",
};

const Cuaca = () => {
  // State untuk menyimpan input pengguna, data cuaca, status loading, dan pesan error
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi ini dipanggil ketika tombol "Search" ditekan
  const searchPressed = () => {
    setLoading(true); // Set loading menjadi true
    setError(null); // Reset pesan error

    // Fetch data cuaca dari OpenWeatherMap API
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result); // Simpan data cuaca ke dalam state
        setLoading(false); // Set loading menjadi false setelah fetch selesai
      })
      .catch((error) => {
        setError(`Error fetching weather data: ${error.message}`); // Simpan pesan error
        setLoading(false); // Set loading menjadi false
      });
  };

  // Render komponen antarmuka pengguna E-Resik (UI)
  return (
    <VStack>
      {/* Header dengan judul "Cuaca" dan tombol back */}
      <Header title={"Cuaca"} withBack={true} />
      <ScrollView>
        <VStack p={4} space={4}>
          <Box>
            {/* Input untuk memasukkan nama kota */}
            <Input
              placeholder="Masukkan Nama Kota"
              h={10}
              borderColor={"#0878CA"}
              borderWidth={"2"}
              value={search}
              onChangeText={(text) => setSearch(text)}
            />

            {/* Tombol "Search" untuk memulai pencarian */}
            <Center>
              <Button
                onPress={searchPressed}
                mt={4}
                w={100}
                borderRadius={"2xl"}
                isLoading={loading}
                backgroundColor="#0878CA"
              >
                Search
              </Button>
            </Center>
          </Box>

          {loading && (
            <Center mt={4}>
              {/* Spinner yang ditampilkan selama proses loading */}
              <Spinner color="blue.500" />
            </Center>
          )}

          {error ? (
            <Text
              style={{ color: "red", marginVertical: 10, textAlign: "center" }}
            >
              {/* Pesan error yang ditampilkan jika terjadi kesalahan */}
              {error}
            </Text>
          ) : (
            <>
              {/* Tampilkan data cuaca jika tersedia */}
              {weather && typeof weather.main !== "undefined" && (
                <ScrollView>
                  <VStack mt={4} space={2} alignItems="center">
                    {/* Judul berisi nama kota */}
                    <Heading>{weather.name}</Heading>

                    {/* Informasi suhu dalam format 2xl */}
                    <Text fontSize="2xl">{weather.main.temp}°C</Text>

                    <HStack space={2}>
                      {/* Tampilkan kondisi cuaca dan deskripsi */}
                      <Text fontWeight="bold">Condition:</Text>
                      <Text>{weather.weather[0].main}</Text>
                    </HStack>

                    {/* Tampilkan deskripsi kondisi cuaca */}
                    <Text>{weather.weather[0].description}</Text>

                    {/* Tampilkan ikon cuaca dari OpenWeatherMap */}
                    <Image
                      source={{
                        uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                      }}
                      alt="Weather Icon"
                      size={12}
                    />
                  </VStack>
                </ScrollView>
              )}
            </>
          )}
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Cuaca;
