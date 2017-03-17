import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class TestComp extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.testOutput}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testOutput: state.test
  }
}

export default connect(mapStateToProps)(TestComp);
