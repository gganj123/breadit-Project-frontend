import { useState } from 'react';
import { EditorComponent } from '../../components/QuillEditor';
import SelectBox from '../../components/atoms/selectbox/Selectbox';

export default function EditPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const CATEGORY_OPTIONS = [
    { value: 'bakery', name: '베이커리 소개' },
    { value: 'recipe', name: '레시피 소개' },
  ];

  // 카테고리 선택 핸들러
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <div className="community_container">
        <div className="community">
          <h2 className="oleo-script-bold community_title">Community</h2>
          <SelectBox
            options={CATEGORY_OPTIONS}
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="custom-select-box"
          />
          <EditorComponent selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  );
}
