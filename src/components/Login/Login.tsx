import { Box, Button, Stack } from 'native-base';
import React from 'react';
import KakaoIcon from '../../assets/svg/KakaoIcon';
import NaverIcon from '../../assets/svg/NaverIcon';
import GoogleIcon from '../../assets/svg/GoogleIcon';
import AppleIcon from '../../assets/svg/AppleIcon';
import LogoBlue from '../../assets/svg/LogoBlue';

const OauthItem = ({ fontColor = '#FFFFFF', ...props }: any) => (
  <Button
    _text={{ color: fontColor, fontSize: '18px', fontWeight: '500' }}
    w="322px"
    h="56px"
    mb="10px"
    bg="#FFFFFF"
    borderRadius="4px"
    fontFamily="body"
    {...props}
  ></Button>
);

const Login = () => {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Box my="82.5px">
        <LogoBlue />
      </Box>
      <Box>
        <KakaoIcon position="absolute" left="20px" top="20px" zIndex="1" />
        <OauthItem fontColor="#3C1E1E" bg="#FEE600">
          카카오톡 계정으로 로그인
        </OauthItem>
        <NaverIcon position="absolute" left="20px" top="87px" zIndex="1" />
        <OauthItem bg="#27D34A">네이버 계정으로 로그인</OauthItem>
        <AppleIcon position="absolute" left="20px" top="148px" zIndex="1" />
        <OauthItem bg="#111111">애플 계정으로 로그인</OauthItem>
        <GoogleIcon position="absolute" left="20px" top="216px" zIndex="1" />
        <OauthItem fontColor="#686868" border="1px solid #D1D1D1">
          구글 계정으로 로그인
        </OauthItem>
      </Box>
    </Stack>
  );
};

export default Login;
