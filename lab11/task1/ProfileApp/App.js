import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && phone && message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  const isValid = email && phone && message;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Profile Card */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Анна Иванова</Text>
            <Text style={styles.role}>React Native Developer</Text>
            <Text style={styles.bio}>Люблю создавать мобильные приложения</Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactCard}>
          <Text style={styles.sectionTitle}>Контактная информация</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Телефон</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="+7 777 777 77 77"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Сообщение</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              placeholder="Ваше сообщение..."
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, !isValid && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Отправить</Text>
          </TouchableOpacity>

          {submitted && (
            <View style={styles.successMessage}>
              <Text style={styles.successText}>✓ Сообщение отправлено!</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  card: {
    backgroundColor: '#fff', borderRadius: 20, padding: 20, margin: 16,
    flexDirection: 'row', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 4,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  role: { fontSize: 16, color: '#666', marginBottom: 8 },
  bio: { fontSize: 14, color: '#888', lineHeight: 20 },
  contactCard: {
    backgroundColor: '#fff', borderRadius: 20, padding: 20, margin: 16, marginTop: 0,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 4,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  inputGroup: { marginBottom: 16 },
  label: { fontSize: 14, color: '#666', marginBottom: 8 },
  input: {
    backgroundColor: '#f5f5f5', borderRadius: 12, padding: 14, fontSize: 16,
    borderWidth: 1, borderColor: '#e0e0e0',
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: '#007AFF', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 8 },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  successMessage: { backgroundColor: '#34C759', borderRadius: 12, padding: 12, marginTop: 16, alignItems: 'center' },
  successText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});