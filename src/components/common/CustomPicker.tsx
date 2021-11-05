import React, { useEffect, useState } from 'react';
import { Box, HStack } from 'native-base';
import { Picker } from '@react-native-picker/picker';

export type digit = {
  id: string;
  placeholder?: string;
  increProp?: number;
  numRange?: NumberRange;
  strRange?: Array<string>;
};
export type digitValue = {
  id: string;
  value: number | string;
  inputLabel?: string;
};

type customNumberPickerProps = {
  digit: digit;
  setValue: any;
  values: Array<digitValue>;
};

export type NumberRange = {
  min: number;
  max: number;
};

type itemList = {
  label: string;
  value: number | string;
  increment?: number;
};

const PickerPlaceHolder = ({ placeholder }: { placeholder: string | undefined }) => {
  return (
    <Box
      _text={{
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 22,
      }}
    >
      {placeholder}
    </Box>
  );
};

const numberPickerItems = (numRange: NumberRange, increProp: number = 1) => {
  let { min, max } = numRange;
  const numList: Array<itemList> = [];
  let itemValue = 0;

  if (min > max) {
    [min, max] = [max, min];
  }
  const [cMin, cMax] = [Math.floor(min), Math.floor(max)];

  let steps = 0;
  if (increProp === 1) {
    steps = cMax - cMin + 1;
  } else {
    steps = Math.floor((cMax - cMin) / increProp) + 1;
  }

  for (let i = 1; i < steps; i++) {
    itemValue += increProp;
    numList.push({ label: `${itemValue}`, value: itemValue });
  }

  return numList;
};

const stringPickerItems = (strRange: Array<string>) => {
  const strList: Array<itemList> = [];

  let steps = strRange.length;

  for (let i = 0; i < steps; i++) {
    let itemValue = strRange[i];
    strList.push({ label: `${itemValue}`, value: itemValue });
  }

  return strList;
};

const CustomPicker = ({ digit, values, setValue }: customNumberPickerProps) => {
  const [localValue, setLocalValue] = useState('');

  // // let numRange: NumberRange = [];
  // // 숫자 digit + increament?
  // // id label {min, max}
  // // 글자 digis + data
  // // id label + string[]

  let itemList: any = [];
  if (digit.strRange) {
    itemList = stringPickerItems(digit.strRange);
  } else if (digit.numRange) {
    itemList = numberPickerItems(digit.numRange, digit.increProp);
  }
  return (
    <>
      <Picker
        selectedValue={localValue}
        onValueChange={(itemValue, itemIndex) => {
          setLocalValue(itemValue);
          setValue(
            values.map((value) => (value.id === digit.id ? { ...value, value: itemValue } : value)),
          );
        }}
        style={{
          width: 70,
        }}
      >
        {itemList.map((item: itemList) => (
          <Picker.Item label={`${item.label}`} value={item.value} />
        ))}
      </Picker>
      <PickerPlaceHolder placeholder={digit.placeholder} />
    </>
  );
};

export default CustomPicker;
