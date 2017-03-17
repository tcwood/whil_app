import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      Reddit Viewer
    </Text>
  </View>
);


export default Header;
