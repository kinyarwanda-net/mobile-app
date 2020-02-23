import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    justifyContent: 'center',
    fontFamily: 'Roboto',
    height: 32,
    width: 320,
    borderColor: '#636363',
    fontSize: 14,
    borderRadius: 4,
    opacity: 1,
  },
  buttonView: {
    marginTop: -31,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  button: {
    width: 45,
    borderRadius: 5,
    marginRight: 3,
    height: 40,
    color: '#006FDE',
  },
});

export default styles;
