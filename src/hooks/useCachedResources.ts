import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "apple-sd-gothic-neo-medium": require("../assets/fonts/AppleSDGothicNeoM.ttf"),
          "apple-sd-gothic-neo-light": require("../assets/fonts/AppleSDGothicNeoL.ttf"),
          "apple-sd-gothic-neo-bold": require("../assets/fonts/AppleSDGothicNeoB.ttf"),
          "sf-compact-display": require("../assets/fonts/SfCompactDisplay.otf"),
          "sf-compact-display-light": require("../assets/fonts/SfCompactDisplay-light.otf"),
          "sf-compact-display-bold": require("../assets/fonts/SfCompactDisplay-bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
