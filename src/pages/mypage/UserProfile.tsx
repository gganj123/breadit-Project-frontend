import styled from 'styled-components';
import Button from '../../components/atoms/buttons/Button';
type UserProfileProps = {
  onLogout: () => void;
  onDeleteAccount: () => void;
  onEditProfile: () => void;
  email: string;
  nickname: string;
};

const Nickname = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #222222;
  margin-bottom: 30px;
`;

const Email = styled.div`
  font-size: 16px;
  text-align: center;
  color: #777777;
  margin-bottom: 20px;
`;

const Line = styled.div`
  border-left: 1px solid #ccc;
  height: 12px;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const ActionsButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #575757;
  font-size: 11px;
`;

const UserProfile: React.FC<UserProfileProps> = ({
  onLogout,
  onDeleteAccount,
  onEditProfile,
  email,
  nickname,
}) => {
  return (
    <div>
      <Nickname>{nickname}</Nickname>
      <Email>{email}</Email>
      <Button
        type="button"
        text="정보 수정"
        backColor="#575757"
        textColor="#FFFFFF"
        width="140px"
        height="40px"
        borderRadius="0px"
        onClick={onEditProfile}
      />
      <ActionsContainer>
        <ActionsButton onClick={onLogout}>로그아웃</ActionsButton>
        <Line />
        <ActionsButton onClick={onDeleteAccount}>회원탈퇴</ActionsButton>
      </ActionsContainer>
    </div>
  );
};
export default UserProfile;
