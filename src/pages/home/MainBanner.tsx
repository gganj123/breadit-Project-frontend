import styled, { keyframes } from 'styled-components';
import BannerCircle1 from '/banner_circle1.svg';
import BannerCircle2 from '/banner_circle2.svg';
import LinkDefault from '../../components/atoms/links/LinkDefault';

type BannerProps = {
  data: { title: string; content: string };
};

const rotate = keyframes` 
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const CircleRight = styled.img`
  position: absolute;
  top: -6rem;
  right: -6rem;
  animation: ${rotate} 10s linear infinite;
`;

const CircleCenter = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BannerItemStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 72rem;
  position: relative;

  > div {
    width: 50%;
  }

  .content_box {
    background: url('/main_banner_bg.svg') no-repeat 50% 50%;
  }

  .content {
    width: calc(100% - 20rem);
    min-height: 50rem;
    background-color: #fff;
    position: relative;
    top: 12rem;
    left: 10rem;
    padding: 8rem 5rem 0;
    border-radius: 2rem;
  }

  .content .hot_Brand {
    font-size: 2rem;
    color: #3f3f3f;
  }

  .content .title {
    font-size: 3.4rem;
    padding: 2.2rem 0 2.6rem;
    border-bottom: solid 1px #ddd;
    margin-bottom: 3rem;
  }

  .content .point {
    font-size: 2.2rem;
    font-weight: 700;
  }

  .content .text {
    font-size: 2rem;
    color: #181818;
    padding: 2rem 0 3rem;
  }

  .content .text * {
    line-height: 1.6;
  }
`;

const MainBanner: React.FC<BannerProps> = ({ data }) => {
  const { title, content } = data;

  function contentHTML() {
    let HTML = { __html: content };

    return HTML;
  }

  return (
    <BannerItemStyle>
      <div
        className="img_box"
        style={{ background: `url('./main_banner.svg')` }}
      ></div>
      <div className="content_box">
        <div className="content">
          <span className="font_oleo hot_Brand">Hot Brand</span>
          <h3 className="title">{title}</h3>
          <p className="point">이것이 바로 MZ ? 🧠</p>
          <div className="text" dangerouslySetInnerHTML={contentHTML()} />
          <LinkDefault text={'Magazine +'} go={'/magazine'} />
          <CircleRight src={BannerCircle1} />
        </div>
        <CircleCenter src={BannerCircle2} />
      </div>
    </BannerItemStyle>
  );
};

export default MainBanner;
