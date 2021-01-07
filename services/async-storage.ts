// https://react-native-async-storage.github.io/async-storage/docs/install
// yarn add @react-native-async-storage/async-storage

import AsyncStorage from '@react-native-async-storage/async-storage';

const preferencesKeys = {
  myLabPreferences: 'myLabPreferences',
  imageViewerPreferences: 'imageViewerPreferences',
};

const savePreferenceString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  };
};

const getPreferenceString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch(e) {
    console.log(e);
    return null;
  };
};

const savePreferenceInt = async (key: string, value: number) => {
  try {
    await AsyncStorage.setItem(key, `${value}`);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  };
};

const getPreferenceInt = async (key: string) => {
  try {
    const value: string | null = await AsyncStorage.getItem(key);
    return ((value != null) ? parseInt(value) : null );
  } catch(e) {
    console.log(e);
    return null;
  };
};

const savePreferenceObject = async (key: string, value: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch(e) {
    console.log(e);
    return false;
  };
};

const getPreferenceObject = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return ((value != null) ? JSON.parse(value) : null);
  } catch(e) {
    console.log(e);
    return 0;
  };
};

const savePreferenceBool = async (key: string, value: boolean) => {
  try {
    await AsyncStorage.setItem(key, `${value}`);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  };
};

const getPreferenceBool = async (key: string) => {
  try {
    const value: string | null = await AsyncStorage.getItem(key);
    return ((value != null) ? (value == 'true') : false);
  } catch(e) {
    console.log(e);
    return false;
  };
};

export {
  preferencesKeys,
  
  savePreferenceString,
  getPreferenceString,
  savePreferenceInt,
  getPreferenceInt,
  savePreferenceObject,
  getPreferenceObject,
  savePreferenceBool,
  getPreferenceBool,
};
