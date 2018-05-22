import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  header: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#3498DB',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pdf: {
        flex: 11,
        width: Dimensions.get('window').width
    }
});
