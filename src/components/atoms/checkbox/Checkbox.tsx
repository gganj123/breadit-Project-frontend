import { FC } from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string;
  size?: number;
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
