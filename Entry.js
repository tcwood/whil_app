import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


const Entry = ({ title, author, ups, thumbnail }) => {
  // Use a default question mark image if no image is provided
  const image = thumbnail === 'self' || thumbnail === 'default' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Blue_Question.svg/128px-Blue_Question.svg.png' : thumbnail;
  return (
    <View style={styles.row}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{ups}</Text>
    </View>
  );
};

const { string, number } = React.PropTypes;

Entry.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  ups: number.isRequired,
  thumbnail: string.isRequired,
};


export default Entry;
