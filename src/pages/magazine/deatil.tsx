import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailContent from '../../components/DetailContent';

const MagazineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [detailData, setDetailData] = useState({
    nickname: '',
    profile: '',
    createdAt: '',
    title: '',
    content: '',
  });

  let apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  useEffect(() => {
    axios
      .get(`${apiUrl}/magazines/${id}`)
      .then((response) => {
        setDetailData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(detailData);
  return (
    <section className="detail">
      <DetailContent data={detailData} />
    </section>
  );
};

export default MagazineDetail;
