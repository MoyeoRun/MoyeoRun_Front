import { Box, Button, Stack } from 'native-base';
import React, { useState } from 'react';
import KakaoIcon from '../../assets/svg/KakaoIcon';
import NaverIcon from '../../assets/svg/NaverIcon';
import GoogleIcon from '../../assets/svg/GoogleIcon';
import AppleIcon from '../../assets/svg/AppleIcon';
import LogoBlue from '../../assets/svg/LogoBlue';
import config from '../../config';
import { useNavigation } from '@react-navigation/core';
import GetCodeView from './GetCodeView';

const OauthItem = ({ fontColor = '#FFFFFF', url, handleOauth, ...props }: any) => {
  return (
    <Button
      _text={{ color: fontColor, fontSize: '18px', fontWeight: '500' }}
      w="322px"
      h="56px"
      mb="10px"
      bg="#FFFFFF"
      borderRadius="4px"
      fontFamily="body"
      onPress={() => {
        handleOauth(url);
      }}
      {...props}
    ></Button>
  );
};

const apiUrl = {
  kakao: {
    code: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${config.KAKAO_KEY}&redirect_uri=http://45.248.73.50:30007/oauth/kakao`,
    token: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${config.KAKAO_KEY}&redirect_uri=http://45.248.73.50:30007/oauth/kakao`,
  },
};

type LoginProps = {
  onKakaoOauth: (accessToken: string) => void;
};

const Login = ({ onKakaoOauth }: LoginProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [source, setSource] = useState<string>();
  const [mode, setMode] = useState<string>();

  const handleOauth = (source: any) => {
    setOpen(true);
    setMode('code');
    setSource(source);
  };
  const onCodeSuccess = (accessCode: string) => {
    setMode('token');
    setSource(apiUrl['kakao'].token + '&code=' + accessCode);
  };

  const onTokenSuccess = (access_token: string) => {
    onKakaoOauth(access_token);
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <GetCodeView
          mode={mode}
          source={source}
          onCodeSuccess={onCodeSuccess}
          onTokenSuccess={onTokenSuccess}
        />
      ) : (
        <Stack flex={1} alignItems="center" justifyContent="center" bg="#ffffff">
          <Box my="82.5px">
            <LogoBlue />
          </Box>
          <Box>
            <KakaoIcon position="absolute" left="20px" top="20px" zIndex="1" />
            <OauthItem
              fontColor="#3C1E1E"
              bg="#FEE600"
              url={apiUrl['kakao'].code}
              handleOauth={handleOauth}
            >
              카카오톡 계정으로 로그인
            </OauthItem>
            <NaverIcon position="absolute" left="20px" top="87px" zIndex="1" />
            <OauthItem bg="#27D34A" handleOauth={handleOauth}>
              네이버 계정으로 로그인
            </OauthItem>
            <AppleIcon position="absolute" left="20px" top="148px" zIndex="1" />
            <OauthItem bg="#111111">애플 계정으로 로그인</OauthItem>
            <GoogleIcon position="absolute" left="20px" top="216px" zIndex="1" />
            <OauthItem
              fontColor="#686868"
              borderColor="#D1D1D1"
              borderWidth="1px"
              handleOauth={handleOauth}
            >
              구글 계정으로 로그인
            </OauthItem>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Login;
