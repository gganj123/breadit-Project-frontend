import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // useParams 훅을 사용하여 id 매개변수를 가져옴

  // id에 따라 상세 정보를 가져오는 로직을 구현하시면 됩니다.

  return (
    <>
      <p>Detail for item with id: {id}</p>
    </>
  );
};

export default DetailPage;
