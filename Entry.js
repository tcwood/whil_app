import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Entry = props => (
  <View style={styles.row}>
    <Text>{'thumbnail'}</Text>
    <Text>{'title'}</Text>
    <Text>{'author'}</Text>
    <Text>{'upVotes'}</Text>
  </View>
);

export default Entry;
