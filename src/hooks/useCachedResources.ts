import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState<null | { token: string; expiresIn: Date }>(null);
  const [refreshToken, setRefreshToken] = React.useState<null | { token: string; expiresIn: Date }>(null);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const cachedAccessToken = await SecureStore.getItemAsync('accessToken');
        const cachedRefreshToken = await SecureStore.getItemAsync('refreshToken');
        setAccessToken(JSON.parse(cachedAccessToken || ''));
        setRefreshToken(JSON.parse(cachedRefreshToken || ''));
        await Font.loadAsync({
          'apple-sd-gothic-neo-medium': require('../assets/fonts/AppleSDGothicNeoM.ttf'),
          'apple-sd-gothic-neo-light': require('../assets/fonts/AppleSDGothicNeoL.ttf'),
          'apple-sd-gothic-neo-bold': require('../assets/fonts/AppleSDGothicNeoB.ttf'),
          'sf-compact-display': require('../assets/fonts/SfCompactDisplay.otf'),
          'sf-compact-display-light': require('../assets/fonts/SfCompactDisplay-light.otf'),
          'sf-compact-display-bold': require('../assets/fonts/SfCompactDisplay-bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, accessToken, refreshToken };
}
