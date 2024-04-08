import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import BigCard from '../../components/BigCard';

import './admin.css';

const AdminMagazine = () => {
  const [magazineList, setMagazineList] = useState([]);

  let apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  useEffect(() => {
    axios
      .get(`${apiUrl}/magazines`)
      .then((response) => {
        setMagazineList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="admin_area">
        <AdminCategory />
        <section className="admin_cont">
          <AdminGuide />
          <div className="main_title flex_default">
            <h4>매거진 관리</h4>
            <ButtonDeafult text={'매거진 발행'} />
          </div>
          <div className="magazine_card_list">
            {magazineList.map((magazine, index) => {
              return <BigCard data={magazine} key={index} />;
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default AdminMagazine;
