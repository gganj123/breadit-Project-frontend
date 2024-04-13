import { EditorComponent } from '../../components/QuillEditor';
import styled from 'styled-components';

const WriteSectionStyle = styled.section`
  max-width: 129rem;
  margin: 0 auto;
  padding: 8rem 2rem;

  h2 {
    padding-bottom: 3rem;
  }
`;

const MagazineEdit = () => {
  return (
    <>
      <WriteSectionStyle>
        <h2 className="oleo-script-bold">Magazine</h2>
        <EditorComponent />
      </WriteSectionStyle>
    </>
  );
};

export default MagazineEdit;
