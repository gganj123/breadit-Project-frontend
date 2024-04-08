import styled from 'styled-components';

type StyledButtonProps = {
  backColor: string;
  textColor: string;
  hasIcon: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
  borderRadius?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { backColor: string }) => props.backColor};
  color: ${(props: { textColor: string }) => props.textColor};
  border: ${(props: { hasIcon: boolean }) =>
    props.hasIcon ? 'none' : '1px solid'};
  border-radius: ${(props) => props.borderRadius || '8px'};
  padding: 10px;
  margin: 5px 0;
  width: ${(props) => props.width || '460px'};
  height: ${(props) => props.height || '55px'};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
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
