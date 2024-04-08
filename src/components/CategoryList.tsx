import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeIcon from '/like-icon.svg';
import LikeIconActive from '/like-icon-active.svg';

type Image = {
  usersrc: string;
  src: string;
  title: string;
  username: string;
  hashtags: string[];
  likes: number;
};

type Props = {
  to: string;
  images: Image[];
};

const CategoryList: React.FC<Props> = ({ to, images }) => {
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
      {images.map((image, index) => (
        <li key={index}>
          <div className="box_wrapper list_title">
            <div className="user_img_wrapper">
              <img src={image.usersrc} alt={image.title} />
            </div>
            <p>{image.username}</p>
          </div>
          <div className="list_img_wrapper">
            <Link to={`${to}/${index}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          </div>
          <div className="subcategory">
            <p>{image.title}</p>
            <p>{image.hashtags.join(', ')}</p>
            <div className="like_icon_wrapper">
              <img
                src={likedImages[index] ? LikeIconActive : LikeIcon}
                className="like"
                alt="like icon"
                onClick={() => toggleLike(index)}
              />
              <p>{image.likes}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
