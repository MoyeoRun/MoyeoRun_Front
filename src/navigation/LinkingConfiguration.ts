import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "Home",
            },
          },
          Record: {
            screens: {
              RecordScreen: "Record",
            },
          },
          Running: {
            screens: {
              MoyeoRun: {
                screens: {
                  MoyeoRunScreen: "MoyeoRun",
                },
              },
              Personal: {
                screens: {
                  PersonalScreen: "Personal",
                },
              },
              Modal: "modal",
            },
          },
          Mission: {
            screens: {
              MissionScreen: "Mission",
            },
          },
          Friend: {
            screens: {
              FriendScreen: "Friend",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
