import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import Login from "./components/Login";
import * as Font from "expo-font";
import customTheme from "./hooks/customTheme";

Font.loadAsync({
  "apple-sd-gothic-neo-medium": require("./assets/fonts/AppleSDGothicNeoM.ttf"),
  "apple-sd-gothic-neo-light": require("./assets/fonts/AppleSDGothicNeoL.ttf"),
  "apple-sd-gothic-neo-bold": require("./assets/fonts/AppleSDGothicNeoB.ttf"),
  "sf-compact-display": require("./assets/fonts/SfCompactDisplay.otf"),
  "sf-compact-display-light": require("./assets/fonts/SfCompactDisplay-light.otf"),
  "sf-compact-display-bold": require("./assets/fonts/SfCompactDisplay-bold.ttf"),
});

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Login />
      <StatusBar />
    </NativeBaseProvider>
  );
};

export default registerRootComponent(App);
