import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import TestComp from './TestComp';
import { tester, getRedditData } from './actionCreators';
import EntryList from './EntryList';
import styles from './styles';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextPress = this.handleTextPress.bind(this);
  }

  handleTextPress() {
    this.props.dispatch(tester('This is the new state'));
    this.props.dispatch(getRedditData());
  }

  render() {
    console.log('redditData retrieved from state', this.props.redditData);
    return (
      <View style={styles.container}>
        <Text>Placholder for the front page</Text>
        <TouchableOpacity onPress={this.handleTextPress}>
          <Text> Press me to change the state! </Text>
        </TouchableOpacity>
        <TestComp />
        <EntryList />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testOutput: state.test,
    redditData: state.redditData,
  };
};

export default connect(mapStateToProps)(FrontPage);
