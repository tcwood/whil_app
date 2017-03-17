import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Entry from './Entry';
import styles from './styles';

const EntryList = (props) => {
  return (
    <View style={styles.EntryList}>
      {props.redditData.length > 0 &&
        props.redditData.map((item, index) => {
          const { id, title, author, ups, thumbnail } = item.data;
          return (
            <Entry
              key={id}
              index={index}
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

const { arrayOf, object } = React.PropTypes;

EntryList.propTypes = {
  redditData: arrayOf(object).isRequired,
};

const mapStateToProps = ({ redditData }) => {
  return ({
    redditData,
  });
};

export default connect(mapStateToProps)(EntryList);
