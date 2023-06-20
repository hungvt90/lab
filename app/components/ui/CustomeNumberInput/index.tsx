import { OutlinedInput } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import styled from './CustomeNumberInput.module.css';
export interface CustomeNumberInput {
  unit: number;
  setUnit: (value: number | ((prevVar: number) => number)) => void;
  unitLabel: string;
  imageUrl: string;
}

const CustomeNumberInput: React.FC<CustomeNumberInput> = ({
  unit,
  setUnit,
  unitLabel,
  imageUrl,
}) => {
  const handlePlusUnit = () => {
    setUnit((prevVar: number) => prevVar + 1);
  };
  const handleMinusUnit = () => {
    if (unit !== 0) {
      setUnit((prevVar: number) => prevVar - 1);
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(+e.target.value);
  };
  const controlSection = (
    <div className="tw-flex tw-flex-col">
      <KeyboardArrowUpIcon
        className="tw-cursor-pointer tw-align-middle"
        onClick={handlePlusUnit}
      />
      <KeyboardArrowDownIcon
        className="tw-cursor-pointer"
        onClick={handleMinusUnit}
      />
    </div>
  );
  const unitSection = (
    <div className="tw-h-full -tw-mr-[14px] tw-bg-[#F5F4F3] tw-px-[14px] tw-text-center">
      <p>{unitLabel}</p>
    </div>
  );
  return (
    <div className="tw-flex">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="tw-w-14 tw-h-14 tw-bg-no-repeat tw-bg-center"
      ></div>
      <OutlinedInput
        id="outlined-adornment-weight"
        startAdornment={controlSection}
        endAdornment={unitSection}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
          step: '1',
        }}
        type="number"
        value={unit}
        onChange={handleInput}
        classes={{
          root: styled.inputNumber,
        }}
        sx={{
          borderRadius: '4px',
          border: '1px solid #F5F4F3',
        }}
      />
    </div>
  );
};

export default CustomeNumberInput;
