import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 70,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  entryList: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    width,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    borderRadius: 4,
    borderWidth: 1,
    height: 70,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  title: {
    flex: 3.5,
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
