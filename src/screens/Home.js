import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FIREBASE_API_KEY} from 'react-native-dotenv';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>{FIREBASE_API_KEY}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
