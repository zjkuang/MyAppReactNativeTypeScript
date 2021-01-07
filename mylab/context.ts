import React, { createContext } from "react";
import { getPreferenceObject, preferencesKeys, savePreferenceObject } from "../services/async-storage";
import { LANGUAGE } from "../resources/strings/strings";

interface MyLabContextData {
  context: {
    flag: boolean,
    language: string,
  },
  setContext: Function,
};

var currentContext: MyLabContextData = {
  context: {
    flag: false,
    language: LANGUAGE.en_CA,
  },
  setContext: () => {},
};

const saveContext = async (value: MyLabContextData) => {
  currentContext = value;
  const result = await savePreferenceObject(preferencesKeys.myLabPreferences, value);
  return result;
};

const loadContext = async () => {
  currentContext = await getPreferenceObject(preferencesKeys.myLabPreferences);
  return currentContext;
};

const MyLabContext = createContext(currentContext);

export type {
    MyLabContextData,
};

export {
  MyLabContext,
  currentContext,
  saveContext,
  loadContext,
};
