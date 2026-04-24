import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProfileScreen() {
  const route = useRoute();
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.userId}>User ID: {userId}</Text>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>React Native Developer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  userId: { fontSize: 14, color: '#666', marginBottom: 10 },
  name: { fontSize: 22, fontWeight: '600', marginBottom: 5 },
  bio: { fontSize: 16, color: '#666' },
});
