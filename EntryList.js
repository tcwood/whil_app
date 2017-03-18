import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Entry from './Entry';
import { refreshData } from './actionCreators';
import styles from './styles';

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh() {
    this.props.dispatch(refreshData());
  }

  render() {
    const { shouldShowOne, selectedEntry, redditData } = this.props;
    const dataToRender = shouldShowOne ? selectedEntry : redditData;
    return (
      <View style={styles.entryList}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
        >
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
  }
}

const { bool, arrayOf, object, func } = React.PropTypes;

EntryList.propTypes = {
  shouldShowOne: bool.isRequired,
  selectedEntry: arrayOf(object).isRequired,
  redditData: arrayOf(object).isRequired,
  dispatch: func.isRequired,
  refreshing: bool.isRequired,
};

const mapStateToProps = ({ shouldShowOne, redditData, selectedEntry, refreshing }) => {
  return ({
    shouldShowOne,
    selectedEntry,
    redditData,
    refreshing,
  });
};

export default connect(mapStateToProps)(EntryList);
