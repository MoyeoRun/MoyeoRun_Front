import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  //바텀 탭
  BottomTab: NavigatorScreenParams<BottomTabParamList> | undefined;

  //기록
  RecordDetail: undefined;
  RecordAnalysis: undefined;

  //개인런
  ReadySingleRun: undefined;
  SingleRun: undefined;

  //멀티런
  CreateMultiRoom: undefined;
  MultiRoom: { roomId: number };
  MultiRun: { room: Room };

  //프로필
  UploadProfile: undefined;
  MyPage: undefined;

  //미분류
  Login: undefined;
  Welcome: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Record: undefined;
  Running: undefined;
  Mission: undefined;
  Friend: undefined;
};

export type RootTabScreenProps<Screen extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
