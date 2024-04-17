import styled from 'styled-components';

export const BigCardStyled = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0px 3rem rgb(242 242 242);
  margin-bottom: 2rem;
  position: relative;

  .checkbox {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .user_info {
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: 1.4rem 2.6rem;
  }

  .user_info {
    font-weight: 500;
  }

  .profile {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: #eee;
  }

  .profile img {
    width: 100%;
  }

  .img_box {
    height: 30rem;
    overflow: hidden;
  }

  button {
    cursor: default;
  }

  button img {
    width: 2rem;
  }
`;

export const ContentBoxStyled = styled.div`
  padding: 2.6rem;
  background-color: #fff;

  h5 {
    font-size: 2.2rem;
    margin-bottom: 1.4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1.2;
  }

  .text {
    font-size: 1.8rem;
    color: #666;
    margin-bottom: 2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1.5;
    word-break: keep-all;
  }

  .text * {
    font-size: 1.8rem;
    color: #666 !important;
    font-weight: 400 !important;
    line-height: 1.5;
    font-style: normal;
    text-decoration: none;
  }
`;
