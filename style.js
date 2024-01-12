import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  columnCenterContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  rowCenterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(33, 150, 243)',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})