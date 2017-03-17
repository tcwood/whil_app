import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Entry from './Entry';

const { height, width } = Dimensions;

const styles = StyleSheet.create({
  EntryList: {
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
    width,
  },
});

const EntryList = () => (
  <View style={styles.EntryList}>
    <Entry />
    <Entry />
    <Entry />
  </View>
);

export default EntryList;
