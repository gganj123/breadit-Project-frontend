import { FC } from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string; // 색상을 선택적으로 받습니다
  size?: number; // 크기를 선택적으로 받습니다
};

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <StyledCheckbox
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default Checkbox;
