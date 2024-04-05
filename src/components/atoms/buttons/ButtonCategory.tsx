import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  height: 6.6rem;
  padding-left: 2rem;
  margin-top: 3rem;
  border: solid 1px #575757;
  position: relative;
  font-size: 2rem;
  font-weight: 500;
`;

const ButtonArrow = styled.span`
  display: inline-block;
  height: 100%;
  width: 6.6rem;
  background-color: #ffdfed;
  border-left: solid 1px #575757;
  position: absolute;
  top: 0;
  right: 0;
  transition: background-color 0.25s;

  &:hover {
    background-color: #ffc3dc;
  }

  &::after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border-top: solid 1px #575757;
    border-right: solid 1px #575757;
    position: absolute;
    top: 40%;
    left: 36%;
    transform: rotate(45deg);
  }
`;

const ButtonCategory: React.FC<{ go: string; categoryName: string }> = ({
  go,
  categoryName,
}) => {
  return (
    <Link to={go}>
      <ButtonBox>
        {categoryName}
        <ButtonArrow />
      </ButtonBox>
    </Link>
  );
};

export default ButtonCategory;
