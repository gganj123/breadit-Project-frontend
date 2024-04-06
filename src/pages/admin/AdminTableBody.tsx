import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';

const AdminTableBody: React.FC<{
  tbodyContent: { nickname: string; email?: string; title?: string }[];
}> = ({ tbodyContent }) => {
  return (
    <tbody>
      {tbodyContent.map((content, index) => {
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
  );
};

export default AdminTableBody;
