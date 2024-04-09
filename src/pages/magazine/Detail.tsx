import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailContent from '../../components/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';

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
      <div className="flex_default detail_top">
        <ul className="location">
          <li>
            <Link to="/magazines">매거진</Link>
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

export default MagazineDetail;
