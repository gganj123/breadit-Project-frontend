import { Link } from "react-router-dom";

const MainInstagramImg: React.FC = () => {
  const imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <ul className="instagram_list">
      {imgs.map((index) => {
        return (
          <li className="img_box" key={index}>
            <Link to="/">
              <img src="" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainInstagramImg;
