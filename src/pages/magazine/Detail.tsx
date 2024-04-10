import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DetailContent from '../../components/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';
import {
  useGetMagazineByIdApi,
  useDeleteMagazineByIdApi,
} from '../../hooks/useMagazineApi';

const MagazineDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const useGetMagazineQuery = useGetMagazineByIdApi(id ?? '');
  const [detailData, setDetailData] = useState({
    _id: '',
    nickname: '',
    profile: '',
    createdAt: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    useGetMagazineQuery.refetch();
    if (useGetMagazineQuery.data) {
      setDetailData(useGetMagazineQuery.data);
    }
  }, [useGetMagazineQuery.data]);

  const { mutate } = useDeleteMagazineByIdApi();

  const deleteMagazineIdFind = (id: string) => {
    mutate(id);
  };

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
      <DetailContent
        data={detailData}
        deleteEvent={(id: string) => deleteMagazineIdFind(id)}
      />
    </section>
  );
};

export default MagazineDetail;
