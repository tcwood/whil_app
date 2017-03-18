import React from 'react';
import { View } from 'react-native';
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
        <EntryList />
      </View>
    );
  }
}

const { func } = React.PropTypes;

FrontPage.propTypes = {
  dispatch: func.isRequired,
};

export default connect()(FrontPage);
