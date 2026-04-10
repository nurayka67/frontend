import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdaptiveLayout({ header, content, footer }: AdaptiveLayoutProps) {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      {header && <View style={styles.headerWrapper}>{header}</View>}
      <View
        style={[
          styles.main,
          isLandscape && styles.mainLandscape,
          isTablet && styles.mainTablet,
        ]}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            isTablet && styles.scrollContentTablet,
          ]}
        >
          {isTablet ? (
            <View style={styles.tabletLayout}>{content}</View>
          ) : (
            <View style={styles.phoneLayout}>{content}</View>
          )}
        </ScrollView>
      </View>
      {footer && <View style={styles.footerWrapper}>{footer}</View>}
    </View>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'primary',
}: {
  icon: string;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'accent';
}) {
  const bgColor = {
    primary: '#ffffff',
    secondary: '#f0f8ff',
    accent: '#fff3e0',
  }[variant];

  return (
    <View style={[styles.featureCard, { backgroundColor: bgColor }]}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

export function StatsRow({ stats }: { stats: Array<{ label: string; value: string }> }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.statsRow, isTablet && styles.statsRowTablet]}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statItem}>
          <Text style={[styles.statValue, isTablet && styles.statValueTablet]}>
            {stat.value}
          </Text>
          <Text style={[styles.statLabel, isTablet && styles.statLabelTablet]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerWrapper: {
    zIndex: 1,
  },
  main: {
    flex: 1,
  },
  mainLandscape: {
    flexDirection: 'row',
  },
  mainTablet: {
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  scrollContentTablet: {
    padding: 24,
  },
  phoneLayout: {
    flex: 1,
  },
  tabletLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  footerWrapper: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  featureCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statsRowTablet: {
    paddingVertical: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0066cc',
    marginBottom: 4,
  },
  statValueTablet: {
    fontSize: 32,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
  },
  statLabelTablet: {
    fontSize: 14,
  },
});