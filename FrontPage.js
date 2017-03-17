import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import TestComp from './TestComp';
import { tester, getRedditData } from './actionCreators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
    console.log('hello!!!! world');
    return (
      <View style={styles.container}>
        <Text>Placholder for the front page</Text>
        <TouchableOpacity onPress={this.handleTextPress}>
          <Text> Press me to change the state! </Text>
        </TouchableOpacity>
        <TestComp />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    testOutput: state.test,
  };
};

export default connect(mapStateToProps)(FrontPage);
