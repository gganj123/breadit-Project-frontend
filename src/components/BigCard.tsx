import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BigCard = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0px 3rem rgb(242 242 242);
  margin-bottom: 3rem;
`;

const Content_box = styled.div`
  padding: 3rem;
  background-color: #fff;

  h5 {
    font-size: 2.2rem;
    margin-bottom: 1.4rem;
  }

  p {
    font-size: 1.8rem;
    color: #666;
  }
`;

type BigCardProps = {
  src: string;
  title: string;
  content: string;
};

const BigCardList: React.FC<BigCardProps> = ({ src, title, content }) => {
  return (
    <BigCard>
      <div className="img_box">
        <Link to="/">
          <img src={src} />
        </Link>
      </div>
      <Content_box>
        <h5>
          <Link to="/">{title}</Link>
        </h5>
        <p>{content}</p>
      </Content_box>
    </BigCard>
  );
};

export default BigCardList;
