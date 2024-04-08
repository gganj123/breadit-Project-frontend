import { Link } from 'react-router-dom';

const MainInstagramImg = ({ src }: { src: string }) => {
  return (
    <li className="img_box">
      <Link to="/">
        <img src={src} />
      </Link>
    </li>
  );
};

export default MainInstagramImg;
