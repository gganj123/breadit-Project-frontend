import { EditorComponent } from '../../components/QuillEditor';
import styled from 'styled-components';

const WriteSectionStyled = styled.section`
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
      <WriteSectionStyled>
        <h2 className="oleo-script-bold">Magazine</h2>
        <EditorComponent selectedCategory={'megazine'} />
      </WriteSectionStyled>
    </>
  );
};

export default MagazineEdit;
