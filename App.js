import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from './src/utils/styling';

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
          <View style={styles.searchView}>
            <Text>Search</Text>
          </View>
          <View style={styles.listView}>
            <Text>List</Text>
          </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchView: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    padding: spacing.sm,
  }, 
  listView: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: spacing.sm,
  }
});
