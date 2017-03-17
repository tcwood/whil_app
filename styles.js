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
  },
  EntryList: {
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
    width,
  },
});

export default styles;
