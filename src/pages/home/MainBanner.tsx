import BannerCircle1 from '/banner_circle1.svg';
import BannerCircle2 from '/banner_circle2.svg';
import LinkDefault from '../../components/atoms/links/LinkDefault';

type BannerProps = {
  data: { title: string; content: string };
};

const MainBanner: React.FC<BannerProps> = ({ data }) => {
  const { title, content } = data;
  function contentHTML() {
    let HTML = { __html: content };

    return HTML;
  }

  return (
    <div className="banner_item">
      <div
        className="img_box"
        style={{ background: `url('./main_banner.svg')` }}
      ></div>
      <div className="content_box">
        <div className="content">
          <span className="font_oleo">Hot Brand</span>
          <h3>{title}</h3>
          <p className="point">이것이 바로 MZ ? 🧠</p>
          <div className="text" dangerouslySetInnerHTML={contentHTML()} />
          <LinkDefault text={'Magazine +'} go={'/magazine'} />
          <img src={BannerCircle1} className="circle_right" />
        </div>
        <img src={BannerCircle2} className="circle_center" />
      </div>
    </div>
  );
};

export default MainBanner;
