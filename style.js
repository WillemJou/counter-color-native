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
  counterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(33, 150, 243)',
  },
  textCounter: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textChooseBtn: {
    width: 90,
    height: 65,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
