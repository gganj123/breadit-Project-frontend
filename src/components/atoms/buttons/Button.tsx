import React, { FC } from 'react';

type ButtonProps = {
  text: string;
  color: string;
  onClick?: () => void; // 클릭 이벤트 핸들러 함수는 선택적
  type: 'button' | 'submit'; // 버튼 타입
};

const Button: FC<ButtonProps> = ({ text, color, onClick, type }) => {
  const style = {
    backgroundColor: color,
    color: '#575757',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <button type={type} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
