import styled from 'styled-components';

export const CommentsContStyled = styled.section`
  .comment_input {
    margin-top: 3rem;
  }

  .my_info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  textarea {
    width: 100%;
    height: 13rem;
    font-size: 1.6rem;
    padding: 1.6rem;
    border: solid 1px #ddd;
  }

  .buttons {
    margin-top: 2rem;
    justify-content: flex-end;
  }

  .comment_list {
    margin-top: 2rem;
    border-top: solid 1px #ddd;
  }

  .no_content {
    text-align: center;
    line-height: 20rem;
    border-bottom: solid 1px #ddd;
    color: #888;
  }
`;

export const CommentItemStyled = styled.div`
  padding: 2.4rem 0;
  border-bottom: solid 1px #ddd;

  .user_info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.4rem;
  }

  .user_name {
    display: flex;
  }

  .user_name .nickname {
    font-size: 1.6rem;
  }

  .user_name .date {
    color: #888;
    padding-left: 1.4rem;
    margin-left: 1.4rem;
    border-left: solid 1px #b6b6b6;
  }

  .comment {
    display: flex;
    justify-content: space-between;
  }

  .comment textarea {
    max-width: 80rem;
  }

  .comment_content {
    max-width: 60rem;
    line-height: 1.4;
  }
`;
