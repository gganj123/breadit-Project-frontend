import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailContent from '../../components/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [detailData, setDetailData] = useState({
    nickname: '',
    profile: '',
    createdAt: '',
    title: '',
    content: '',
  });

  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setDetailData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(detailData);
  return (
    <section className="detail">
      <div className="flex_default detail_top">
        <ul className="location">
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
        </ul>
        <div className="buttons">
          <ToggleSaveButton />
          <CopyUrlButton />
        </div>
      </div>
      <DetailContent data={detailData} />
    </section>
  );
};

export default DetailPage;
