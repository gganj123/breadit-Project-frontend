import { FC, ReactNode, MouseEvent } from 'react';
import { StyledButton } from './Button.styles';

type ButtonProps = {
  text: string;
  backColor: string;
  textColor: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
  icon?: ReactNode;
  width?: string;
  height?: string;
  disabled?: boolean;
  borderRadius?: string;
};

const Button: FC<ButtonProps> = ({
  text,
  backColor,
  textColor,
  onClick,
  type,
  icon,
  width,
  height,
  disabled,
  borderRadius,
}) => {
  return (
    <StyledButton
      backColor={backColor}
      textColor={textColor}
      onClick={onClick}
      type={type}
      hasIcon={!!icon}
      width={width}
      height={height}
      disabled={disabled}
      borderRadius={borderRadius}
    >
      {icon && <span className="icon-container">{icon}</span>}
      {text}
    </StyledButton>
  );
};

export default Button;
