import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: { icon: string; onPress: () => void };
  rightAction?: { icon: string; onPress: () => void };
}

export function ResponsiveHeader({
  title,
  leftAction,
  rightAction,
}: ResponsiveHeaderProps) {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0066cc" />
      <View
        style={[
          styles.header,
          {
            paddingTop: Platform.OS === 'android' ? insets.top : 0,
            paddingHorizontal: isLandscape ? 24 : 16,
          },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            {leftAction && (
              <TouchableOpacity onPress={leftAction.onPress} style={styles.button}>
                <Text style={styles.buttonText}>{leftAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.headerCenter}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View style={styles.headerRight}>
            {rightAction && (
              <TouchableOpacity onPress={rightAction.onPress} style={styles.button}>
                <Text style={styles.buttonText}>{rightAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#0066cc',
  },
  header: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    width: 50,
    alignItems: 'flex-start',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    width: 50,
    alignItems: 'flex-end',
  },
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});