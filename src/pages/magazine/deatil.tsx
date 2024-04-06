import { useLocation, Link } from 'react-router-dom';
import ButtonDefault from '../../components/atoms/buttons/ButtonDefault';
import SaveIcon from '/save_icon.svg';
import HeartIcon from '/heart_icon.svg';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';

const MagazineDetail: React.FC = () => {
  const location = useLocation();

  interface LocationData {
    text: string;
    go: string;
  }

  let locationContent: LocationData[] = [];
  if (location.pathname.includes('magazine')) {
    locationContent = [{ text: '매거진', go: 'magazine' }];
  } else if (location.pathname.includes('community')) {
    locationContent = [
      { text: '커뮤니티', go: 'community' },
      { text: '베이커리 추천', go: 'community' },
    ];
  }

  return (
    <section className="detail">
      <div className="flex_default detail_location">
        <ul>
          {locationContent.map((text: LocationData, index: number) => {
            return (
              <li key={index}>
                <Link to={`/${text.go}`}>{text.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="detail_btns">
          <button>
            <img src={SaveIcon} />
          </button>
          <button>
            <img src={HeartIcon} />
          </button>
          <CopyUrlButton />
        </div>
      </div>
      <div className="detail_top">
        <div className="user_cont">
          <div className="user_img"></div>
          <div className="user_info">
            <h3 className="detail_title">솔티밥 갔다왔어요!</h3>
            <p>
              <span className="username">휘낭시에보면 환장하는 빵돌이</span>
              <span className="date">2024-04-01</span>
            </p>
          </div>
        </div>
        <ButtonDefault text={'Edit'} />
      </div>
      <div className="detail_content">
        <p>
          늘 즉흥적으로. 파격적이면서도 자유로운 무무대배이크의 철학입니다.
          홀케이크 제작뿐만 아니라 카페까지 함께 운영하는 브랜드인 이 곳은
          환상적인 궁전 케이크부터 ...
        </p>
        <p>
          ‘만들고 싶은 걸 만듭니다’라는 모토에 맞게 즉흥적으로 디저트를 제공하는
          무무대베이크. 규칙 없이 제멋대로 생긴 케이크가 이곳의 매력 포인트다.
          최근엔 한 뮤직비디오에서 영감을 받은 ‘케이크 지소쿠리’가 인기다.
          실타래가 엉킨 듯한 케이크 데코레이션과 진짜 실타래를 둘러 포장한
          디자인은 이 가게만이 뽐낼 수 있는 ‘힙’ 포인트.
        </p>
      </div>
    </section>
  );
};

export default MagazineDetail;
