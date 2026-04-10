import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';

export function ProductDetailScreen({ route }: any) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        
        <View style={styles.platformInfo}>
          <Text style={styles.platformText}>
            Viewing on: {Platform.OS === 'ios' ? '📱 iOS' : '🤖 Android'}
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  content: { padding: 20 },
  name: { fontSize: 28, fontWeight: 'bold' },
  price: { fontSize: 24, fontWeight: 'bold', color: '#2ecc71', marginVertical: 10 },
  description: { fontSize: 16, color: '#666', lineHeight: 24 },
  platformInfo: { backgroundColor: '#f5f5f5', padding: 16, borderRadius: 12, marginVertical: 20 },
  platformText: { fontSize: 14, color: '#666' },
  button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});