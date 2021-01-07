//
// *** *** Orientation change listener registration *** ***
// const SomeComponentView = () => {
//   const dimensionsChangeListener = useCallback(() => {
//     console.log(`Orientation: ${isPortrait() ? 'Portrait' : (isLandscape() ? 'Landscape' : 'unknown')}`);
//   }, []);
//   useEffect(() => {
//     registerDimensionsChangeListener(dimensionsChangeListener);
//     return (() => {
//       deregisterDimensionsChangeListener(dimensionsChangeListener);
//     });
//   }, [dimensionsChangeListener]);
//
//   // ...
//
//   return (<View></View>);
// };
//
// (Don't forget to start listening orientation change in App.tsx) by calling
// startListeningDimensionsChange();
//

import { Dimensions, Platform } from "react-native";

var dimensionsChangeListeners: Function[] = [];

const registerDimensionsChangeListener = (handler: Function) => {
  if (!(dimensionsChangeListeners.find((element) => {
    return element === handler;
  }))) {
    dimensionsChangeListeners.push(handler);
  }
};

const deregisterDimensionsChangeListener = (handler: Function) => {
  const index = dimensionsChangeListeners.indexOf(handler);
  if (index > -1) {
    dimensionsChangeListeners.splice(index, 1);
  }
};

const dimensionsChangeLocalListener = () => {
  dimensionsChangeListeners.forEach(element => {
    element();
  });
}

const startListeningDimensionsChange = () => {
  Dimensions.addEventListener('change', dimensionsChangeLocalListener);
};

const stopListeningDimensionsChange = () => {
  Dimensions.removeEventListener('change', dimensionsChangeLocalListener);
};

const isPortrait = () => {
  const screenDimensions = Dimensions.get('screen')
  return screenDimensions.height >= screenDimensions.width;
}

const isLandscape = () => {
  const screenDimensions = Dimensions.get('screen')
  return screenDimensions.width >= screenDimensions.height;
}

export {
  registerDimensionsChangeListener,
  deregisterDimensionsChangeListener,
  startListeningDimensionsChange,
  stopListeningDimensionsChange,

  isPortrait,
  isLandscape,
};
