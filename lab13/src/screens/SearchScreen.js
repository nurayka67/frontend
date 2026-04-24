import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const results = ['React Native', 'TypeScript', 'Expo', 'Navigation'];

  const filteredResults = results.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput 
            style={styles.input} 
            placeholder="Search..." 
            value={query} 
            onChangeText={setQuery}
            placeholderTextColor="#999"
          />
        </View>
      </View>
      
      <FlatList 
        data={filteredResults} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Text style={styles.resultText}>{item}</Text>
          </TouchableOpacity>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  searchContainer: { backgroundColor: '#0066cc', padding: 16 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 12, height: 44 },
  input: { flex: 1, marginLeft: 8, fontSize: 16 },
  resultItem: { padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  resultText: { fontSize: 16 },
});
