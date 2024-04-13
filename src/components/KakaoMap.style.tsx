import styled from 'styled-components';

export const MapContainer = styled.div`
  position: absolute;
  background: #000;
  width: 40rem;
  height: 100%;
  top: 7.4rem;
  left: 0;

  #pagination {
    text-align: center;
    font-size: 25px;
    a {
      cursor: pointer;
      color: #fff;
      + a {
        margin-left: 15px;
      }
    }
  }
`;

export const MapWrapper = styled.div<{ $expanded: boolean }>`
  width: ${(props) => (props.$expanded ? '100%' : 'calc(100% - 40rem)')};
  margin-left: auto;
  height: 100vh;
`;

export const MapList = styled.ul`
  width: 90%;
  margin: 20px auto 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .img {
    width: 50px;
    height: 50px;
    background: gray;
    border-radius: 50%;
    margin-right: 26px;
  }
  li {
    width: 100%;
  }
`;

export const MapListItem = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 16px;
  border-radius: 20px;
  p {
    margin-top: 10px;
  }
  .title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #000;
    margin-top: 0;
    margin-bottom: 10px;
  }
  span {
    margin: 10px 0;
    font-size: 1rem;
    color: dimgray;
  }
`;

export const MapSearchBox = styled.div`
  position: absolute;
  top: 10rem;
  left: 60%;
  transform: translateX(-50%);
  z-index: 10;
  background: #fff;
  width: 50%;
  height: 35px;
  display: flex;

  input {
    width: 90%;
    padding: 10px;
    cursor: default;
  }
  button {
    width: 10%;
    background: blue;
    color: #fff;
  }
`;

export const FindNearMap = styled.div`
  padding: 10px 20px;
  background: #656565;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
`;

export const FindNearBakery = styled.div`
  padding: 10px 20px;
  background: #eee;
  width: 130px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  background: #ffcb46;
  color: #fff;
`;

export const SlidePin = styled.div<{ $expanded: boolean }>`
  width: 10px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.$expanded ? '0' : '40rem')};
  transform: translateY(-50%);
  background: red;
  z-index: 100;
  box-shadow: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

export const MapDetailStyle = styled.section`
  width: 40rem;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 12;

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
