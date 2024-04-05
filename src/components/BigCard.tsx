import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BigCard = styled.div`
  border: 1px solid #575757;
  overflow: hidden;
`;

const Content_box = styled.div`
  padding: 3rem;
  background-color: #fffdf4;
  border-top: solid 1px #575757;

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
