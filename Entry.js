import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
});

const Entry = props => (
  <View style={styles.row}>
    <Text>{'thumbnail'}</Text>
    <Text>{'title'}</Text>
    <Text>{'author'}</Text>
    <Text>{'upVotes'}</Text>
  </View>
);

export default Entry;
