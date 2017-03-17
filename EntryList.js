import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Entry from './Entry';
import styles from './styles';

const EntryList = (props) => (
  <View style={styles.EntryList}>
    {props.redditData.length > 0 &&
      <Entry />
    }
  </View>
);

const mapStateToProps = ({ redditData }) => {
  return ({
    redditData,
  });
};


export default connect(mapStateToProps)(EntryList);
