import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';

type AdminTableProps = {
  theadTitle: string[];
  data: { nickname: string; email?: string; title?: string }[];
};

const AdminTable = ({ theadTitle, data }: AdminTableProps) => {
  return (
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
                  <input type="checkbox" className="checkbox" value={index} />
                  {index + 1}
                </td>
                <td>{content.nickname}</td>
                <td>
                  {content.email}
                  {content.title}
                </td>
                <td>
                  <ButtonDeafult text={'삭제'} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
