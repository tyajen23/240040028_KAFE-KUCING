
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  const tambah = () => {
    setQty(qty + 1);
    onTambahPesanan();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nama}>{nama}</Text>

      <Text style={styles.harga}>
        Rp {harga.toLocaleString('id-ID')}
      </Text>

      <Text style={styles.qty}>
        Jumlah Pesanan: {qty}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={tambah}
      >
        <Text style={styles.buttonText}>+ Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  nama: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#D66B91',
  },
  harga: {
    fontSize: 15,
    marginTop: 5,
    color: '#555',
  },
  qty: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D66B91',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default MenuItem;
