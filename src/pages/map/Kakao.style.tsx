import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  border: 1px solid #bbb;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 10px;
  overflow: hidden;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid #bbb;
    transform: rotate(45deg);
    transform-origin: 0 0;
    position: absolute;
    bottom: 6px;
    left: 50%;
    background: #fff;
  }
`;

export const PlaceName = styled.p`
  font-size: 16px;
  padding: 10px 5px 10px 10px;
  background: #fff;
`;

export const DetailLink = styled.a`
  text-align: center;
  padding: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #fff;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SearchBtns = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
`;

export const KeywordBtn = styled.button`
  width: 110px;
  padding: 10px;
  border-radius: 10px;
  font-size: 0.875rem;
  color: black
  background-color: black

  &:hover {
    background-color: black
  }

  @media (max-width: 768px) {
    width: 90px;
    font-size: 0.75rem;
    padding: 8px;
  }
`;

export const ListContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  left: -400px;
  top: 0;
  z-index: 10;
  bottom: 0;
  width: 400px;
  overflow-y: auto;
  transition: 0.2s;
  // border-right: black;

  ${({ isClosed }) =>
    isClosed &&
    css`
      left: 0;
    `};
`;

export const SideBarOpenBtn = styled.button`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  width: 30px;
  height: 80px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 0;
  transition: 0.2s;

  ${({ isClosed }) =>
    isClosed &&
    css`
      left: 400px;
    `}
`;

export const ModalContainer = styled.div`
  @media (max-width: 768px) {
    overflow-y: auto;
    transition: 0.3s;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #bbb;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  max-width: 310px;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

export const Category = styled.p`
  margin-bottom: 13px;
`;

export const Address = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Distance = styled.p`
  margin-right: 10px;
`;

export const RoadAddress = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;

  img {
    width: 35px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Division = styled.p`
  margin-right: 10px;
`;

export const PhoneNumber = styled.p`
  color: black;
`;

export const ShareBtn = styled.button`
  padding: 7px;
  border-radius: 6px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const NoList = styled.p`
  font-size: 18px;
  padding: 20px;
`;

export const Pages = styled.div`
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
`;

export const PageBtn = styled.button`
  margin: 0 10px;
  color: black;
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 0;
  border-radius: 10px 10px 0 0;
`;

export const ModalBtn = styled.button`
  display: block;
  margin: 15px auto 10px;
  width: 50px;
  height: 5px;
  border-radius: 5px;
`;

// 현재 내 위치로 돌아가는 버튼
export const GoBackButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 55px;
  height: 55px;
  background: no-repeat white
    url('https://cdn-icons-png.flaticon.com/128/406/406217.png') center/contain;
  background-size: 70%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    right: 10px;
    bottom: 40px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
`;

// 접속위치 텍스트
export const GoBackTxt = styled.span`
  position: absolute;
  bottom: 30px;
  right: 80px;
  z-index: 10;
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 70px;
    height: 25px;
    line-height: 25px;
    right: 60px;
    bottom: 50px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
`;

// 현 지도에서 검색 버튼
export const ReSearch = styled.button`
  position: absolute;
  color: white;
  font-size: 14px;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 10;
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 30px;
  background: #575757;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

// 현 지도에서 검색 이미지
export const ReSearchImg = styled.img`
  width: 25px;
  height: 25px;

  @media (max-width: 768px) {
    font-size: 13px;
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
`;
