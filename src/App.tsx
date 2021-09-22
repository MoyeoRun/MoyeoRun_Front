import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { extendTheme, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { Intro, Login } from "./components/Login";
import * as Font from "expo-font";
import customTheme from "./hooks/customTheme";
import Onboarding from "./components/Onboarding";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={customTheme}>
        {!isLoadingComplete ? (
          <Onboarding />
        ) : (
          <Navigation colorScheme={colorScheme} />
        )}
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
