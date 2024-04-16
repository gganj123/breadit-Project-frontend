import { useState } from 'react';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';

export type AdminTableProps = {
  pageTitle: string;
  theadTitle: string[];
  data: {
    _id: string;
    nickname: string;
    email?: string;
    title?: string;
  }[];
  deleteEvent: (id: string) => void;
  deleteList: (id: string[]) => void;
};

const AdminTable = ({
  pageTitle,
  theadTitle,
  data,
  deleteEvent,
  deleteList,
}: AdminTableProps) => {
  const [checkList, setCheckList] = useState<string[]>([]);

  const handleDeleteEventClick = (id: string) => {
    if (confirm('삭제하시겠습니까?')) {
      deleteEvent(id);
    }
  };

  const handleCheckedList = (id: string, checked: boolean) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter((checkedId) => checkedId !== id));
    }
  };

  const handleDeleteCheckList = (checkList: string[]) => {
    if (checkList.length > 0) {
      if (confirm('삭제하시겠습니까?')) {
        deleteList(checkList);
        setCheckList([]);
      }
    } else {
      alert('선택된 항목이 없습니다.');
    }
  };

  return (
    <section className="admin_cont">
      <AdminGuide />
      <div className="main_title flex_default">
        <h4>{pageTitle}</h4>
        <ButtonDeafult
          text={'선택 삭제'}
          clickevent={() => handleDeleteCheckList(checkList)}
        />
      </div>
      <div className="admin_table">
        <table>
          <thead>
            <tr>
              {theadTitle.map((title, index) => {
                return (
                  <th
                    key={index}
                    style={index === 0 || index === 3 ? { width: 100 } : {}}
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {data.map((content, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      value={content._id}
                      onChange={(e) => {
                        handleCheckedList(content._id, e.target.checked);
                      }}
                    />
                    {index + 1}
                  </td>
                  <td>{content.nickname}</td>
                  <td>
                    {content.email}
                    {content.title}
                  </td>
                  <td>
                    <ButtonDeafult
                      text={'삭제'}
                      clickevent={() => handleDeleteEventClick(content._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminTable;
