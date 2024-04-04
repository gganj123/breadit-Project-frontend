/**
 * 회원가입 단계 표시기
 */

import { FC } from 'react';
import styled from 'styled-components';

type StepProps = {
  number: number;
  label: string;
  isCompleted: boolean;
  isActive: boolean;
};

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const StepNumber = styled.div<Pick<StepProps, 'isActive' | 'isCompleted'>>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? '#ffc14b' : props.isCompleted ? '#ccc' : '#D9D9D9'};
  color: #fff;
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
  width: calc(90% - 10px); // 좌우 스텝 컨테이너 패딩을 제외한 너비
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
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <StepContainer key={label}>
            <StepNumber isActive={isActive} isCompleted={isCompleted}>
              {stepNumber}
            </StepNumber>
            <StepLabel>{label}</StepLabel>
          </StepContainer>
        );
      })}
    </StepsContainer>
  );
};

export default StepIndicator;
