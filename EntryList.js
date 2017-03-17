import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Entry from './Entry';
import styles from './styles';

const EntryList = (props) => {
  console.log(props.redditData);
  return (
    <View style={styles.EntryList}>
      {props.redditData.length > 0 &&
        props.redditData.map((item) => {
          const { title, author, ups, thumbnail } = item.data;
          return (
            <Entry
              title={title}
              author={author}
              ups={ups}
              thumbnail={thumbnail}
            />
          );
        })
      }
    </View>
  );
};

const mapStateToProps = ({ redditData }) => {
  return ({
    redditData,
  });
};


export default connect(mapStateToProps)(EntryList);
