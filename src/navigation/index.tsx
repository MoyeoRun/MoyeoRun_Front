/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import colors from "../lib/styles/colors";
import useColorScheme from "../hooks/useColorScheme";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeTabScreen from "../screens/bottomTab/HomeTabScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeIcon from "../assets/svg/HomeIcon";
import RecordTabScreen from "../screens/bottomTab/RecordTabScreen";
import RecordIcon from "../assets/svg/RecordIcon";
import RunningTabScreen from "../screens/bottomTab/RunningTabScreen";
import RunningIcon from "../assets/svg/RunningIcon";
import MissionTabScreen from "../screens/bottomTab/MissionTabScreen";
import MissionIcon from "../assets/svg/MissionIcon";
import FriendTabScreen from "../screens/bottomTab/FriendTabScreen";
import FriendIcon from "../assets/svg/FriendIcon";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeTabScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "홈",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Record"
        component={RecordTabScreen}
        options={{
          title: "기록",
          tabBarIcon: ({ color }) => <RecordIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Running"
        component={RunningTabScreen}
        options={{
          title: "러닝",
          tabBarIcon: ({ color }) => <RunningIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mission"
        component={MissionTabScreen}
        options={{
          title: "미션",
          tabBarIcon: ({ color }) => <MissionIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Friend"
        component={FriendTabScreen}
        options={{
          title: "친구",
          tabBarIcon: ({ color }) => <FriendIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
