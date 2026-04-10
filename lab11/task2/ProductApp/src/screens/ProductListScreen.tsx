import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ProductItem } from '../components/ProductItem';
import { products } from '../data/products';

export function ProductListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem 
            product={item} 
            onPress={(product) => navigation.navigate('ProductDetail', { product })} 
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>Products ({products.length})</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 16, marginVertical: 12 },
});