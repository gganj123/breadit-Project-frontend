import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import BigCard from '../../components/BigCard';

import './admin.css';

const AdminMagazine: React.FC = () => {
  const posts = [
    {
      go: '/magazine/1',
      src: './review_img1.svg',
      title: '솔티밥',
      content: '에레레레ㅔ에레레',
      like: 1,
    },
    {
      go: '/magazine/1',
      src: './review_img2.svg',
      title: '솔티밥',
      content: '아이스크림 냠냠',
      like: 3,
    },
    {
      go: '/magazine/1',
      src: './review_img1.svg',
      title: '솔티밥',
      content: '도넛 냠냠',
      like: 4,
    },
    {
      go: '/magazine/1',
      src: './review_img2.svg',
      title: '솔티밥',
      content: '에레레레ㅔ에레레',
      like: 1,
    },
    {
      go: '/magazine/1',
      src: './review_img1.svg',
      title: '솔티밥',
      content: '아이스크림 냠냠',
      like: 0,
    },
    {
      go: '/magazine/1',
      src: './review_img2.svg',
      title: '솔티밥',
      content: '도넛 냠냠',
      like: 1,
    },
  ];
  return (
    <>
      <section className="admin_area">
        <AdminCategory />
        <section className="admin_cont">
          <AdminGuide />
          <div className="main_title flex_default">
            <h4>매거진 관리</h4>
            <ButtonDeafult text={'매거진 발행'} />
          </div>
          <div className="magazine_card_list">
            {posts.map((post) => {
              return (
                <BigCard
                  go={post.go}
                  src={post.src}
                  title={post.title}
                  content={post.content}
                  like={post.like}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default AdminMagazine;
