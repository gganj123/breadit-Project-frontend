import { Link } from 'react-router-dom';
import { EditorComponent } from '../../components/QuillEditor';

export default function EditPage() {
  return (
    <>
      <div className="community_container">
        <div className="community">
          <h2 className="oleo-script-bold community_title">Community</h2>
          <div className="edit_title">
            <input type="text" placeholder="제목을 입력해주세요." />
          </div>
          <EditorComponent />
          <div className="edit_context">
            <Link to="/community/nearby">작성하기</Link>
            <Link to="/community/nearby">취소</Link>
          </div>
        </div>
      </div>
    </>
  );
}
