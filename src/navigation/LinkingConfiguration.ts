import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

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
                  MoyeoRunScreen: 'MoyeoRun',
                },
              },
              SingleRun: {
                screens: {
                  SingleFreeRunScreen: 'SingleFreeRun',
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
