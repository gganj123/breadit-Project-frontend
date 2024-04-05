import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleButton = styled(Link)`
  display: inline-block;
  height: 4.2rem;
  line-height: 4rem;
  background-color: #575757;
  padding: 0 2.4rem;
  font-size: 1.8rem;
  color: #fff;
`;

const ButtonDeafult: React.FC<{ text: string; go: string }> = ({
  text,
  go,
}) => {
  return <StyleButton to={go}>{text}</StyleButton>;
};

export default ButtonDeafult;
