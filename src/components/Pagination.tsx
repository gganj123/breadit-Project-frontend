import styled from 'styled-components';

interface PageNumberProps {
  active?: boolean; // active 속성을 optional로 설정
}

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <PaginationWrapper>
      {pageNumbers.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          active={pageNumber === currentPage} // active 속성을 사용
        >
          {pageNumber}
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageNumber = styled.button<PageNumberProps>`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 5px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#FFCB46' : '#333')}; // active 속성 사용
  font-weight: ${(props) =>
    props.active ? 'bold' : 'normal'}; // active 속성 사용
`;

export default Pagination;
