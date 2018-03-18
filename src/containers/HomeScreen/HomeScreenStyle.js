import { StyleSheet } from 'react-native' ;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerImageContainer: {
    borderRadius: 80,
    width: 160, 
    height: 160 ,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  outerImageContainer: {
    borderRadius: 100,
    width: 200,
    height: 200 ,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:2,
    position: 'absolute'
  },

  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:2,
    position:'absolute',
    width: '100%',
    height: '100%'
  },

  image: {
    borderRadius: 80,
    width: 160,
    height: 160
  }
});