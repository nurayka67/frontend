import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ResponsiveHeader } from '../components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from '../components/AdaptiveLayout';
import { GridLayout } from '../components/GridLayout';

export default function HomeScreen() {
  const gridData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  
  const statsData = [
    { label: 'Users', value: '10K+' },
    { label: 'Downloads', value: '50K+' },
    { label: 'Rating', value: '4.8' },
  ];

  const features = [
    { icon: '📱', title: 'Mobile First', description: 'Optimized for all devices' },
    { icon: '🎨', title: 'Modern Design', description: 'Clean and intuitive UI' },
    { icon: '⚡', title: 'Fast Performance', description: 'Optimized for speed' },
  ];

  return (
    <AdaptiveLayout
      header={
        <ResponsiveHeader
          title="My App"
          leftAction={{ icon: '☰', onPress: () => console.log('Menu pressed') }}
          rightAction={{ icon: '🔔', onPress: () => console.log('Notifications pressed') }}
        />
      }
      content={
        <View>
          <StatsRow stats={statsData} />
          <Text style={styles.sectionTitle}>Features</Text>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
          <Text style={styles.sectionTitle}>Grid Layout</Text>
          <GridLayout data={gridData} numColumns={2} />
        </View>
      }
      footer={
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 My App</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    marginBottom: 12,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});