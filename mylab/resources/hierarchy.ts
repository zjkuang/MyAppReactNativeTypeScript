import { titleUppercased } from "../../resources/strings/strings";
import { myLabUI } from "./strings/strings";

const UIHeirachyType = {
  stack: "Stack",
  bottomTab: "BottomTab",
  modal: "Modal",
  view: "View",
  webView: "WebView",
  overlay: "Overlay",
};

const getUIHierarchy = () => {
  return ({
    root: { // RootView/RootStackView: ModalStack for main and all modals
      name: "root",
      type: UIHeirachyType.stack,
      items: {
        main: { // BottomTab
          name: "root/main",
          title: titleUppercased(myLabUI.main),
        },
      },
    },
  });
};

export {
  getUIHierarchy,
};
