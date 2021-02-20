import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullSize: {
      width: '100%',
      height: '100%'
  },
  contentAlignmentCenter: {
      justifyContent: 'center',
      alignItems: 'center'
  },
});

const positioning = {
  left: (inset: number) => {
    return {
      position: 'absolute',
      left: '0%',
      marginLeft: inset
    }
  },
  right: (inset: number) => {
    return {
      position: 'absolute',
      right: '0%',
      marginRight: inset
    }
  },
  top: (inset: number) => {
    return {
      position: 'absolute',
      top: '0%',
      marginTop: inset
    }
  },
  bottom: (inset: number) => {
    return {
      position: 'absolute',
      bottom: '0%',
      marginBottom: inset
    }
  },

  topLeft: (insetLeft: number, insetTop: number) => {
    return {
      position: 'absolute',
      top: '0%',
      marginTop: insetTop,
      left: '0%',
      marginLeft: insetLeft
    }
  },
  topRight: (insetRight: number, insetTop: number) => {
    return {
      position: 'absolute',
      top: '0%',
      marginTop: insetTop,
      right: '0%',
      marginRight: insetRight
    }
  },
  bottomLeft: (insetLeft: number, insetBottom: number) => {
    return {
      position: 'absolute',
      bottom: '0%',
      marginBottom: insetBottom,
      left: '0%',
      marginLeft: insetLeft
    }
  },
  bottomRight: (insetRight: number, insetBottom: number) => {
    return {
      position: 'absolute',
      bottom: '0%',
      marginBottom: insetBottom,
      right: '0%',
      marginRight: insetRight
    }
  }
};

export {styles as commonStyles, positioning};
