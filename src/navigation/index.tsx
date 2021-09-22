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
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import MakeRoomScreen from "../screens/MakeRoomScreen";
import HomeIcon from "../assets/svg/HomeIcon";
import RecordScreen from "../screens/RecordScreen";
import RecordIcon from "../assets/svg/RecordIcon";
import RunningScreen from "../screens/RunningScreen";
import RunningIcon from "../assets/svg/RunningIcon";
import MissionScreen from "../screens/MissionScreen";
import MissionIcon from "../assets/svg/MissionIcon";
import FriendScreen from "../screens/FriendScreen";
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
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={MakeRoomScreen} />
      </Stack.Group>
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
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "홈",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Record"
        component={RecordScreen}
        options={{
          title: "기록",
          tabBarIcon: ({ color }) => <RecordIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Running"
        component={RunningScreen}
        options={{
          title: "러닝",
          tabBarIcon: ({ color }) => <RunningIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mission"
        component={MissionScreen}
        options={{
          title: "미션",
          tabBarIcon: ({ color }) => <MissionIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Friend"
        component={FriendScreen}
        options={{
          title: "친구",
          tabBarIcon: ({ color }) => <FriendIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
