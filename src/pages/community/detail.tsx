import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RightArrow from '/right-arrow.svg';
import LikePost from '/heart_icon.svg';
import SharePost from '/share_icon.svg';
import styled from 'styled-components';

const Navigation = styled.li`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: -3em;
    width: 10px;
    height: 10px;
    background: url(${RightArrow}) no-repeat center center;
    transition: all 0.3s ease-in-out;
  }
  &:last-child:after {
    display: none;
  }
`;

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // useParams 훅을 사용하여 id 매개변수를 가져옴

  // id에 따라 상세 정보를 가져오는 로직을 구현하시면 됩니다.

  return (
    <>
      <div className="community_container">
        <div className="community">
          <div className="navigation_tab">
            <ul>
              <Navigation>
                <Link to="/community">Community</Link>
              </Navigation>
              <Navigation>
                <Link to="/community">베이커리 추천</Link>
              </Navigation>
            </ul>
            <ul className="additional">
              <li>
                <a>
                  <img src={LikePost} />
                </a>
              </li>
              <li>
                <a>
                  <img src={SharePost} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div className="user_img_wrapper">
                <div>이미지</div>
              </div>
              <div>
                <p>제목</p>
                <p>이름</p>
              </div>
            </div>
            <div>
              <div>버튼</div>
            </div>
          </div>
          <p>Detail for item with id: {id}</p>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
