import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    borderRadius: 4,
    borderWidth: 1,
    height: 70,
  },
  EntryList: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    width,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  title: {
    flex: 3,
  },
  author: {
    flex: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  ups: {
    flex: 1,
  },
});

export default styles;
