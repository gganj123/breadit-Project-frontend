import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonLike from './atoms/buttons/ButtonLike';
import ReviewImg from '/review_img2.svg';

const BigCard = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0px 3rem rgb(242 242 242);
  margin-bottom: 2rem;
`;

const ContentBox = styled.div`
  padding: 3rem;
  background-color: #fff;

  h5 {
    font-size: 2.2rem;
    margin-bottom: 1.4rem;
  }

  p {
    font-size: 1.8rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

type BigCardProps = {
  data: {
    title: string;
    content: string;
  };
};

const BigCardList: React.FC<BigCardProps> = ({ data }) => {

  return (
    <BigCard>
      <div className="img_box">
        <Link to="/magazine/1">
          <img src={ReviewImg} />
        </Link>
      </div>
      <ContentBox>
        <h5>
          <Link to="/magazine/1">{data.title}</Link>
        </h5>
        <p>{data.content}</p>
        <ButtonLike like={0} />
      </ContentBox>
    </BigCard>
  );
};

export default BigCardList;
