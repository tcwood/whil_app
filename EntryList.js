import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Entry from './Entry';
import styles from './styles';

const EntryList = ({ shouldShowOne, selectedEntry, redditData }) => {
  const dataToRender = shouldShowOne ? selectedEntry : redditData;
  return (
    <View style={styles.entryList}>
      <ScrollView>
        {redditData.length > 0 &&
          dataToRender.map((item, index) => {
            return (
              <Entry
                key={item.data.id}
                index={index}
                data={item}
              />
            );
          })
        }
      </ScrollView>
    </View>
  );
};

const { bool, arrayOf, object } = React.PropTypes;

EntryList.propTypes = {
  shouldShowOne: bool.isRequired,
  selectedEntry: arrayOf(object).isRequired,
  redditData: arrayOf(object).isRequired,
};

const mapStateToProps = ({ shouldShowOne, redditData, selectedEntry }) => {
  return ({
    shouldShowOne,
    selectedEntry,
    redditData,
  });
};

export default connect(mapStateToProps)(EntryList);
