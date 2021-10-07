import { Button, Factory, Image, Text, VStack } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";

const ImageContainer = (props: any) => {
  const FactoryView = Factory(ImageBackground);
  return (
    <FactoryView
      flex={1}
      source={require("../../assets/img/intro.png")}
      {...props}
    />
  );
};

const Intro = () => {
  return (
    <ImageContainer>
      <VStack flex={1} justifyContent="center" px="40px">
        <Text fontFamily="text" color="#FFFFFF" fontSize={38} fontWeight="bold">
          어디든{"\n"}
          모여 뛰는 우리
        </Text>
        <Text color="#FFFFFF" mt="30px" fontFamily="text" fontSize={19}>
          러닝을 함께 뛰고 싶나요? {"\n"}어디서든 우린 함께 뛴다! {"\n"}
          모여런에서 새로운 러닝을 만나요.
        </Text>
        <Button
          _text={{
            color: "#FFFFFF",
            fontFamily: "text",
            fontSize: 23,
            fontWeight: "500",
          }}
          _pressed={{
            bg: "#2766e6",
          }}
          w="100%"
          h="60px"
          mt="340px"
          bg="#2B73FF"
        >
          시작하기
        </Button>
      </VStack>
    </ImageContainer>
  );
};

export default Intro;
