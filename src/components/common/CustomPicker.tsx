import React, { useState } from 'react';
import { Box, HStack } from 'native-base';
import { Picker } from '@react-native-picker/picker';

type digits = {
  // id: string;
  label: string;
  numRange?: NumberRange;
  strRange?: Array<string>;
};

type customNumberPickerProps = {
  digits: digits;
  increProps?: number;
  setValue: any;
};

type NumberRange = {
  min: number;
  max: number;
};

type itemList = {
  label: string;
  value: number | string;
  increment?: number;
};

const numberPickerItems = (numRange: NumberRange, increProps: number = 1, label?: string) => {
  let { min, max } = numRange;
  const numList: Array<itemList> = [];
  let itemValue = 0;

  if (min > max) {
    [min, max] = [max, min];
  }
  const [cMin, cMax] = [Math.floor(min), Math.floor(max)];

  let steps = 0;
  if (increProps === 1) {
    steps = cMax - cMin + 1;
  } else {
    steps = Math.floor((cMax - cMin) / increProps) + 1;
  }

  for (let i = 1; i < steps; i++) {
    itemValue += increProps;
    numList.push({ label: `${itemValue}${label}`, value: itemValue });
  }

  return numList;
};

const stringPickerItems = (strRange: Array<string>, label?: string) => {
  const strList: Array<itemList> = [];

  let steps = strRange.length;

  for (let i = 0; i < steps; i++) {
    let itemValue = strRange[i];
    strList.push({ label: `${itemValue}${label}`, value: itemValue });
  }

  return strList;
};

const CustomPicker = ({ digits, setValue, increProps }: customNumberPickerProps) => {
  const [localValue, setLocalValue] = useState();

  // let numRange: NumberRange = [];
  // 숫자 digits + increament?
  // id label {min, max}
  // 글자 digis + data
  // id label + string[]

  let itemList: any = [];
  if (digits.strRange) {
    itemList = stringPickerItems(digits.strRange, digits.label);
  } else if (digits.numRange) {
    itemList = numberPickerItems(digits.numRange, increProps, digits.label);
  }
  return (
    <Picker
      selectedValue={localValue}
      onValueChange={(itemValue, itemIndex) => setLocalValue(itemValue)}
      style={{
        borderWidth: 1,
        width: 100,
      }}
    >
      {itemList.map((item: itemList) => (
        <Picker.Item label={`${item.label}`} value={item.value} />
      ))}
    </Picker>
  );
};

export default CustomPicker;
