import React from 'react';
import { View } from 'react-native';
import Entry from './Entry';
import styles from './styles';

const EntryList = () => (
  <View style={styles.EntryList}>
    <Entry />
    <Entry />
    <Entry />
  </View>
);

export default EntryList;
