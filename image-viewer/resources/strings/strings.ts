import LocalizedStrings from "react-native-localization";

// Commonly used IETF language tags
// https://gist.github.com/traysr/2001377

const LANGUAGE = {
  en: "en",
  en_AU: "en-AU",
  en_CA: "en-CA",
  en_GB: "en-GB",
  en_US: "en-US",
  es: "es",
  fr: "fr",
  zh_CN: "zh-CN",
  zh_HK: "zh-HK",
  zh_TW: "zh-TW",
};

const setLanguage = (lang: string) => { // will be called by App.js to set the language for whole app
    imageViewerStrings.setLanguage(lang);
};

const imageViewerStrings = new LocalizedStrings({
  "en-US": {
    greeting: "How do you do?",
    goodWeather: "Good weather!"
  },
  "en-CA": {
    greeting: "How are you?",
    goodWeather: "Good weather!"
  },
  "zh-CN": {
    greeting: "你好！",
    goodWeather: "好天气!"
  },
  "zh-HK": {
    greeting: "你好！",
    goodWeather: "好天氣!"
  },
  "zh-TW": {
    greeting: "你好！",
    goodWeather: "好天氣"
  },
});

export {
  LANGUAGE,
  setLanguage,
  imageViewerStrings,
};
