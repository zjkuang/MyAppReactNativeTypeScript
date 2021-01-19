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
                name: "John",
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
                  hooksDemo: {
                    name: "root/mainBottomTab/johnStack/hooksDemoListView",
                    title: titleUppercased(myLabUI.hooksDemo),
                    type: UIHeirachyType.view,
                  },
                  useCallback: {
                    name: "root/mainBottomTab/johnStack/hooksDemoUseCallback",
                    title: titleUppercased(myLabUI.useCallback),
                    type: UIHeirachyType.view,
                  },
                  useContext: {
                    name: "root/mainBottomTab/johnStack/hooksDemoUseContext",
                    title: titleUppercased(myLabUI.useContext),
                    type: UIHeirachyType.view,
                  },
                  useEffect: {
                    name: "root/mainBottomTab/johnStack/hooksDemoUseEffect",
                    title: titleUppercased(myLabUI.useEffect),
                    type: UIHeirachyType.view,
                  },
                  useLayoutEffect: {
                    name: "root/mainBottomTab/johnStack/hooksDemoUseLayoutEffect",
                    title: titleUppercased(myLabUI.useLayoutEffect),
                    type: UIHeirachyType.view,
                  },
                  useState: {
                    name: "root/mainBottomTab/johnStack/hooksDemoUseState",
                    title: titleUppercased(myLabUI.useState),
                    type: UIHeirachyType.view,
                  },
                },
              },
            },
            yan: {
              tabItem: {
                name: "Yan",
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
                name: "David",
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
                name: "Sophie",
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
                name: "Settings",
              },
              view: {
                name: "root/mainBottomTab/settingsStack",
                type: UIHeirachyType.stack,
                items: {
                  settings: {
                    name: "root/mainBottomTab/johnStack/settingsView",
                    title: titleUppercased('Elsa' || myLabUI.settings),
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
