import { useLocation } from 'react-router-dom';
import ShareIcon from '/share_icon.svg';
export const COPY_URL: string = `${import.meta.env.VITE_COPY_URL}`;

const CopyUrlButton = () => {
  const location = useLocation();

  const copyurl = () => {
    navigator.clipboard.writeText(`${COPY_URL}${location.pathname}`);
    alert('URL이 복사되었습니다.');
  };

  return (
    <button onClick={copyurl}>
      <img src={ShareIcon} alt="링크 공유하기" />
    </button>
  );
};

export default CopyUrlButton;
