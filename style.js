import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainContainer: {
    margin: 30,
  },
  columnCenterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowEndContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: 'rgb(33, 150, 243)',
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  chooseButton: {
    paddingHorizontal: 20,
  },
  counterButton: {
    paddingHorizontal: 25,
    paddingVertical: 17,
  },
  resetButton: {},
})
