import AdminTableBody from './AdminTableBody';

type AdminTableProps = {
  theadTitle: string[];
  tbodyContent: { nickname: string; email?: string; title?: string }[];
};

const AdminTable: React.FC<AdminTableProps> = ({
  theadTitle,
  tbodyContent,
}) => {
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
        <AdminTableBody tbodyContent={tbodyContent} />
      </table>
    </div>
  );
};

export default AdminTable;
