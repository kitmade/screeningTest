import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  doctorRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  doctocPic: {
    height: 36,
    width: 36,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  doctorInfoContainer: {flex: 1, paddingHorizontal: 8},
  doctorName: {fontWeight: 'bold'},
  doctorListContentContainer: {
    paddingHorizontal: 8,
    paddingTop: 16,
    flexGrow: 1,
    height: '100%',
  },
});
