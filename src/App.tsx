import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { extendTheme, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { Intro, Login } from "./components/Login";
import * as Font from "expo-font";
import customTheme from "./hooks/customTheme";
import Onboarding from "./components/Onboarding";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 홈 화면을 렌더링할 데이터를 로딩하거나. 인증 절차등을 처리합니다. 성공시에 로딩화면에서 벗어납니다.
    const loadFont = async () => {
      await Font.loadAsync({
        "apple-sd-gothic-neo-medium": require("./assets/fonts/AppleSDGothicNeoM.ttf"),
        "apple-sd-gothic-neo-light": require("./assets/fonts/AppleSDGothicNeoL.ttf"),
        "apple-sd-gothic-neo-bold": require("./assets/fonts/AppleSDGothicNeoB.ttf"),
        "sf-compact-display": require("./assets/fonts/SfCompactDisplay.otf"),
        "sf-compact-display-light": require("./assets/fonts/SfCompactDisplay-light.otf"),
        "sf-compact-display-bold": require("./assets/fonts/SfCompactDisplay-bold.ttf"),
      });
      setLoading(false);
    };
    loadFont();
  }, []);

  return (
    <NativeBaseProvider theme={customTheme}>
      {loading ? null : <Onboarding />}
      <StatusBar />
    </NativeBaseProvider>
  );
};

export default registerRootComponent(App);
