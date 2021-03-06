import React from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { getRedditData, addRedditData } from '../redux/actionCreators';
import Header from './Header';
import ColumnNames from './ColumnNames';
import EntryList from './EntryList';
import styles from '../styles/styles';

class FrontPage extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('redditData')
      .then((value) => {
        if (value) {
          this.props.dispatch(addRedditData(JSON.parse(value)));
        }
      })
      .catch((err) => {
        console.log('error in grabbing asyncStorage data', err);
      });
    this.props.dispatch(getRedditData());
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ColumnNames />
        {this.props.loading &&
          <ActivityIndicator
            style={styles.loading}
            size="large"
          />
        }
        <EntryList />
      </View>
    );
  }
}

const { func, bool } = React.PropTypes;

FrontPage.propTypes = {
  dispatch: func.isRequired,
  loading: bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(FrontPage);
