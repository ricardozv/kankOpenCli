import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

  searchButton: {
    backgroundColor: 'blue',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff'
  },
});

export default styles;