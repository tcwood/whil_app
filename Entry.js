import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Entry = ({ title, author, ups, thumbnail }) => (
  <View style={styles.row}>
    <Text>{title}</Text>
    <Text>{author}</Text>
    <Text>{ups}</Text>
  </View>
);

export default Entry;
