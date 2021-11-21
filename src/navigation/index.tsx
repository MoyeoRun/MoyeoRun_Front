import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import colors from '../lib/styles/colors';
import { RootStackParamList, BottomTabParamList, RootTabScreenProps } from '../navigationTypes';
import * as Icon from '../assets/svg';
import LinkingConfiguration from './LinkingConfiguration';
import NotFound from '../components/NotFound';
import Welcome from '../components/Welcome';
import SingleRunning from '../components/singleRun/SingleRunning';
import ReadySingleRun from '../components/singleRun/ReadySingleRun';
import useColorScheme from '../lib/hooks/useColorScheme';

import * as BottomTabContainer from '../containers/bottomTab';
import UploadProfileContainer from '../containers/profile/UploadProfileContainer';
import CreateMultiRoomContainer from '../containers/multiRun/CreateMultiRoomContainer';
import MyPageContainer from '../containers/profile/MyPageContainer';
import LoginContainer from '../containers/auth/LoginContainer';
import MultiRoomContainer from '../containers/multiRun/MultiRoomContainer';
import RecordDetailContainer from '../containers/record/RecordDetailContainer';
import RecordAnalysisContainer from '../containers/record/RecordAnalysisContainer';
import MultiRunContainer from '../containers/multiRun/MultiRunContainer';
import ReadyMultiRunContainer from '../containers/multiRun/ReadyMultiRunContainer';

export default function Navigation({
  navigationRef,
}: {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
}) {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={{ ...DefaultTheme, dark: false }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

//Root Stack Navigator 정의
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    // 기본 탭을 Login으로 함으로써 토큰의 존재 여부를 먼저 검사합니다.
    <Stack.Navigator initialRouteName="Login">
      {/* 바텀탭 */}
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      {/* 기록 */}
      <Stack.Screen
        name="RecordDetail"
        component={RecordDetailContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecordAnalysis"
        component={RecordAnalysisContainer}
        options={{ headerShown: false }}
      />

      {/* 개인런 */}
      <Stack.Screen
        name="ReadySingleRun"
        component={ReadySingleRun}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SingleRun" component={SingleRunning} options={{ headerShown: false }} />

      {/* 멀티런 */}
      <Stack.Screen
        name="CreateMultiRoom"
        component={CreateMultiRoomContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MultiRoom"
        component={MultiRoomContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReadyMultiRun"
        component={ReadyMultiRunContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MultiRun"
        component={MultiRunContainer}
        options={{ headerShown: false }}
      />

      {/* 프로필 */}
      <Stack.Screen name="MyPage" component={MyPageContainer} />
      <Stack.Screen
        name="UploadProfile"
        component={UploadProfileContainer}
        options={{ headerShown: false }}
      />

      {/* 미분류 */}
      <Stack.Screen name="Login" component={LoginContainer} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

//Bottom Tab 정의
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      detachInactiveScreens={true}
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarActiveTintColor: colors[colorScheme].tint,
        tabBarStyle: {
          position: 'absolute',
          shadowColor: 'rgba(0,0,0,0.9)',
          shadowOffset: { width: 3, height: 20 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={BottomTabContainer.HomeTabContainer}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: '홈',
          tabBarIcon: ({ color, focused }) =>
            focused ? <Icon.HomeFillIcon color={'#1162FF'} /> : <Icon.HomeIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Record"
        component={BottomTabContainer.RecordTabContainer}
        options={{
          title: '기록',
          tabBarIcon: ({ color, focused }) =>
            focused ? <Icon.RecordFillIcon color={'#1162FF'} /> : <Icon.RecordIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Running"
        component={BottomTabContainer.RunningTabContainer}
        options={{
          title: '러닝',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon.RunningFillIcon color={'#1162FF'} />
            ) : (
              <Icon.RunningIcon color={color} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Mission"
        component={BottomTabContainer.MissionTabContainer}
        options={{
          title: '미션',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon.MissionFillIcon color={'#1162FF'} />
            ) : (
              <Icon.MissionIcon color={color} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Friend"
        component={BottomTabContainer.FriendTabContainer}
        options={{
          title: '친구',
          tabBarIcon: ({ color, focused }) =>
            focused ? <Icon.FriendFillIcon color={'#1162FF'} /> : <Icon.FriendIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
