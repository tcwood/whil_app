import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getRedditData } from '../redux/actionCreators';
import Header from './Header';
import ColumnNames from './ColumnNames';
import EntryList from './EntryList';
import styles from '../styles/styles';

class FrontPage extends React.Component {
  componentDidMount() {
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
