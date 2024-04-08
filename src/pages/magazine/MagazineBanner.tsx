import MagazineCircle from '/magazine_circle.svg';
import MagazineBannerImg from '/magazine_banner.svg';

type BannerProps = {
  data: { title: string; content: string };
};

const MagazineBanner = ({ data }: BannerProps) => {
  const { title, content } = data;
  return (
    <div className="banner_item">
      <img src={MagazineBannerImg} className="banner_img" />
      <div className="content_box">
        <span className="font_oleo">Hot brand</span>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <img src={MagazineCircle} className="magazine_circle" />
    </div>
  );
};

export default MagazineBanner;
