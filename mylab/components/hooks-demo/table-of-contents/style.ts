import {
    StyleSheet,
  } from 'react-native';
      
  const styles = StyleSheet.create({
    baseView: {
      width: '100%',
      height: '100%',
      // backgroundColor: 'cyan',
    },
    container: {
      flex: 1,
      paddingTop: 0
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  
  export {
    styles,
  };
  