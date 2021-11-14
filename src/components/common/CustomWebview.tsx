import React from 'react';
import WebView, { WebViewProps } from 'react-native-webview';
import config from '../../config';

type CustomWebviewProps = WebViewProps & {
  parentRef?: any; //웹뷰에 연결할 ref입니다.
  path: string; //웹뷰의 서비스 pathname입니다. ex) login, recordDetail.
};

/**
 * 웹뷰 기본 통신 방식
 * RN에서 보내기. ref.postMessage(data: string)
 * RN에서 받기. props의 onMessage(data: string)
 * Web에서 보내기 window.ReactNativeWebView.postMessage(data: string)
 * Web에서 받기 window.ReactNativeWebView.onMessage(data: string)
 */
const CustomWebview = ({ parentRef, path, ...props }: CustomWebviewProps) => {
  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

  return (
    <WebView
      ref={parentRef}
      source={{ uri: config.webViewUrl + path }}
      injectedJavaScript={INJECTEDJAVASCRIPT}
      textZoom={100}
      {...props}
    />
  );
};

export default CustomWebview;
