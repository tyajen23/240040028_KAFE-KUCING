
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ringkasan Pesanan</Text>

      <Text style={styles.total}>
        Total Item Dipesan: {totalCount}
      </Text>

      {totalCount >= 5 && (
        <Text style={styles.promo}>
          🎉 Selamat! Anda Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D66B91',
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    color: '#444',
  },
  promo: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default OrderSummary;
