/**
 * 회원가입 동의 페이지 ( 첫번째 )
 */
import { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/atoms/buttons/Button';
import Checkbox from '../../components/atoms/checkbox/Checkbox';
import StepIndicator from './StepIndicator';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { RiErrorWarningFill } from 'react-icons/ri';
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
  margin-left: 10px;
`;

const AgreementContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;
const ContentContainer = styled.div<{ open: boolean }>`
  padding-top: 10px;
  font-size: 13px;
  line-height: 1.6;
  max-height: ${({ open }) => (open ? '1000px' : '0')};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  transition: max-height 0.3s ease-in-out;
  white-space: pre-line;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;
const Line = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
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
        {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </TitleContainer>
      <ContentContainer open={isOpen}>
        <Line></Line>
        {content}
      </ContentContainer>
    </AgreementContainer>
  );
};

const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // 필수 항목 체크박스가 모두 선택되었는지 여부
  const requiredChecked = termsChecked && privacyChecked;
  const handlePrevClick = () => {
    navigate('/login');
  };
  const handleNextClick = () => {
    if (!requiredChecked) {
      // 필수 항목이 모두 체크되지 않았으면 경고 메시지 표시
      setShowWarning(true);
    } else {
      // 필수 항목이 모두 체크되었으면 다음 페이지로 이동
      navigate('/signup/info');
      setShowWarning(false);
    }
  };
  const handleAllCheckedChange = (checked: boolean) => {
    setAllChecked(checked);
    setTermsChecked(checked);
    setPrivacyChecked(checked);
    setShowWarning(false);
  };

  const handleIndividualCheckedChange = (
    checked: boolean,
    type: 'terms' | 'privacy'
  ) => {
    type === 'terms' ? setTermsChecked(checked) : setPrivacyChecked(checked);
    setShowWarning(false);
  };

  return (
    <PageContainer>
      <Title>회원가입</Title>
      <StepIndicator currentStep={1} />
      <Agreement
        title="전체 동의하기"
        content="전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며, 개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다."
        checked={allChecked}
        onCheckedChange={handleAllCheckedChange}
      />
      <Agreement
        title="[필수] 이용약관"
        content="[ Breadit 이용 약관 ] 
        제1장 총칙    
        제 1 조 (목적)
        이 약관은 Breadit 주식회사(이하 “회사”)가 운영하는 사이버몰에서 제공하는 서비스와 이를 이용하는 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.   
        제 2 조 (용어의 정의)
        이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 그리고 여기에서 정의되지 않은 이 약관상의 용어의 의미는 일반적인 거래관행에 따릅니다."
        checked={termsChecked}
        onCheckedChange={(checked) =>
          handleIndividualCheckedChange(checked, 'terms')
        }
      />
      <Agreement
        title="[필수] 개인정보처리방침"
        content="회사는 회원가입, 민원 등 고객상담 처리, 본인확인(14세 미만 아동 확인) 등 
        의사소통을 위한 정보 활용 및 이벤트 등과 같은 마케팅용도 활용, 회원의 
        서비스 이용에 대한 통계, 이용자들의 개인정보를 통한 서비스 개발을 위해 
        아래와 같은 개인정보를 수집하고 있습니다.
        
        1. - 목적 : 이용자 식별 및 본인여부 확인-
        "
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
          backcolor="#575757"
          textcolor="#FFFFFF"
          onClick={handlePrevClick}
        />
        <Button
          type="button"
          text="다음"
          backcolor="#575757"
          textcolor="#FFFFFF"
          onClick={handleNextClick}
        />
      </ButtonsContainer>
    </PageContainer>
  );
};

export default SignUpPage;
