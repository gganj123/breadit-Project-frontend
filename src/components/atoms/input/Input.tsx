import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  // placeholder 스타일
  &::placeholder {
    color: #888;
  }

  // 포커스됐을 때 스타일
  &:focus {
    border-color: #f0c14b;
    outline: none;
  }
`;

type InputFieldProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
