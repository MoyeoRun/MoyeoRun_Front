import { useNavigation } from '@react-navigation/core';
import { Modal } from 'native-base';
import React from 'react';
import WebView from 'react-native-webview';
import config from '../../config';

const INJECTED_JAVASCRIPT =
  '(function() {if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';

const GetCodeView = ({ mode, source, onCodeSuccess, onTokenSuccess, ...props }: any) => {
  const navigation = useNavigation();

  const onSuccess = (event: any) => {
    if (mode === 'code') {
      const message = event.nativeEvent.data;
      const accessCode = message.substring(message.indexOf('code=') + 5, message.indexOf('","err'));
      onCodeSuccess(accessCode);
    } else {
      const { access_token } = JSON.parse(event.nativeEvent.data);
      onTokenSuccess(access_token);
    }
  };

  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: source }}
      injectedJavaScript={INJECTED_JAVASCRIPT}
      javaScriptEnabled={true}
      onMessage={onSuccess}
    />
  );
};

export default GetCodeView;
