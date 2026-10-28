import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

import OrderSummary from './OrderSummary';
import MenuItem from './MenuItem';

const DAFTAR_MENU =[
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahanPesanan =  () =>{
    setTotalPesanan(totalPesanan + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat Cafe</Text>
      <Text style={styles.subtitle}>Pesan makanan dan minuman anda!</Text>
      <OrderSummary totalCount={totalPesanan} />
      <Text style= {styles.heading}>Daftar Menu</Text>

      <ScrollView>
        {DAFTAR_MENU.map((item) => (
          <MenuItem key={item.id} nama={item.nama} harga={item.harga} onTambahPesanan={tambahanPesanan} />
        ))}
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D66B91',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D66B91',
  }
});