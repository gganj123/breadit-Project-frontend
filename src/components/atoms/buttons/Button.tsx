import { FC, ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  text: string;
  backColor: string;
  textColor: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
  icon?: ReactNode; // 아이콘은 ReactNode 타입, 선택적
};

type StyledButtonProps = {
  backColor: string;
  textColor: string;
  hasIcon: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { backColor: string }) => props.backColor};
  color: ${(props: { textColor: string }) => props.textColor};
  border: ${(props: { hasIcon: boolean }) =>
    props.hasIcon ? 'none' : '1px solid'};
  border-radius: 8px;
  padding: 10px;
  margin: 5px 0;
  width: 460px;
  height: 55px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden; // 아이콘의 절대 위치가 경계 밖으로 가지 않도록 설정

  .icon-container {
    font-size: 20px;
    position: absolute;
    left: 20px;
    display: flex;
    align-items: center;
  }
`;

const Button: FC<ButtonProps> = ({
  text,
  backColor,
  textColor,
  onClick,
  type,
  icon,
}) => {
  return (
    <StyledButton
      backColor={backColor}
      textColor={textColor}
      onClick={onClick}
      type={type}
      hasIcon={!!icon}
    >
      {icon && <span className="icon-container">{icon}</span>}
      {text}
    </StyledButton>
  );
};

export default Button;
