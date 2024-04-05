import styled from 'styled-components';

const StyleButton = styled.button`
  height: 4.2rem;
  background-color: #575757;
  padding: 0 2.4rem;
  font-size: 1.8rem;
  color: #fff;
  line-height: normal;
`;

const ButtonDeafult: React.FC<{ text: string }> = ({ text }) => {
  return <StyleButton>{text}</StyleButton>;
};

export default ButtonDeafult;
