import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined;
  MyPage: undefined;
  BodyInfo: undefined;
  Welcome: undefined;
  Running: undefined;
  NotFound: undefined;
  SingleFreeRun: undefined;
  OnSingleRunning: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Record: undefined;
  Running: undefined;
  Mission: undefined;
  Friend: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
