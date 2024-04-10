import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeIcon from '/heart_icon.svg';
import LikeIconActive from '/heart_icon_active.svg';
import Noimg from '/no_img.svg';

type Props = {
  to: string;
  images: string[][];
  images: string[][];
  titles: string[];
  nickname: string[];
  likes: number[];
  usersrc: string[];
  likes: number[];
  usersrc: string[];
};

const CategoryList: React.FC<Props> = ({
  to,
  images,
  titles,
  nickname,
  likes,
  usersrc,
  likes,
  usersrc,
}) => {
  const [likedImages, setLikedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleLike = (index: number) => {
    setLikedImages((prevLikedImages) => {
      const newLikedImages = { ...prevLikedImages };
      newLikedImages[index] = !newLikedImages[index];
      return newLikedImages;
    });
  };
  const firstValues = images.map((subArray) => subArray[0]);

  const firstValues = images.map((subArray) => subArray[0]);

  return (
    <ul className="community_list_item">
      {images.map((image, index) => (
      {images.map((image, index) => (
        <li key={index}>
          <div className="box_wrapper list_title">
            <div className="user_img_wrapper">
              <img src={usersrc[index]} alt={titles[index]} />
              <img src={usersrc[index]} alt={titles[index]} />
            </div>
            <p>{nickname[index] || ''}</p>
          </div>
          <div className="list_img_wrapper">
            <Link to={`${to}/${index}`}>
              <img src={firstValues[index] || Noimg} alt={titles[index]} />
              <img src={firstValues[index] || Noimg} alt={titles[index]} />
            </Link>
          </div>
          <div className="subcategory">
            <p>{titles[index] || ''}</p>
            <div className="like_icon_wrapper">
              <img
                src={likedImages[index] ? LikeIconActive : LikeIcon}
                className="like"
                alt="like icon"
                onClick={() => toggleLike(index)}
              />
              <p>{likes[index]}</p>
              <p>{likes[index]}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
