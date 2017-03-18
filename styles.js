import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
    backgroundColor: 'blue',
    height: 60,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    marginLeft: 20,
  },
  backButton: {
    color: 'white',
    fontSize: 15,
  },
  columnNames: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  columnNameText: {
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  colTitle: {
    marginRight: width * 0.3,
  },
  colAuthor: {
    marginRight: width * 0.09,
  },
  colUps: {
    marginRight: 4,
  },
  entryList: {
    alignItems: 'center',
    width,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
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
  },
  ups: {
    flex: 1,
  },
  placeholder: {
    width: 55,
  },
});

export default styles;
