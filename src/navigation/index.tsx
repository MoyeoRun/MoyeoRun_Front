import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
<<<<<<< HEAD
import { NavigationContainer, DefaultTheme, useNavigation, NavigationContainerRefWithCurrent } from '@react-navigation/native';
=======
import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
>>>>>>> develop
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import colors from '../lib/styles/colors';
import { RootStackParamList, BottomTabParamList, RootTabScreenProps } from '../navigationTypes';
import {
  FriendIcon,
  HomeIcon,
  HomeFillIcon,
  MissionIcon,
  RecordIcon,
  RunningIcon,
  RecordFillIcon,
  RunningFillIcon,
  MissionFillIcon,
  FriendFillIcon,
} from '../assets/svg';
import LinkingConfiguration from './LinkingConfiguration';
import MyPageContainer from '../containers/MyPageContainer';
import LoginContainer from '../containers/LoginContainer';
import NotFound from '../components/NotFound';
import Welcome from '../components/Welcome';
import SingleRunning from '../components/singleRun/SingleRunning';
import ReadySingleRun from '../components/singleRun/ReadySingleRun';
import MoyeoRunRoom from '../components/MoyeoRunRoom/MoyeoRunRoom';
import useColorScheme from '../lib/hooks/useColorScheme';
import UploadProfileContainer from '../containers/UploadProfileContainer';
import CreateMultiRoomContainer from '../containers/multiRun/CreateMultiRoomContainer';
import {
  FriendTabContainer,
  HomeTabContainer,
  MissionTabContainer,
  RecordTabContainer,
  RunningTabContainer,
} from '../containers/bottomTab';

export default function Navigation({
  navigationRef,
}: {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={{ ...DefaultTheme, dark: false }}>
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
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginContainer} options={{ headerShown: false }} />
      <Stack.Screen name="MyPage" component={MyPageContainer} options={{ title: '내정보' }} />
      <Stack.Screen
        name="UploadProfile"
        component={UploadProfileContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'Oops!' }} />
      <Stack.Screen
        name="SingleRun"
        component={SingleRunning}
        options={{ title: '개인런', headerShown: false }}
      />
      <Stack.Screen
        name="ReadySingleRun"
        component={ReadySingleRun}
        options={{ title: '개인런준비', headerShown: false }}
      />
      <Stack.Screen
        name="CreateMultiRoom"
        component={CreateMultiRoomContainer}
        options={{ headerShown: false, title: '방만들기' }}
      />
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
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
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
        component={HomeTabContainer}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: '홈',
          tabBarIcon: ({ color, focused }) =>
            focused ? <HomeFillIcon color={color} /> : <HomeIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Record"
        component={RecordTabContainer}
        options={{
          title: '기록',
          tabBarIcon: ({ color, focused }) =>
            focused ? <RecordFillIcon color={color} /> : <RecordIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Running"
        component={RunningTabContainer}
        options={{
          title: '러닝',
          tabBarIcon: ({ color, focused }) =>
            focused ? <RunningFillIcon color={color} /> : <RunningIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mission"
        component={MissionTabContainer}
        options={{
          title: '미션',
          tabBarIcon: ({ color, focused }) =>
            focused ? <MissionFillIcon color={color} /> : <MissionIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Friend"
        component={FriendTabContainer}
        options={{
          title: '친구',
          tabBarIcon: ({ color, focused }) =>
            focused ? <FriendFillIcon color={color} /> : <FriendIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
