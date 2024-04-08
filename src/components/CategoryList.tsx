import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeIcon from '/like-icon.svg';
import LikeIconActive from '/like-icon-active.svg';

type Image = {
  usersrc: string;
  src: string;
  title: string;
  hashtags: string[];
  likes: number;
};

type Props = {
  to: string;
  images: string[];
  tag: Image[];
  titles: string[];
  nickname: string[];
};

const CategoryList: React.FC<Props> = ({
  to,
  images,
  tag,
  titles,
  nickname,
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
  return (
    <ul className="community_list_item">
      {tag.map((img, index) => (
        <li key={index}>
          <div className="box_wrapper list_title">
            <div className="user_img_wrapper">
              <img src={img.usersrc} alt={img.title} />
            </div>
            <p>{nickname[index] || ''}</p>
          </div>
          <div className="list_img_wrapper">
            <Link to={`${to}/${index}`}>
              <img src={images[index]} alt={img.title} />
            </Link>
          </div>
          <div className="subcategory">
            <p>{titles[index] || ''}</p>
            <p>{img.hashtags.join(', ')}</p>
            <div className="like_icon_wrapper">
              <img
                src={likedImages[index] ? LikeIconActive : LikeIcon}
                className="like"
                alt="like icon"
                onClick={() => toggleLike(index)}
              />
              <p>{img.likes}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
