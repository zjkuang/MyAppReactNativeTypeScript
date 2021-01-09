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
          type: UIHeirachyType.bottomTab,
          items: {
            john: {
              tabItem: {
                name: "root/mainBottomTabJohn",
              },
              view: {
                name: "root/mainBottomTab/johnStack",
                type: UIHeirachyType.stack,
                items: {
                  john: {
                    name: "root/mainBottomTab/johnStack/johnView",
                    title: titleUppercased(myLabUI.john),
                    type: UIHeirachyType.view,
                  },
                },
              },
            },
            yan: {
              tabItem: {
                name: "root/mainBottomTabYan",
              },
              view: {
                name: "root/mainBottomTab/yanStack",
                type: UIHeirachyType.stack,
                items: {
                  yan: {
                    name: "root/mainBottomTab/johnStack/yanView",
                    title: titleUppercased(myLabUI.yan),
                    type: UIHeirachyType.view,
                  },
                },
              },
            },
            david: {
              tabItem: {
                name: "root/mainBottomTabDavid",
              },
              view: {
                name: "root/mainBottomTab/davidStack",
                type: UIHeirachyType.stack,
                items: {
                  david: {
                    name: "root/mainBottomTab/johnStack/davidView",
                    title: titleUppercased(myLabUI.david),
                    type: UIHeirachyType.view,
                  },
                },
              },
            },
            sophie: {
              tabItem: {
                name: "root/mainBottomTabSophie",
              },
              view: {
                name: "root/mainBottomTab/sophieStack",
                type: UIHeirachyType.stack,
                items: {
                  sophie: {
                    name: "root/mainBottomTab/johnStack/sophieView",
                    title: titleUppercased(myLabUI.sophie),
                    type: UIHeirachyType.view,
                  },
                },
              },
            },
            settings: {
              tabItem: {
                name: "root/mainBottomTabSettings",
              },
              view: {
                name: "root/mainBottomTab/settingsStack",
                type: UIHeirachyType.stack,
                items: {
                  settings: {
                    name: "root/mainBottomTab/johnStack/settingsView",
                    title: titleUppercased(myLabUI.settings),
                    type: UIHeirachyType.view,
                  },
                },
              },
            },
          },
        },
      },
    },
  });
};

export {
  getUIHierarchy,
};
