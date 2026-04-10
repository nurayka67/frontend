import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface GridLayoutProps {
  data: string[];
  numColumns?: number;
}

export function GridLayout({ data, numColumns = 2 }: GridLayoutProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const columns = isTablet ? numColumns + 1 : numColumns;
  const itemWidth = width / columns - 12;

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {data.map((item, index) => (
          <View key={index} style={[styles.gridItem, { width: itemWidth }]}>
            <Text style={styles.gridItemText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
  },
  gridItemText: {
    fontSize: 14,
    color: '#333',
  },
});