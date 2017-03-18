import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const dark = '#021025';
const medium = '#0F2D59';
const light = '#90A8CC';

const font = 'Helvetica';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
    backgroundColor: dark,
    height: 60,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 40,
    fontFamily: font,
    color: light,
  },
  backButton: {
    color: light,
    fontSize: 20,
  },
  columnNames: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  columnNameText: {
    fontSize: 20,
    color: light,
    fontWeight: '600',
  },
  colTitle: {
    marginRight: width * 0.25,
  },
  colAuthor: {
    marginRight: width * 0.13,
  },
  colUps: {
    marginRight: 15,
  },
  entryList: {
    alignItems: 'center',
    width,
  },
  entry: {
    height: 70,
    width: width - 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: light,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  title: {
    flex: 3,
    fontFamily: font,
    color: dark,
  },
  author: {
    flex: 2.5,
    fontFamily: font,
    color: dark,
  },
  ups: {
    flex: 1,
    fontFamily: font,
    color: dark,
  },
});

export default styles;
