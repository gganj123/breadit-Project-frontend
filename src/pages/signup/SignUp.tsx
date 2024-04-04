import { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { RiErrorWarningFill } from 'react-icons/ri';
import StepIndicator from './StepIndicator';
import Button from '../../components/atoms/buttons/Button';
import Checkbox from '../../components/atoms/checkbox/Checkbox';

type AgreementProps = {
  title: string;
  content: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

const PageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
`;

const AgreementTitle = styled.div`
  font-size: 16px; 
  font-weight: bold;
  color: #333; 
`;

const AgreementContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ContentContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center; 
  cursor: pointer;
`;

const WarningMessage = styled.div`
  color: #e44444;
  font-size: 14px;
  text-align: left;
  margin-top: 5px;
`;

const Agreement: FC<AgreementProps> = ({
  title,
  content,
  checked,
  onCheckedChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AgreementContainer>
      <TitleContainer onClick={() => setIsOpen(!isOpen)}>
        <CheckboxLabel>
          <Checkbox checked={checked} onChange={onCheckedChange} />
          <AgreementTitle>{title}</AgreementTitle>
        </CheckboxLabel>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </TitleContainer>
      <ContentContainer isOpen={isOpen}>{content}</ContentContainer>
    </AgreementContainer>
  );
};

const SignUp: FC = () => {
  const navigate = useNavigate();
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // 필수 항목 체크박스가 모두 선택되었는지 여부
  const areRequiredChecked = termsChecked && privacyChecked;
  const handlePrevClick = () => {
    navigate('/login');
  };
  const handleNextClick = () => {
    if (!areRequiredChecked) {
      // 필수 항목이 모두 체크되지 않았으면 경고 메시지 표시
      setShowWarning(true);
    } else {
      // 필수 항목이 모두 체크되었으면 다음 페이지로 이동
      navigate('/');
      setShowWarning(false);
    }
  };
  const handleAllCheckedChange = (checked: boolean) => {
    setAllChecked(checked);
    setTermsChecked(checked);
    setPrivacyChecked(checked);
    setShowWarning(false); // 경고 메시지 숨김
  };

  const handleIndividualCheckedChange = (
    checked: boolean,
    type: 'terms' | 'privacy'
  ) => {
    type === 'terms' ? setTermsChecked(checked) : setPrivacyChecked(checked);
    setShowWarning(false); // 경고 메시지 숨김
  };

  return (
    <PageContainer>
      <Title>회원가입</Title>
      <StepIndicator currentStep={1} />
      <Agreement
        title="전체 동의하기"
        content="전체 약관 내용"
        checked={allChecked}
        onCheckedChange={handleAllCheckedChange}
      />
      <Agreement
        title="[필수] 이용약관"
        content="이용약관 내용"
        checked={termsChecked}
        onCheckedChange={(checked) =>
          handleIndividualCheckedChange(checked, 'terms')
        }
      />
      <Agreement
        title="[필수] 개인정보처리방침"
        content="개인정보처리방침 내용"
        checked={privacyChecked}
        onCheckedChange={(checked) =>
          handleIndividualCheckedChange(checked, 'privacy')
        }
      />
      {showWarning && (
        <WarningMessage>
          <RiErrorWarningFill /> 필수 항목에 모두 동의해주세요.
        </WarningMessage>
      )}
      <ButtonsContainer>
        <Button
          type="button"
          text="이전"
          backColor="#575757"
          textColor="#FFFFFF"
          onClick={handlePrevClick}
        />
        <Button
          type="button"
          text="다음"
          backColor="#575757"
          textColor="#FFFFFF"
          onClick={handleNextClick}
        />
      </ButtonsContainer>
    </PageContainer>
  );
};

export default SignUp;
