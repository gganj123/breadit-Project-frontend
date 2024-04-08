import ButtonDefault from './atoms/buttons/ButtonDefault';

type DetailProps = {
  data: {
    nickname: string;
    profile: string;
    createdAt: string;
    title: string;
    content: string;
  };
};

const DetailContent = ({ data }: DetailProps) => {
  const { nickname, profile, createdAt, title, content } = data;
  return (
    <>
      <div className="detail_top">
        <div className="user_cont">
          <div className="user_img">
            <img src={profile} />
          </div>
          <div className="user_info">
            <h3 className="detail_title">{title}</h3>
            <p>
              <span className="username">{nickname}</span>
              <span className="date">{createdAt}</span>
            </p>
          </div>
        </div>
        <ButtonDefault text={'Edit'} />
      </div>
      <div className="detail_content">{content}</div>
    </>
  );
};

export default DetailContent;
