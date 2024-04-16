import { useRef, useState, useMemo, useEffect } from 'react';
import AWS from 'aws-sdk'; // AWS SDK를 불러옵니다.
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

export const EditorComponent: React.FC<{
  selectedCategory?: string;
  postData: any;
}> = ({ selectedCategory, postData }) => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState(postData?.content || '');
  const [title, setTitle] = useState(postData?.title || '');
  const [images, setImages] = useState(postData?.images || []);
  const [thumbnail, setThumbnail] = useState(postData?.thumbnail || '');

  const navigate = useNavigate();
  const isEditMode = !!postData;
  const saveButtonText = isEditMode ? '수정하기' : '작성하기';

  const goBack = () => {
    navigate(-1);
  };

  const s3 = new AWS.S3({
    accessKeyId: `${import.meta.env.VITE_ACCESS_KEY}`,
    secretAccessKey: `${import.meta.env.VITE_SECRET_ACCESS_KEY}`,
    region: `${import.meta.env.VITE_REGION}`,
  });

  const handleImageUpload = async (file: File) => {
    const params = {
      Bucket: 'elice-breadit-project',
      Key: `images/${file.name}`,
      Body: file,
      ACL: 'public-read',
    };

    try {
      const data = await s3.upload(params).promise();
      return data.Location;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) {
      const imageUrl = await handleImageUpload(file);
      if (imageUrl) {
        setThumbnail((prevImages) => [...prevImages, imageUrl]);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // thumbnail 상태를 사용하도록 수정
  const thumbnailPreview = thumbnail && (
    <div className="thumb_img">
      <h1>썸네일 이미지</h1>
      <img
        src={thumbnail}
        alt="썸네일 이미지"
        style={{
          maxWidth: '100px',
          maxHeight: '100px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      />
    </div>
  );

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
            new Promise<string>((resolve, reject) => {
              s3.upload(
                params,
                (err: Error | null, data: AWS.S3.ManagedUpload.SendData) => {
                  if (err) {
                    console.error(err);
                    reject(err);
                  } else {
                    resolve(data.Location);
                  }
                }
              );
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
                const imageUrlString = JSON.stringify(url);
                quill?.clipboard.dangerouslyPasteHTML(
                  range,
                  `<img src=${imageUrlString.slice(1, -1)} alt="이미지 태그가 삽입됩니다." />`
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

  useEffect(() => {
    if (postData) {
      setContents(postData.content || '');
      setTitle(postData.title || '');
      setImages(postData.images || []);
      setThumbnail(postData.thumbnail || '');
    }
  }, [postData]);

  const handleSave = async () => {
    if (!title) {
      console.error('제목을 입력하세요.');
      return;
    }

    const imagesJSON = JSON.stringify(images);

    let url;
    if (postData) {
      url = `http://localhost:5000/api/posts/${postData._id}`;
      try {
        const response = await axios.put(url, {
          title: title,
          content: contents,
          images: imagesJSON,
        });
        toast(`${response.data.nickname}님 글 수정이 완료되었습니다!`);
      } catch (error) {
        console.error('Error updating post:', error);
      }
    } else {
      if (selectedCategory === 'megazine') {
        url = 'http://localhost:5000/api/magazines/';
      } else if (
        selectedCategory === 'bakery' ||
        selectedCategory === 'default'
      ) {
        url = 'http://localhost:5000/api/posts/';
      } else if (selectedCategory === 'recipe') {
        url = 'http://localhost:5000/api/recipes/';
      } else {
        console.error('Invalid category:', selectedCategory);
        return;
      }

      try {
        const thumbnailUrl = thumbnail.length > 0 ? thumbnail[0] : '';

        let requestData = {
          user_id: '661197252555dd267724ea61',
          thumbnail: thumbnailUrl,
          title: title,
          nickname: '뿡뿡맘마',
          profile: 'google.com/aksdnd.jpg',
          content: contents,
          images: imagesJSON,
          bread_id: 'category456',
        };

        if (selectedCategory === 'recipe') {
          requestData = {
            user_id: '661197252555dd267724ea61',
            thumbnail: thumbnailUrl,
            nickname: '미친',
            profile: 'google.com/aksdnd.jpg',
            title: title,
            content: contents,
            images: imagesJSON,
          };
        }

        const response = await axios.post(url, requestData);
        console.log(111);
        console.log(response);

        toast(`${response.data.nickname}님 글 작성이 완료되었습니다!`);
      } catch (error) {
        console.error('Error saving to database:', error);
      }
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
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: '100%',
          height: '200px',
          border: '2px dashed #ccc',
          borderRadius: '5px',
          textAlign: 'center',
          lineHeight: '200px',
          cursor: 'pointer',
        }}
      >
        드래그 앤 드롭하여 이미지 업로드
      </div>
      {thumbnailPreview}
      <EditContextBtn>
        <button onClick={handleSave}>{saveButtonText}</button>
        <button onClick={goBack}>취소</button>
      </EditContextBtn>
      <ToastContainer />
    </>
  );
};
