import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { selectEntry } from '../redux/actionCreators';
import styles from '../styles/styles';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    // console.log('inside Entry, ' this.props.title)
    this.handleEntryPress = this.handleEntryPress.bind(this);
  }

  handleEntryPress() {
    // need to dispatch an action to update selectedEntry in the store
    this.props.dispatch(selectEntry(this.props.data));
  }

  render() {
    const { title, author, ups, thumbnail } = this.props.data.data;
    // Account for variances in data
    const image = thumbnail === 'self' || thumbnail === 'default' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Blue_Question.svg/128px-Blue_Question.svg.png' : thumbnail;
    const titleText = title.length > 60 ? `${title.slice(0, 54)}...` : title;
    const authorText = author.length > 13 ? author.slice(0, 14) : author;

    return (
      <TouchableOpacity
        style={styles.entry}
        onPress={this.handleEntryPress}
      >
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <Text style={styles.title}>{titleText}</Text>
        <Text style={styles.author}>{authorText}</Text>
        <Text style={styles.ups}>{ups}</Text>
      </TouchableOpacity>
    );
  }
}

const { string, number, shape, func } = React.PropTypes;

Entry.propTypes = {
  data: shape({
    data: shape({
      title: string.isRequired,
      author: string.isRequired,
      ups: number.isRequired,
      thumbnail: string.isRequired,
    }),
  }).isRequired,
  dispatch: func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
  };
};


export default connect(mapStateToProps)(Entry);
