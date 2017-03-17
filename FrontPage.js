import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { tester, getRedditData } from './actionCreators';
import Header from './Header';
import ColumnNames from './ColumnNames';
import TestComp from './TestComp';
import EntryList from './EntryList';
import styles from './styles';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextPress = this.handleTextPress.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getRedditData());
  }

  handleTextPress() {
    this.props.dispatch(tester('This is the new state'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ColumnNames />
        <TouchableOpacity onPress={this.handleTextPress}>
          <Text> Press me to change the state! </Text>
        </TouchableOpacity>
        <TestComp />
        <EntryList />
      </View>
    );
  }
}

const { func } = React.PropTypes;

FrontPage.propTypes = {
  dispatch: func.isRequired,
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(FrontPage);
