import { Link } from 'react-router-dom';

const MainInstagramImg: React.FC<{ src: string }> = ({ src }) => {
  return (
    <li className="img_box">
      <Link to="/">
        <img src={src} />
      </Link>
    </li>
  );
};

export default MainInstagramImg;
