import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  baseView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'cyan',
  },
  container: {
    flex: 1,
    paddingTop: 0,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item0: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 8,
    fontSize: 16,
    height: 40,
    backgroundColor: 'rgba(240,240,240,1.0)',
  },
  item1: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 8,
    fontSize: 16,
    height: 40,
    backgroundColor: 'rgba(232,232,232,1.0)',
  },
});

export {styles};
