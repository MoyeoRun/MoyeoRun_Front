import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import Login from "./components/Login";

// const theme = extendTheme({
//   fontConfig: {
//     Roboto: {
//       100: {
//         normal: "Roboto-Light",
//         italic: "Roboto-LightItalic",
//       },
//       200: {
//         normal: "Roboto-Light",
//         italic: "Roboto-LightItalic",
//       },
//       300: {
//         normal: "Roboto-Light",
//         italic: "Roboto-LightItalic",
//       },
//       400: {
//         normal: "Roboto-Regular",
//         italic: "Roboto-Italic",
//       },
//       500: {
//         normal: "Roboto-Medium",
//       },
//       600: {
//         normal: "Roboto-Medium",
//         italic: "Roboto-MediumItalic",
//       },
//     },
//   },
//   fonts: {
//     heading: "Roboto",
//     body: "Roboto",
//     mono: "Roboto",
//   },
// });

const App = () => {
  return (
    <NativeBaseProvider>
      <Login />
      <StatusBar />
    </NativeBaseProvider>
  );
};

export default registerRootComponent(App);
