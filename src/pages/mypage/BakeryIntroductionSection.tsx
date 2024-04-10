import styled from 'styled-components';

const ContextWrap = styled.div`
  width: 100%;
  padding: 0 100px 100px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export default function BakeryIntroductionSection() {
  // 베이커리 소개에 관련된 데이터 로딩 및 처리

  return (
    <>
      <ContextWrap>
        <h2 className="oleo-script-bold community_title">
          우리 동네 베이커리를 소개합니다!
        </h2>
      </ContextWrap>
    </>
  );
}
