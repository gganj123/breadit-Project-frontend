/**
 * 회원가입 단계 표시기
 */
import { FC } from 'react';
import styled from 'styled-components';

type StepProps = {
  number: number;
  label: string;
  isActive: boolean;
};

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const StepNumber = styled.div<Pick<StepProps, 'isActive'>>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? '#ffc14b' : '#D9D9D9'}; // isActive에 따라 배경색 변경
  color: #575757;
  border: 1px solid #575757;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 1;
`;

const StepLabel = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;

const Connector = styled.div`
  position: absolute;
  left: 5%;
  top: 15px;
  width: calc(90% - 10px);
  height: 1px;
  background-color: #ccc;
  z-index: 0;
`;

const StepIndicator: FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <StepsContainer>
      <Connector />
      {['약관동의', '정보입력', '가입완료'].map((label, index) => {
        const stepNumber = index + 1;
        // 현재 단계와 같거나 이전 단계인지 확인하여 활성화 여부 결정
        const isActive = stepNumber <= currentStep;

        return (
          <StepContainer key={label}>
            <StepNumber isActive={isActive}>{stepNumber}</StepNumber>
            <StepLabel>{label}</StepLabel>
          </StepContainer>
        );
      })}
    </StepsContainer>
  );
};

export default StepIndicator;
