import { Box, Button, HStack, Stack, ScrollView, VStack } from 'native-base';
import PrevArrowIcon from '../../assets/svg/PrevArrowIcon';
import React, { useRef, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/core';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SubmitButton from './SubmitButton';
import NumberInputPicker from './NumberInputPicker';

const PrevButton = ({ onPress }: any) => {
  return (
    <Pressable onPress={onPress}>
      <PrevArrowIcon color="black" />
    </Pressable>
  );
};

const ItemWrapper = ({ children }: any) => <VStack mt="32px">{children}</VStack>;
const ItemTitle = ({ children }: any) => {
  return (
    <Box
      mb="13px"
      _text={{
        fontFamily: 'text',
        color: '#333333',
        fontSize: 19,
        fontWeight: '600',
        lineHeight: 21.6,
        letterSpacing: -1,
      }}
    >
      {children}
    </Box>
  );
};

const TextInputForm = ({ placeholder, value, onChange }: any) => {
  return (
    <TextInput
      value={value}
      onChangeText={(text) => onChange(text)}
      multiline
      placeholder={placeholder}
      style={{
        paddingLeft: 13,
        paddingTop: 15,
        height: 80,
        borderWidth: 1,
        borderColor: '#DCDDDF',
        fontSize: 16,
      }}
    />
  );
};
const TextLengthCheck = ({ value }: { value: string }) => {
  const length = value.toString().length;
  return (
    <Box
      bottom="-21"
      right="0"
      position="absolute"
      display="flex"
      flex-direction="row"
      _text={{
        fontSize: 13,
        color: '#636770',
      }}
    >
      {`${length} / 40자`}
    </Box>
  );
};

type BodyInfoProps = {
  onUploadBodyInfo: (weight: number, height: number) => void;
};

const MoyeoRunRoom = ({ onUploadBodyInfo }: BodyInfoProps) => {
  const navigation = useNavigation();
  const [roomName, setRoomName] = useState<string>('');
  const [discription, setDiscription] = useState<string>('');
  const [startTime, setStartTime] = useState();
  const [distance, setDistance] = useState();
  const [timeLimit, setTimeLimit] = useState();

  const formReady = false;

  const [Info, setInfo] = React.useState([
    { id: 'height', value: 10 },
    { id: 'weight', value: 50 },
  ]);

  // const [Info, setInfo] = React.useState([
  //   { id: 'height', value: 10 },
  //   { id: 'weight', value: 50 },

  // ]);const [Info, setInfo] = React.useState([
  //   { id: 'height', value: 10 },
  //   { id: 'weight', value: 50 },
  // ]);

  // const [showPicker, setShowPicker] = React.useState(false);
  const onSubmit = () => {
    onUploadBodyInfo(Info[0].value, Info[1].value);
  };

  return (
    <Stack flex={1} alignItems="center" bg="#ffffff" pt={getStatusBarHeight()}>
      <ScrollView w="100%" mt="20px">
        <Box w="100%" px="20px">
          <HStack display="flex" justifyContent="space-between" alignItems="center">
            <PrevButton onPress={() => navigation.dispatch(StackActions.pop())} />
          </HStack>
          <ItemWrapper>
            <ItemTitle>방이름</ItemTitle>
            <TextInputForm
              value={roomName}
              onChange={setRoomName}
              placeholder={`방 이름을 입력해주세요 \n(ex.자유롭게 5km 뛰어요)`}
            />
            <TextLengthCheck value={roomName} />
          </ItemWrapper>
          <ItemWrapper>
            <ItemTitle>설명(선택)</ItemTitle>
            <TextInputForm
              value={discription}
              onChange={setDiscription}
              placeholder={`방을 설명할 정보를 입력해주세요 \n(ex.30분 안에 5km 뛰기)`}
            />
            <TextLengthCheck value={discription} />
          </ItemWrapper>

          <ItemWrapper>
            <ItemTitle>시작시간</ItemTitle>
            <NumberInputPicker value={startTime} focus={setStartTime} />
          </ItemWrapper>

          <ItemWrapper>
            <ItemTitle>목표거리</ItemTitle>
            <NumberInputPicker value={distance} focus={setDistance} />
          </ItemWrapper>

          <ItemWrapper>
            <ItemTitle>제한시간</ItemTitle>
            <NumberInputPicker value={timeLimit} focus={setTimeLimit} />
          </ItemWrapper>
        </Box>
      </ScrollView>
      <SubmitButton onPress={onSubmit} formReady={formReady}>
        다음
      </SubmitButton>
    </Stack>
  );
};

export default MoyeoRunRoom;
