import { useRef, useState, useMemo } from 'react';
import AWS from 'aws-sdk'; // AWS SDK를 불러옵니다.
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

const EditContextBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;

  button,
  a {
    display: block;
    text-align: center;
    width: 100px;
    padding: 12px 0;
    font-size: 1.25rem;
    background-color: #6c757d;
    color: #fff;
  }
`;

const EditTitle = styled.input`
  width: 100%;
  height: 4rem;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #dedede;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const EditorComponent: React.FC<{ selectedCategory?: string }> = ({
  selectedCategory,
}) => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // -1을 전달하여 이전 페이지로 이동
  };

  // AWS S3 설정
  const s3 = new AWS.S3({
    accessKeyId: `${import.meta.env.VITE_ACCESS_KEY}`,
    secretAccessKey: `${import.meta.env.VITE_SECRET_ACCESS_KEY}`,
    region: `${import.meta.env.VITE_REGION}`,
  });

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        const promises = [];
        for (let i = 0; i < file.length; i++) {
          const params = {
            Bucket: 'elice-breadit-project',
            Key: `images/${file[i].name}`,
            Body: file[i],
            ACL: 'public-read',
          };

          promises.push(
            new Promise((resolve, reject) => {
              s3.upload(params, (err, data) => {
                if (err) {
                  console.error(err);
                  reject(err);
                } else {
                  resolve(data.Location);
                }
              });
            })
          );
        }

        Promise.all(promises)
          .then((urls) => {
            setImages((prevImages) => [...prevImages, ...urls]);

            const range = QuillRef.current?.getEditor().getSelection()?.index;
            if (range !== null && range !== undefined) {
              const quill = QuillRef.current?.getEditor();
              urls.forEach((url) => {
                quill?.clipboard.dangerouslyPasteHTML(
                  range,
                  `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
                );
              });
            }
          })
          .catch((error) => {
            console.error('Error uploading images:', error);
          });
      }
    };
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
    'float',
    'height',
    'width',
  ];
  // quill에서 사용할 모듈을 설정하는 코드 입니다.
  // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
  const modules = useMemo(
    () => ({
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['image', 'video'],
        ],
        // 이미지 크기 조절
        ImageResize: {
          modules: ['Resize'],
        },
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const handleSave = async () => {
    let url;
    if (selectedCategory === 'recipe') {
      url = 'http://localhost:5000/api/recipes/';
    } else {
      url = 'http://localhost:5000/api/posts/';
    }

    try {
      const response = await axios.post(url, {
        user_id: 'user77777',
        nickname: 'nickname',
        profile: 'user',
        title: title,
        content: contents,
        images: images,
        bread_id: 'category4555556',
      });
      toast('글 작성이 완료되었습니다!');
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

  return (
    <>
      <EditTitle
        className="edit_title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요."
      />
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        formats={formats}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
      <EditContextBtn>
        <button onClick={handleSave}>작성하기</button>
        <button onClick={goBack}>취소</button>
      </EditContextBtn>
      <ToastContainer />
    </>
  );
};
