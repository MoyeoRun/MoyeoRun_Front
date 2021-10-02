import { Box, Image, Text } from 'native-base';
import React from 'react';

const FormTitle = (props: any) => <Text w="86px" fontFamily="text" fontSize="16px" color="#82837E" {...props} />;

const FormContent = (props: any) => <Text fontFamily="text" fontSize="19px" color="#333333" {...props} />;

const Form = (props: any) => (
  <Box w="100%" flexDirection="row" justifyContent="flex-start" alignItems="center" {...props} mt="34px" />
);

const MyPage = () => {
  return (
    <Box flex={1} bg="#FFF">
      <Box
        height="263px"
        justifyContent="center"
        alignItems="center"
        borderBottomWidth="0.6px"
        borderBottomColor="#D4D4D4"
        mx="24px"
      >
        <Image
          w="112px"
          h="112px"
          source={{
            uri: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
          }}
          borderRadius={50}
        ></Image>
        <Form flexDirection="row">
          <FormTitle w="86px">이름</FormTitle>
          <FormContent>황인서</FormContent>
        </Form>
      </Box>
      <Box mx="24px">
        <Text fontFamily="text" fontSize="16px" mt="35px">
          신체 정보
        </Text>
        <Form flexDirection="row">
          <FormTitle>키</FormTitle>
          <FormContent>170cm</FormContent>
        </Form>
        <Form flexDirection="row">
          <FormTitle w="86px">몸무게</FormTitle>
          <FormContent>65Kg</FormContent>
        </Form>
      </Box>
    </Box>
  );
};

export default MyPage;
