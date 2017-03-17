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


const { string, number } = React.PropTypes;
Entry.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  ups: number.isRequired,
  thumbnail: string.isRequired,
};


export default Entry;
