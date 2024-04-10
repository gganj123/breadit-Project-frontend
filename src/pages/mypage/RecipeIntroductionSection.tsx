import styled from 'styled-components';

const ContextWrap = styled.div`
  width: 100%;
  padding: 0 100px 100px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export default function RecipeIntroductionSection() {
  // 레시피 소개에 관련된 데이터 로딩 및 처리

  return (
    <>
      <ContextWrap>
        <h2 className="oleo-script-bold community_title">
          나만의 레시피를 공유해요
        </h2>
      </ContextWrap>
    </>
  );
}
