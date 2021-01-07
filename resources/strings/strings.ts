import LocalizedStrings from "react-native-localization";

// Commonly used IETF language tags
// https://gist.github.com/traysr/2001377

const LANGUAGE = {
  en: "en",
  en_US: "en-US",
  en_CA: "en-CA",
  zh_CN: "zh-CN",
  zh_HK: "zh-HK",
  zh_TW: "zh-TW",
};

const setLanguage = (lang: string) => { // will be called by App.js to set the language for whole app
  stringsTest.setLanguage(lang);
  stringsUI.setLanguage(lang);
};

const titleUppercased = (str: string) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

const stringsTest = new LocalizedStrings({
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

const stringsUI = new LocalizedStrings({
  "en": {
    about: "about",
    abountThisAppText: "<To be translated...>",
    copyright: "copyright",
    copyrightInfo: "<To be translated...>",
    details: "details",
    feedback: "feedback",
    feedbackInfo: "<To be translated...>",
    globalSearchPlaceholder: "Keyword(s) separated by space",
    jumpTo: "jump to",
    privacyPolicy: "Privacy Policy",
    privacyPolicyInfo: "This application does not collect any user data",
    search: "search",
    settings: "settings",
    showAll: "show all",
    test: "test",
    thisApp: "this app",
    version: "version",
  },
  "en-US": {
    about: "about",
    abountThisAppText: "<To be translated...>",
    copyright: "copyright",
    copyrightInfo: "<To be translated...>",
    details: "details",
    feedback: "feedback",
    feedbackInfo: "<To be translated...>",
    globalSearchPlaceholder: "Keyword(s) separated by space",
    jumpTo: "jump to",
    privacyPolicy: "Privacy Policy",
    privacyPolicyInfo: "This application does not collect any user data",
    search: "search",
    settings: "settings",
    showAll: "show all",
    test: "test",
    thisApp: "this app",
    version: "version",
  },
  "en-CA": {
    about: "about",
    abountThisAppText: "<To be translated...>",
    copyright: "copyright",
    copyrightInfo: "<To be translated...>",
    details: "details",
    feedback: "feedback",
    feedbackInfo: "<To be translated...>",
    globalSearchPlaceholder: "Keyword(s) separated by space",
    jumpTo: "jump to",
    privacyPolicy: "Privacy Policy",
    privacyPolicyInfo: "This application does not collect any user data",
    search: "search",
    settings: "settings",
    showAll: "show all",
    test: "test",
    thisApp: "this app",
    version: "version",
  },
  "zh-CN": {
    about: "关于",
    abountThisAppText: "<To be translated...>",
    copyright: "版权",
    copyrightInfo: "<To be translated...>",
    details: "详细",
    feedback: "反馈",
    feedbackInfo: "<To be translated...>",
    globalSearchPlaceholder: "关键字（词）（以空白分隔）",
    jumpTo: "跳至",
    privacyPolicy: "隐私保护政策",
    privacyPolicyInfo: "本应用不收集任何用户数据",
    search: "搜索",
    settings: "设置",
    showAll: "显示所有",
    test: "测试",
    thisApp: "本应用",
    version: "版本",
  },
  "zh-HK": {
    about: "關於",
    abountThisAppText: "<To be translated...>",
    copyright: "版權",
    copyrightInfo: "<To be translated...>",
    details: "詳細",
    feedback: "反饋",
    feedbackInfo: "<To be translated...>",
    globalSearchPlaceholder: "關鍵字（詞）（以空白分隔）",
    jumpTo: "跳至",
    privacyPolicy: "隱私保護政策",
    privacyPolicyInfo: "本應用不收集任何用戶數據",
    search: "搜索",
    settings: "設置",
    showAll: "顯示所有",
    test: "測試",
    thisApp: "本應用",
    version: "版本",
  },
  "zh-TW": {
    about: "關於",
    abountThisAppText: "<To be translated...>",
    copyright: "版權",
    copyrightInfo: "<To be translated...>",
    details: "詳細",
    feedback: "反饋",
    feedbackInfo: "<To be translated...>",
    globalSearchPlaceholder: "關鍵字（詞）（以空白分隔）",
    jumpTo: "跳至",
    privacyPolicy: "隱私保護政策",
    privacyPolicyInfo: "本應用不收集任何用戶數據",
    search: "搜索",
    settings: "設置",
    showAll: "顯示所有",
    test: "測試",
    thisApp: "本應用",
    version: "版本",
  },
});

export {
    LANGUAGE,
    setLanguage,
    titleUppercased,
    stringsTest,
    stringsUI,
};
