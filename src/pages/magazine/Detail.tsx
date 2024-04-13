import { useEffect } from 'react';
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
  const getMagazineQuery = useGetMagazineByIdApi(id || '');

  useEffect(() => {
    getMagazineQuery.refetch();
  }, [getMagazineQuery.data]);

  const detailData = getMagazineQuery.data || {
    _id: '',
    nickname: '',
    profile: '',
    createdAt: '',
    title: '',
    content: '',
  };

  const { mutate: deleteMutate } = useDeleteMagazineByIdApi();

  const deleteMagazineId = (id: string) => {
    deleteMutate(id);
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
        deleteEvent={(id: string) => deleteMagazineId(id)}
      />
    </section>
  );
};

export default MagazineDetail;
