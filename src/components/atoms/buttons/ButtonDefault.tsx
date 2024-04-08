import { FC } from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  height: 4.4rem;
  background-color: #575757;
  padding: 0 2.4rem;
  font-size: 1.8rem;
  color: #fff;
  line-height: normal;
  border-radius: 0.6rem;
`;

const ButtonDeafult: FC<{ text: string }> = ({ text }) => {
  return <StyleButton>{text}</StyleButton>;
};

export default ButtonDeafult;
