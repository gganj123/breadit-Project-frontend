import { useLocation } from 'react-router-dom';
import ShareIcon from '/share_icon.svg';
export const COPY_URL: string = `${import.meta.env.VITE_COPY_URL}`;

const CopyUrlButton = () => {
  const location = useLocation();

  const copyurl = () => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(`${COPY_URL}${location.pathname}`);
      alert('URL이 복사되었습니다.');
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = `${COPY_URL}${location.pathname}`;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);

      document.execCommand('copy');

      textArea.setSelectionRange(0, 0);
      document.body.removeChild(textArea);
      alert('URL이 복사되었습니다.');
    }
  };

  return (
    <button onClick={copyurl}>
      <img src={ShareIcon} alt="링크 공유하기" />
    </button>
  );
};

export default CopyUrlButton;
