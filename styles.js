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
    width,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    height: 70,
  },
  EntryList: {
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
    width,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default styles;
