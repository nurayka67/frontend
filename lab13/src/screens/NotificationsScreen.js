import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const notifications = [
    { id: '1', text: 'Jane liked your post', icon: 'heart', color: '#dc3545' },
    { id: '2', text: 'Mike commented on your photo', icon: 'chatbubble', color: '#0066cc' },
    { id: '3', text: 'Sarah started following you', icon: 'person-add', color: '#28a745' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      
      <FlatList 
        data={notifications} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Ionicons name={item.icon} size={24} color={item.color} />
            <Text style={styles.notificationText}>{item.text}</Text>
          </View>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  notificationItem: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#f0f0f0', gap: 12 },
  notificationText: { fontSize: 14, flex: 1 },
});
