import { EditorComponent } from '../../components/QuillEditor';

export default function EditPage() {
  return (
    <>
      <div className="community_container">
        <div className="community">
          <h2 className="oleo-script-bold community_title">Magazine</h2>
          <EditorComponent />
        </div>
      </div>
    </>
  );
}
