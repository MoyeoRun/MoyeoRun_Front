import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import colors from '../lib/styles/colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import {
  FocusedMissionIcon,
  FriendIcon,
  HomeIcon,
  MissionIcon,
  RecordIcon,
  RunningIcon,
} from '../assets/svg';
import LinkingConfiguration from './LinkingConfiguration';
import RecordTabContainer from '../containers/RecordTabContainer';
import HomeTabContainer from '../containers/HomeTabContainer';
import RunningTabContainer from '../containers/RunningTabContainer';
import MissionTabContainer from '../containers/MissionTabContainer';
import FriendTabContainer from '../containers/FriendTabContainer';
import BodyInfoContainer from '../containers/BodyInfoContainer';
import MyPageContainer from '../containers/MyPageContainer';
import LoginContainer from '../containers/LoginContainer';
import NotFound from '../components/NotFound';
import Welcome from '../components/Welcome';
import * as SecureStore from 'expo-secure-store';
import { setAuthorizeToken } from '../lib/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getAccessToken, initToken, kakaoOauth } from '../modules/auth';
import SingleRunning from '../components/SingleRun/SingleRunning';
import ReadySingleRun from '../components/SingleRun/ReadySingleRun';
import MoyeoRunRoom from '../components/MoyeoRunRoom/MoyeoRunRoom';
import { checkPermission } from 'react-native-location';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const manageToken = async () => {
    if (refreshToken) {
      if (accessToken) {
        if (accessToken.expiresIn < new Date() && refreshToken.expiresIn > new Date()) {
          await dispatch(getAccessToken(refreshToken.token));
        }
        if (refreshToken.expiresIn < new Date()) {
          dispatch(initToken());
          return;
        }
        console.log('@@@@@@ token exists, set Authorization');
        console.log(accessToken, refreshToken);
        setAuthorizeToken(accessToken.token);
        SecureStore.setItemAsync('accessToken', JSON.stringify(accessToken));
        SecureStore.setItemAsync('refreshToken', JSON.stringify(refreshToken));
      } else {
        try {
          console.log('@@@@@@ Access token remove perceive, try refresh');
          await dispatch(getAccessToken(refreshToken.token));
        } catch {
          console.log('@@@@@@ Access token refresh failed');
          navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        }
      }
    } else {
      console.log('@@@@@@ refresh token not found');
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }
  };

  React.useEffect(() => {
    manageToken();
  }, [accessToken, refreshToken]);

  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginContainer} options={{ headerShown: false }} />
      <Stack.Screen name="MyPage" component={MyPageContainer} options={{ title: '내정보' }} />
      <Stack.Screen
        name="BodyInfo"
        component={BodyInfoContainer}
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
        name="MoyeoRunRoom"
        component={MoyeoRunRoom}
        options={{ headerShown: false, title: '방만들기' }}
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
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors[colorScheme].tint,
        tabBarStyle: {
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
            focused ? (
              <HomeIcon stroke={'white'} fill={color} size={25} strokeWidth={1} />
            ) : (
              <HomeIcon stroke={color} />
            ),
        })}
      />
      <BottomTab.Screen
        name="Record"
        component={RecordTabContainer}
        options={{
          title: '기록',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <RecordIcon stroke={color} fill={color} strokeWidth={1} />
            ) : (
              <RecordIcon stroke={color} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Running"
        component={RunningTabContainer}
        options={{
          title: '러닝',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <RunningIcon stroke={color} fill={color} strokeWidth={1} />
            ) : (
              <RunningIcon stroke={color} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Mission"
        component={MissionTabContainer}
        options={{
          title: '미션',
          tabBarIcon: ({ color, focused }) =>
            focused ? <FocusedMissionIcon /> : <MissionIcon stroke={color} />,
        }}
      />
      <BottomTab.Screen
        name="Friend"
        component={FriendTabContainer}
        options={{
          title: '친구',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FriendIcon stroke={color} fill={color} strokeWidth={1} />
            ) : (
              <FriendIcon stroke={color} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
