import { Box, Button, Stack } from "native-base";
import React from "react";
import Logo from "../../assets/svg/Logo";

const OauthItem = ({ fontColor = "#FFFFFF", ...props }: any) => (
  <Button
    _text={{ color: fontColor, fontSize: "18px", fontWeight: "500" }}
    w="322px"
    h="56px"
    mb="10px"
    bg="#FFFFFF"
    borderRadius="4px"
    {...props}
  ></Button>
);

const Login = () => {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Box my="82.5px">
        <Logo />
      </Box>
      <Box>
        <OauthItem fontColor="#3C1E1E" bg="#FEE600">
          카카오톡 계정으로 로그인
        </OauthItem>
        <OauthItem bg="#27D34A">네이버 계정으로 로그인</OauthItem>
        <OauthItem bg="#111111">애플 계정으로 로그인</OauthItem>
        <OauthItem fontColor="#686868" border="1px solid #D1D1D1">
          구글 계정으로 로그인
        </OauthItem>
      </Box>
    </Stack>
  );
};

export default Login;
