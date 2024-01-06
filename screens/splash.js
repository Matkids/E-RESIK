import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { getData } from '../src/utils/localStorage';

export default class Splash extends Component {
  // Lifecycle method componentDidMount dijalankan setelah komponen dirender pertama kali
  componentDidMount() {
    // SetTimeout digunakan untuk menunda navigasi selama 3 detik
    setTimeout(async () => {
      // Mendapatkan data pengguna dari penyimpanan lokal
      const userData = await getData("user");

      // Memeriksa apakah ada data pengguna
      if (userData) {
        // Jika ada, arahkan pengguna ke layar beranda (Home)
        this.props.navigation.replace('Home');
      } else {
        // Jika tidak ada, arahkan pengguna ke layar masuk (LoginScreen)
        this.props.navigation.navigate('LoginScreen');
      }
    }, 3000); // Waktu penundaan selama 3000 milidetik (3 detik)
  }

  render() {
    // Tampilan SplashScreen hanya berisi View kosong untuk memastikan tampilan penuh
    return (
      <View style={styles.pages}>
      </View>
    )
  }
}

// Stylesheet untuk menentukan tata letak dan tampilan SplashScreen
const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
