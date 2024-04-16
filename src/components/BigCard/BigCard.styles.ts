import styled from 'styled-components';

export const BigCardStyled = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0px 3rem rgb(242 242 242);
  margin-bottom: 2rem;
  max-width: 53.6rem;
  position: relative;

  .checkbox {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

export const ContentBoxStyled = styled.div`
  padding: 3rem;
  background-color: #fff;

  h5 {
    font-size: 2.2rem;
    margin-bottom: 1.4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .text {
    font-size: 1.8rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1.5;
    word-break: keep-all;
  }

  .text * {
    line-height: 1.5;
  }
`;
