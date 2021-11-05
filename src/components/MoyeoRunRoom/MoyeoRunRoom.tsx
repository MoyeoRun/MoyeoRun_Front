import { Box, HStack, Stack, ScrollView, VStack } from 'native-base';
import PrevArrowIcon from '../../assets/svg/PrevArrowIcon';
import React, { useEffect, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/core';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SubmitButton from './SubmitButton';
import NumberInputPicker from './NumberInputPicker';
import { digit, digitValue } from '../common/CustomPicker';

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
type InitState = {
  initValue: Array<digitValue>;
  digit: Array<digit>;
};

//numberInputPicker 초기 state 설정
const InitStartTime: InitState = {
  initValue: [
    { id: 'start/시간대', value: '', inputLabel: ' ' },
    { id: 'start/시', value: '', inputLabel: ':' },
    { id: 'start/분', value: '' },
  ],
  digit: [
    { id: 'start/시간대', placeholder: '', strRange: ['오전', '오후'] },
    { id: 'start/시', placeholder: '시', numRange: { min: 0, max: 12 } },
    { id: 'start/분', placeholder: '분', increProp: 5, numRange: { min: 0, max: 59 } },
  ],
};

const InitDistance = {
  initValue: [
    { id: 'distance/km', value: '', inputLabel: '.' },
    { id: 'distance/m', value: '', inputLabel: ' km' },
  ],
  digit: [
    { id: 'distance/km', placeholder: '.', numRange: { min: 0, max: 50 } },
    { id: 'distance/m', placeholder: 'km', numRange: { min: 0, max: 9 } },
  ],
};

const InitTimeLimit = {
  initValue: [
    { id: 'limit/시간', value: '', inputLabel: '시간 ' },
    { id: 'limit/분', value: '', inputLabel: '분' },
  ],
  digit: [
    { id: 'limit/시간', placeholder: '시간', numRange: { min: 0, max: 5 } },
    { id: 'limit/분', placeholder: '분', increProp: 5, numRange: { min: 0, max: 59 } },
  ],
};

const MoyeoRunRoom = ({ onUploadBodyInfo }: BodyInfoProps) => {
  const navigation = useNavigation();
  const [roomName, setRoomName] = useState<string>('');
  const [discription, setDiscription] = useState<string>('');
  const [startTime, setStartTime] = useState(InitStartTime.initValue);
  const [distance, setDistance] = useState(InitDistance.initValue);
  const [timeLimit, setTimeLimit] = useState(InitTimeLimit.initValue);
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const formDataArr: any = {};

    roomName ? (formDataArr[`roomName`] = roomName) : null;
    discription ? (formDataArr[`discription`] = discription) : null;
    startTime.forEach((item) => (item.value ? (formDataArr[item.id] = item.value) : null));
    distance.forEach((item) => (item.value ? (formDataArr[item.id] = item.value) : null));
    timeLimit.forEach((item) => (item.value ? (formDataArr[item.id] = item.value) : null));

    console.log(formDataArr);

    setFormReady(Object.keys(formDataArr).length == 9 ? true : false);
  }, [roomName, discription, startTime, distance, timeLimit]);

  const onSubmit = () => {
    // onUploadBodyInfo(Info[0].value, Info[1].value);
    console.log('123123');
    navigation.dispatch(StackActions.replace('Root'));
  };

  return (
    <Stack flex={1} alignItems="center" bg="#ffffff" pt={getStatusBarHeight()}>
      <ScrollView w="100%" mt="20px">
        <Box w="100%" px="20px" pb="110px">
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
            <NumberInputPicker
              values={startTime}
              setValue={setStartTime}
              digits={InitStartTime.digit}
            />
          </ItemWrapper>

          <ItemWrapper>
            <ItemTitle>목표거리</ItemTitle>
            <NumberInputPicker
              values={distance}
              setValue={setDistance}
              digits={InitDistance.digit}
            />
          </ItemWrapper>

          <ItemWrapper>
            <ItemTitle>제한시간</ItemTitle>
            <NumberInputPicker
              values={timeLimit}
              setValue={setTimeLimit}
              digits={InitTimeLimit.digit}
            />
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
