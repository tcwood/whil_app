import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { backToAllData } from './actionCreators';
import styles from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleBackPress() {
    this.props.dispatch(backToAllData());
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Reddit Viewer
        </Text>
        {this.props.shouldShowOne &&
          <TouchableOpacity onPress={this.handleBackPress}>
            <Text style={styles.backButton}> Back </Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const { bool, func } = React.PropTypes;

Header.propTypes = {
  shouldShowOne: bool.isRequired,
  dispatch: func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    shouldShowOne: state.shouldShowOne,
  };
};

export default connect(mapStateToProps)(Header);
