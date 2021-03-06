import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../navigationTypes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Record: {
            screens: {
              RecordScreen: 'Record',
            },
          },
          Running: {
            screens: {
              MoyeoRun: {
                screens: {
                  MoyeoRunRoomScreen: 'MoyeoRunRoom',
                },
              },
              SingleRun: {
                screens: {
                  ReadySingleRunScreen: 'ReadySingleRun',
                },
              },
            },
          },
          Mission: {
            screens: {
              MissionScreen: 'Mission',
            },
          },
          Friend: {
            screens: {
              FriendScreen: 'Friend',
            },
          },
        },
      },
      Login: {
        screens: {
          Login: 'login',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
